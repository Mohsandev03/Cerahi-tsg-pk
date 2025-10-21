"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LetsWorkTunnel = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  const layerConfig = [
    { top: "70vh" },
    { top: "60vh" },
    { top: "51vh" },
    { top: "44vh" },
    { top: "37vh" },
    { top: "31vh" },
    { top: "26vh" },
    { top: "22vh" },
    { top: "19vh" },
    { top: "16.5vh" },
    
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // 🌀 Tunnel open/close animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=400%",
        scrub: 1.2,
        pin: true,
      },
    });

    // Animate layers entering from bottom & stacking behind the first
    layerConfig.forEach((_, i) => {
      const el = layersRef.current[i];
      if (!el) return;

      tl.fromTo(
        el,
        { y: "100vh", scale: 0.95 },
        {
          y: 0,
          scale: 1,
          ease: "power3.inOut",
          duration: 1.4,
        },
        i * 0.3
      );
    });

    // ❌ No fade or exit animation — just clean scroll lock
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <section className="tunnel-section" ref={sectionRef}>
      <div className="tunnel-wrapper">
        {layerConfig.map((config, i) => (
          <div
            key={i}
            ref={(el) => el && (layersRef.current[i] = el)}
            className="tunnel-layer"
            style={{
              zIndex:
                i === 0 ? layerConfig.length + 10 : layerConfig.length - i, // first one always on top
              position: "absolute",
              top: config.top,
              left: 0,
              width: "100%",
              transform: "scale(1)",
            }}
          >
            <h1 className="tunnel-text">CHAMPION</h1>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tunnel-section {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .tunnel-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .tunnel-layer {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          pointer-events: none;
          will-change: transform;
        }

        .tunnel-text {
          font-size: clamp(5rem, 15vw, 20rem);
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          line-height: 0.8;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          mix-blend-mode: lighten;
          text-align: center;
          padding-bottom: 3rem;
        }
      `}</style>
    </section>
  );
};

export default LetsWorkTunnel;
