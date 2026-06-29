"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShieldCheck, Compass, HeartHandshake } from "lucide-react";

export default function Harmony() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax zoom of full screen background
    gsap.fromTo(
      bgRef.current,
      { scale: 1.1 },
      {
        scale: 1.0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Floating card translateY parallax (calqué sur l-harmony__layer--bottom l-harmony__layer--spacing)
    gsap.fromTo(
      cardRef.current,
      { y: "15vh" },
      {
        y: "-15vh",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "120vh", // Extra scroll height for card parallax overlap
        backgroundColor: "var(--bg-darker)",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen Backdrop (Sleek panoramic glass view or abstract curves) */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/tesla.png')", // High quality backdrop
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.35,
          zIndex: 1,
          filter: "brightness(0.3) contrast(1.1) grayscale(0.1)",
        }}
      />

      {/* Luxury Radial Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle, transparent 10%, var(--bg-darker) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Floating Card Layer (l-harmony__layer--bottom) */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "100%",
          maxWidth: "520px",
          zIndex: 3,
          padding: "0 2rem",
        }}
      >
        <div
          ref={cardRef}
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            padding: "3.5rem 2.5rem",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.6)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "var(--silver-medium)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            L'Expérience à Bord
          </span>
          <h2
            className="h2"
            style={{
              fontSize: "1.8rem",
              lineHeight: "1.3",
              marginBottom: "2rem",
              fontFamily: "var(--font-serif)",
            }}
          >
            Une harmonie <span className="text-silver">intelligente</span> de silence et de confort
          </h2>

          <p style={{ fontSize: "0.9rem", color: "var(--silver-medium)", marginBottom: "2.5rem" }}>
            Profitez du toit vitré panoramique pour admirer la capitale, dans une atmosphère sereine. Une conduite souple, sécurisée et éco-responsable qui redéfinit le voyage privé.
          </p>

          {/* Quick Core Assets List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <ShieldCheck size={18} color="var(--silver-medium)" />
              <span style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>Sécurité & Conduite Défensive</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <HeartHandshake size={18} color="var(--silver-medium)" />
              <span style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>Accueil Personnalisé aux Portes</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Compass size={18} color="var(--silver-medium)" />
              <span style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>Itinéraires Intelligents anti-embouteillages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
