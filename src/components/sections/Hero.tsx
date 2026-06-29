"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

interface HeroProps {
  isLoaded: boolean;
}

export default function Hero({ isLoaded }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftLogoRef = useRef<HTMLSpanElement>(null);
  const rightLogoRef = useRef<HTMLSpanElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isLoaded) return;

    // Entrance Animation (Preloader complete)
    const entryTl = gsap.timeline();
    entryTl
      .to(bgRef.current, {
        scale: 1,
        opacity: 0.45,
        duration: 2.2,
        ease: "power3.out",
      })
      .fromTo(
        [leftLogoRef.current, rightLogoRef.current],
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out" },
        "-=1.6"
      )
      .fromTo(
        introTextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" },
        "-=0.6"
      );

    // Scroll-driven Splitting Logo & Parallax (calqué sur aircenter.space)
    // Left part "CÉDRIC" slides left, right part "VTC" slides right
    gsap.to(leftLogoRef.current, {
      xPercent: -40,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(rightLogoRef.current, {
      xPercent: 40,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Background Parallax & Zoom-out
    gsap.to(bgRef.current, {
      scale: 0.9,
      yPercent: 10,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content fade-out
    gsap.to([introTextRef.current, ctaRef.current], {
      yPercent: -20,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });
  }, [isLoaded]);

  return (
    <section
      ref={containerRef}
      id="accueil"
      style={{
        position: "relative",
        width: "100%",
        height: "150vh", // Extra scroll height for parallax layers
        backgroundColor: "var(--bg-darker)",
      }}
    >
      {/* Sticky Layer */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Cinematic Background */}
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
            transform: "scale(1.2)",
            zIndex: 1,
            filter: "brightness(0.35) contrast(1.15) grayscale(0.2)",
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, transparent 20%, var(--bg-darker) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Scroll Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
            padding: "0 2rem",
          }}
        >
          {/* Subtitle */}
          <div
            ref={introTextRef}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              opacity: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "var(--silver-medium)",
                fontWeight: 400,
              }}
            >
              Chauffeur Privé Éco-Luxe • Paris
            </span>
          </div>

          {/* Splitting Large Brand Mark */}
          <h1
            style={{
              fontSize: "clamp(3.5rem, 12vw, 9rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              display: "flex",
              justifyContent: "center",
              gap: "2vw",
              overflow: "hidden",
              width: "100%",
              pointerEvents: "none",
            }}
          >
            <span ref={leftLogoRef} className="text-silver" style={{ display: "inline-block" }}>
              CÉDRIC
            </span>
            <span ref={rightLogoRef} style={{ display: "inline-block", fontWeight: 200 }}>
              VTC
            </span>
          </h1>

          {/* Slogan */}
          <div style={{ maxWidth: "650px", overflow: "hidden" }}>
            <p
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: 300,
                color: "var(--silver-light)",
                lineHeight: "1.6",
                letterSpacing: "0.05em",
              }}
            >
              L'excellence silencieuse du transport haut de gamme en Tesla noire.
            </p>
          </div>

          {/* Buttons */}
          <div
            ref={ctaRef}
            style={{
              display: "flex",
              gap: "1.5rem",
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
            >
              Découvrir la flotte
            </button>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--silver-medium)",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={12} color="white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
