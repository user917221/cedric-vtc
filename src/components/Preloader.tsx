"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant non-linear speed increase for luxury preloader feel
    let count = 0;
    const interval = setInterval(() => {
      const remaining = 100 - count;
      const step = Math.ceil(Math.random() * (remaining > 50 ? 5 : remaining > 20 ? 3 : 1));
      count = Math.min(100, count + step);
      setProgress(count);

      if (count === 100) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Exit animations using GSAP
      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      tl.to(numberRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power4.inOut",
      })
      .to(logoRef.current, {
        letterSpacing: "0.6em",
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
      }, "-=0.4")
      .to(lineRef.current, {
        scaleX: 0,
        duration: 0.6,
        ease: "power3.inOut",
      }, "-=0.8")
      .to(containerRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Slide up reveal
        duration: 1.4,
        ease: "power4.inOut",
      });
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#070707",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div style={{ position: "relative", textAlign: "center" }}>
        <div
          ref={logoRef}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            transition: "all 0.8s ease",
          }}
        >
          <span className="text-silver">CÉDRIC VTC</span>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "var(--silver-medium)",
              marginTop: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            Chauffeur de Prestige
          </div>
        </div>

        {/* Elegant loading line */}
        <div
          style={{
            width: "200px",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            margin: "2rem auto 0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "var(--gradient-silver)",
              transformOrigin: "left",
              transform: `scaleX(${progress / 100})`,
              transition: "transform 0.1s linear",
            }}
          />
        </div>
      </div>

      <div
        ref={numberRef}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          fontFamily: "var(--font-serif)",
          fontSize: "6rem",
          color: "rgba(255, 255, 255, 0.03)",
          fontWeight: 700,
        }}
      >
        {progress}%
      </div>
    </div>
  );
}
