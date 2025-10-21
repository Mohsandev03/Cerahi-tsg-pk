"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Agency = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLHeadingElement[]>([]);
  const words = ["HAS", "AN", "UNSEEN", "HAND"];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=700%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    const positions = [
      { x: -560, y: 220 },
      { x: -330, y: 220 },
      { x: -1, y: 220 },
      { x: 400, y: 220 },
    ];

    // 🟢 "HAS" slides across the screen
    const has = wordsRef.current[0];
    if (has) {
      tl.fromTo(
        has,
        { x: screenWidth * 1, opacity: 1, color: "#000" },
        {
          x: -screenWidth * 0.6,
          opacity: 1,
          ease: "power2.inOut",
          duration: 5,
        },
        0
      );

      tl.to(has, { opacity: 0, duration: 1.2, ease: "power1.out" }, ">-0.8");
    }

    // 🎨 Background change before "AN"
    tl.to(
      section,
      {
        backgroundColor: "#000",
        color: "#fff",
        duration: 1.5,
        ease: "power2.inOut",
      },
      5
    );

    // 🟡 "AN" rises from bottom → pauses → exits top
    const an = wordsRef.current[1];
    if (an) {
      tl.fromTo(
        an,
        { y: screenHeight, opacity: 0, scaleY: 1 },
        {
          y: 0,
          opacity: 1,
          scaleY: 1.3,
          duration: 3,
          ease: "power3.out",
        },
        6
      );

      tl.to(
        an,
        {
          y: -screenHeight,
          opacity: 0,
          scaleY: 1.6,
          duration: 3,
          ease: "power3.in",
        },
        "+=2"
      );
    }

    // 🟣 The rest (UNSEEN, HAND)
    wordsRef.current.slice(2).forEach((word, i) => {
      tl.fromTo(
        word,
        { opacity: 0, y: 200, scale: 1.2 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
        },
        10 + i * 2
      );

      tl.to(
        word,
        {
          x: positions[i + 2]?.x ?? 0,
          y: positions[i + 2]?.y ?? 0,
          scale: 0.6,
          opacity: 0.9,
          duration: 2,
          ease: "power3.inOut",
        },
        11 + i * 2
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="agency" ref={sectionRef}>
      <div className="center-content">
        {words.map((text, i) => (
          <h2
            key={i}
            className="title"
            ref={(el) => {
              if (el) wordsRef.current[i] = el;
            }}
          >
            <strong>{text}</strong>
          </h2>
        ))}
      </div>

      <style jsx>{`
        .agency {
          height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          background: #fff;
          color: #000;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .center-content {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          perspective: 1000px;
        }

        .title {
          position: absolute;
          font-size: clamp(3rem, 10vw, 12rem);
          font-weight: 900;
          margin: 0;
          line-height: 1;
          opacity: 0;
          white-space: nowrap;
          transform-origin: center;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Agency;
