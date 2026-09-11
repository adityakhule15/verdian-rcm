"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  label: string;
  sublabel: string;
  iconType: string;
}

export function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse interactive coordinates
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Core healthcare flow nodes: Healthcare -> Data -> Coding -> Accuracy -> Outcome
    const nodes: NodePoint[] = [
      { x: 0.16, y: 0.32, label: "Healthcare", sublabel: "Clinical Encounters", iconType: "cross" },
      { x: 0.48, y: 0.18, label: "Data", sublabel: "Clinical Records", iconType: "data" },
      { x: 0.82, y: 0.34, label: "Coding", sublabel: "ICD-10 / CPT / HCC", iconType: "code" },
      { x: 0.68, y: 0.74, label: "Accuracy", sublabel: "Quality Audits & QA", iconType: "check" },
      { x: 0.28, y: 0.76, label: "Better Outcomes", sublabel: "Careers & Excellence", iconType: "star" },
    ];

    // Node connections in a ring + cross-links
    const connections: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [1, 3],
      [0, 2],
    ];

    // Dynamic travel particles
    const particles = Array.from({ length: 32 }, () => ({
      connectionIdx: Math.floor(Math.random() * connections.length),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
      size: 2 + Math.random() * 2.5,
    }));

    // Ambient floating particles
    const ambientParticles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffsetX = (mouse.x - width / 2) * 0.04;
      const mouseOffsetY = (mouse.y - height / 2) * 0.04;

      // Draw ambient background particles
      ambientParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 212, 196, ${p.alpha * 0.35})`;
        ctx.fill();
      });

      // Compute actual node coordinates with slight dynamic floating motion
      const computedNodes = nodes.map((node, i) => {
        const floatX = Math.sin(tick * 0.02 + i * 1.5) * 6 + mouseOffsetX * (1 + i * 0.2);
        const floatY = Math.cos(tick * 0.025 + i * 1.2) * 6 + mouseOffsetY * (1 + i * 0.2);
        return {
          x: node.x * width + floatX,
          y: node.y * height + floatY,
          label: node.label,
          sublabel: node.sublabel,
        };
      });

      // Draw connection lines with glowing gradients
      connections.forEach(([startIdx, endIdx]) => {
        const start = computedNodes[startIdx];
        const end = computedNodes[endIdx];

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = "rgba(45, 189, 171, 0.18)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Update and draw traveling energy particles between nodes
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.connectionIdx = Math.floor(Math.random() * connections.length);
        }

        const [startIdx, endIdx] = connections[p.connectionIdx];
        const start = computedNodes[startIdx];
        const end = computedNodes[endIdx];

        const px = start.x + (end.x - start.x) * p.progress;
        const py = start.y + (end.y - start.y) * p.progress;

        // Particle glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
        glow.addColorStop(0, "rgba(94, 212, 196, 0.9)");
        glow.addColorStop(0.5, "rgba(45, 189, 171, 0.4)");
        glow.addColorStop(1, "rgba(45, 189, 171, 0)");

        ctx.beginPath();
        ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      });

      // Draw Node Cards / Circles
      computedNodes.forEach((node, i) => {
        // Outer pulsing ring
        const pulse = Math.sin(tick * 0.04 + i) * 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 24 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(45, 189, 171, 0.08)";
        ctx.fill();

        // Node Main Body
        ctx.beginPath();
        ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = "#0c233f";
        ctx.fill();
        ctx.strokeStyle = "#2dbdab";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Center bright dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#5ed4c4";
        ctx.fill();

        // Node Text Badge
        ctx.save();
        ctx.font = "bold 12px Inter, sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + 34);

        ctx.font = "500 10px Inter, sans-serif";
        ctx.fillStyle = "#99e7da";
        ctx.fillText(node.sublabel, node.x, node.y + 47);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-3xl bg-navy-900/60 border border-white/10 backdrop-blur-sm shadow-2xl">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* Overlay header badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/80 px-3 py-1.5 text-xs font-semibold text-teal-300 border border-white/10 shadow-xs">
          <span className="size-2 rounded-full bg-teal-400 animate-ping" />
          Interactive Healthcare Network
        </span>
        <span className="hidden sm:inline-flex text-[0.6875rem] font-medium text-navy-300">
          Move cursor to interact
        </span>
      </div>

      {/* Bottom Process Path indicator */}
      <div className="absolute bottom-3 left-4 right-4 rounded-xl bg-navy-950/90 border border-white/10 px-4 py-2.5 flex items-center justify-between text-[0.75rem] text-navy-200 pointer-events-none">
        <span className="text-teal-400 font-bold">Flow:</span>
        <span className="truncate">Healthcare → Data → Coding → Accuracy → Outcomes</span>
      </div>
    </div>
  );
}
