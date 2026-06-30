import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = canvas.parentElement as HTMLElement;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    } catch {
      return;
    }

    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.z = 500;

    // Compute world-space bounds visible at z=0
    const vFov = (camera.fov * Math.PI) / 180;
    const halfH = Math.tan(vFov / 2) * camera.position.z;
    const halfW = halfH * camera.aspect;

    const count = isMobile ? 45 : 120;
    const positions = new Float32Array(count * 3);
    const originX = new Float32Array(count);
    const velY = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() * 2 - 1) * halfW;
      const y = (Math.random() * 2 - 1) * halfH;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;
      originX[i] = x;
      velY[i] = 0.25 + Math.random() * 0.35;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xff9800,
      size: isMobile ? 1.5 : 2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.18,
    });

    scene.add(new THREE.Points(geometry, material));

    let rafId = 0;
    let running = false;

    const loop = () => {
      rafId = requestAnimationFrame(loop);
      const now = Date.now();
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const newY = pos.getY(i) + velY[i];
        if (newY > halfH) {
          const nx = (Math.random() * 2 - 1) * halfW;
          originX[i] = nx;
          pos.setX(i, nx);
          pos.setY(i, -halfH);
        } else {
          pos.setY(i, newY);
          pos.setX(i, originX[i] + Math.sin(now * 0.001 + i) * halfW * 0.012);
        }
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          loop();
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0 }
    );
    io.observe(container);

    const ro = new ResizeObserver(() => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      io.disconnect();
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
