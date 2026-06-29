"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Shield, Compass, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "../ui/MagneticButton";

interface HeroProps {
  isLoaded: boolean;
}

export default function Hero({ isLoaded }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;

    gsap.registerPlugin(ScrollTrigger);

    // Elegant entrance timeline
    const tl = gsap.timeline();

    tl.to(bgRef.current, {
      scale: 1,
      opacity: 0.45,
      duration: 2.2,
      ease: "power3.out",
    })
      .fromTo(
        titleRef.current?.querySelectorAll(".char-anim") || [],
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1.5"
      )
      .fromTo(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

    gsap.to(bgRef.current, {
      yPercent: 15,
      scale: 0.95,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [isLoaded]);

  return (
    <section
      id="accueil"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--bg-darker)",
        overflow: "hidden",
        padding: "8rem 2rem 2rem 2rem",
      }}
    >
      {/* Background Image (Sleek Tesla in dark Parisian setting) */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/tesla.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0,
          transform: "scale(1.15)",
          zIndex: 1,
          filter: "brightness(0.35) contrast(1.1)",
        }}
      />

      {/* Luxury Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle, transparent 20%, var(--bg-darker) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Subtle Luxury Ribbon */}
        <div
          ref={subtitleRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            opacity: 0,
          }}
        >
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--silver-medium)" }} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "var(--silver-medium)",
              fontWeight: 500,
            }}
          >
            Chauffeur Privé Éco-Responsable
          </span>
          <span style={{ width: "30px", height: "1px", backgroundColor: "var(--silver-medium)" }} />
        </div>

        {/* Master Heading */}
        <h1
          ref={titleRef}
          style={{
            fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            fontWeight: 700,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ display: "block", overflow: "hidden" }}>
            <span className="char-anim text-silver" style={{ display: "inline-block" }}>
              CÉDRIC VTC
            </span>
          </span>
        </h1>

        <p
          style={{
            maxWidth: "600px",
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            fontWeight: 300,
            color: "var(--silver-light)",
            opacity: 0.8,
            letterSpacing: "0.05em",
          }}
        >
          Vivez l'excellence du transport premium en Tesla noire de prestige. Silencieuse, élégante et raffinée.
        </p>

        {/* Action Buttons */}
        <div
          ref={ctaRef}
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "1.5rem",
            opacity: 0,
          }}
        >
          <MagneticButton
            className="btn-premium"
            onClick={() => {
              document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Réserver un trajet
          </MagneticButton>

          <button
            className="btn-premium-outline"
            onClick={() => {
              document.getElementById("flotte")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              borderRadius: "0",
            }}
          >
            La Flotte Tesla
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.6,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--silver-medium)",
          }}
        >
          Faites défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} color="white" />
        </motion.div>
      </div>

      {/* Core Brand Values Panel */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "linear-gradient(to top, rgba(7,7,7,0.9) 0%, rgba(7,7,7,0) 100%)",
          padding: "3rem 2rem",
          zIndex: 3,
          display: "none", // Will be visible on desktop grid
        }}
      />
    </section>
  );
}
