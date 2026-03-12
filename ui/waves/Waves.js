"use client";

import { useEffect, useRef } from "react";

export default function Waves({
  lineColor = "white",
  backgroundColor = "transparent",
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  style = {},
  className = "",
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let tick = 0;
    let mouse = { x: -1, y: -1 };
    let cols = [];

    function resize() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      init();
    }

    function init() {
      cols = [];
      const numCols = Math.ceil(canvas.width / xGap) + 1;
      for (let i = 0; i < numCols; i++) {
        const col = [];
        const numRows = Math.ceil(canvas.height / yGap) + 1;
        for (let j = 0; j < numRows; j++) {
          col.push({ x: 0, y: 0, ox: 0, oy: 0, vx: 0, vy: 0 });
        }
        cols.push(col);
      }
    }

    function updatePoints() {
      const numCols = cols.length;
      for (let i = 0; i < numCols; i++) {
        const col = cols[i];
        const numRows = col.length;
        for (let j = 0; j < numRows; j++) {
          const pt = col[j];
          const originX = i * xGap;
          const originY = j * yGap;

          // wave offset
          const waveX =
            Math.sin(tick * waveSpeedX + j * 0.3 + i * 0.1) * waveAmpX;
          const waveY =
            Math.cos(tick * waveSpeedY + i * 0.3 + j * 0.1) * waveAmpY;

          pt.ox = originX + waveX;
          pt.oy = originY + waveY;

          // cursor influence
          if (mouse.x > 0) {
            const dx = mouse.x - pt.ox;
            const dy = mouse.y - pt.oy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxCursorMove) {
              const force = (maxCursorMove - dist) / maxCursorMove;
              pt.vx -= dx * force * tension * 4;
              pt.vy -= dy * force * tension * 4;
            }
          }

          pt.vx += (pt.ox - pt.x) * tension;
          pt.vy += (pt.oy - pt.y) * tension;
          pt.vx *= friction;
          pt.vy *= friction;
          pt.x += pt.vx;
          pt.y += pt.vy;
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      const numCols = cols.length;
      for (let i = 0; i < numCols; i++) {
        const col = cols[i];
        const numRows = col.length;
        ctx.beginPath();
        for (let j = 0; j < numRows; j++) {
          const pt = col[j];
          if (j === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            const prev = col[j - 1];
            const mx = (prev.x + pt.x) / 2;
            const my = (prev.y + pt.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
          }
        }
        ctx.stroke();
      }
    }

    function loop() {
      tick++;
      updatePoints();
      draw();
      animId = requestAnimationFrame(loop);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = -1;
      mouse.y = -1;
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();
    loop();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    xGap,
    yGap,
    friction,
    tension,
    maxCursorMove,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
