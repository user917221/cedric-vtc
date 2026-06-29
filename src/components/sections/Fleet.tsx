"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BatteryCharging, VolumeX, ShieldCheck, Sparkles } from "lucide-react";

export default function Fleet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial scale-up animation of the large introductory image on scroll
    gsap.fromTo(
      imageWrapperRef.current,
      { scale: 1.15, filter: "brightness(0.2) grayscale(0.5)" },
      {
        scale: 1,
        filter: "brightness(0.5) grayscale(0)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    // Timeline for the sticky section scroll transitions (like the AIR Format Section)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.current,
        pin: true,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Update counter based on scroll progress (1 or 2)
          if (self.progress < 0.5) {
            setActiveSlide(1);
          } else {
            setActiveSlide(2);
          }
        },
      },
    });

    // Animate text transition: Fade out first vehicle, fade in second vehicle
    tl.to(text1Ref.current, {
      opacity: 0,
      yPercent: -20,
      duration: 0.8,
      ease: "power2.inOut",
    })
    .fromTo(
      text2Ref.current,
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    // Subtle background zoom or color shift during the slide change
    tl.to(imageWrapperRef.current, {
      scale: 1.05,
      yPercent: -5,
      duration: 1.5,
      ease: "none",
    }, "-=1.2");

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="flotte" style={{ backgroundColor: "var(--bg-darker)" }}>
      {/* 1. Header (A new premium format intro block) */}
      <div className="container-h" style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "800px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              letterSpacing: "0.45em",
              color: "var(--silver-medium)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Le Standard de l'Éco-Luxe
          </span>
          <h2 className="h1" style={{ marginBottom: "2rem" }}>
            Un Nouveau <span className="text-silver">Format Premium</span>
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "var(--silver-medium)" }}>
            Inspiré par le design d'avant-garde et la pureté des lignes, Cédric VTC propose un transport exclusif à bord de berlines électriques de prestige, sans compromis pour votre confort.
          </p>
        </div>
      </div>

      {/* 2. Panoramic Intro Image (l-format-image) */}
      <div
        ref={imageWrapperRef}
        style={{
          width: "100%",
          height: "75vh",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        <Image
          src="/tesla.png"
          alt="Tesla noire de prestige"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            opacity: 0.6,
          }}
        />
        {/* Subtle glass reflection overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(180deg, var(--bg-darker) 0%, transparent 40%, transparent 60%, var(--bg-darker) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* 3. Sticky Split Showroom (l-format-section with progress counter) */}
      <div
        ref={stickyRef}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          backgroundColor: "var(--bg-main)",
          borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        }}
      >
        {/* Left Side: Pinned Vehicle Visual Frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "var(--bg-darker)",
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
          }}
        >
          {/* Slide 1 Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: activeSlide === 1 ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          >
            <Image
              src="/tesla.png"
              alt="Tesla Model S Plaid"
              fill
              sizes="60vw"
              style={{ objectFit: "cover", opacity: 0.4 }}
            />
          </div>

          {/* Slide 2 Image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: activeSlide === 2 ? 1 : 0,
              transition: "opacity 1s ease",
            }}
          >
            <Image
              src="/tesla.png"
              alt="Tesla Model Y"
              fill
              sizes="60vw"
              style={{ objectFit: "cover", opacity: 0.35, filter: "hue-rotate(15deg)" }}
            />
          </div>

          {/* Radial shadow overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, transparent 30%, var(--bg-main) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Floating specifications label */}
          <div
            style={{
              position: "absolute",
              bottom: "4rem",
              left: "4rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              background: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(10px)",
              padding: "0.8rem 1.6rem",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Sparkles size={14} color="var(--silver-medium)" />
            <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {activeSlide === 1 ? "PRESTIGE BERLINE" : "BUSINESS SUV"}
            </span>
          </div>
        </div>

        {/* Right Side: Sticky Text Details & Spec Sheet */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "0 12%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Vertical Stack of Vehicle details */}
          <div style={{ position: "relative", width: "100%" }}>
            
            {/* Vehicle 1 Details */}
            <div
              ref={text1Ref}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--silver-medium)" }}>
                CATÉGORIE PRESTIGE
              </span>
              <h3 style={{ fontSize: "2.6rem", margin: "1rem 0 2rem 0", color: "#FFFFFF" }}>
                Tesla Model S Plaid
              </h3>
              <p style={{ marginBottom: "3rem" }}>
                L'alliance parfaite de la puissance ultime et du silence feutré. Une berline luxueuse dotée d'une insonorisation active et de sièges ventilés en cuir premium.
              </p>

              {/* Specs Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Motorisation
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>1020 CH</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Autonomie
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>600 KM</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    0-100 KM/H
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>2.1 SEC</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Confort cabine
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>SILENCE ABSOLU</span>
                </div>
              </div>
            </div>

            {/* Vehicle 2 Details (Absolute overlay that GSAP animates in) */}
            <div
              ref={text2Ref}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: 0,
                pointerEvents: activeSlide === 2 ? "auto" : "none",
              }}
            >
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--silver-medium)" }}>
                CATÉGORIE CAPACITÉ
              </span>
              <h3 style={{ fontSize: "2.6rem", margin: "1rem 0 2rem 0", color: "#FFFFFF" }}>
                Tesla Model Y Premium
              </h3>
              <p style={{ marginBottom: "3rem" }}>
                Voyagez avec de grands bagages sans aucun compromis. Un toit vitré panoramique majestueux pour admirer Paris, combiné à un confort de conduite surélevé.
              </p>

              {/* Specs Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Volume Coffre
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>2100 LITRES</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Autonomie
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>530 KM</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Toit Panoramique
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>EN VERRE TOTAL</span>
                </div>
                <div>
                  <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)", textTransform: "uppercase" }}>
                    Capacité
                  </h5>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>4 PAX + BAGAGES</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Progress Counter (calqué sur aircenter.space layout) */}
          <div
            style={{
              position: "absolute",
              bottom: "4rem",
              right: "12%",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: `${activeSlide * 50}%`,
                  background: "var(--gradient-silver)",
                  transition: "width 0.4s ease",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.95rem",
                color: "#FFFFFF",
                letterSpacing: "0.1em",
              }}
            >
              <span className="text-silver">{activeSlide}</span> / 2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
