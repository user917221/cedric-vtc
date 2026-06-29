"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Coffee, Wifi, Sparkles, VolumeX } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Sticky timeline for amenities transitions (like l-status image-slider-sticky)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyRef.current,
        pin: true,
        start: "top top",
        end: "+=120%",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.progress < 0.5) {
            setActiveSlide(1);
          } else {
            setActiveSlide(2);
          }
        },
      },
    });

    // Animate text slide-out and slide-in
    tl.to(text1Ref.current, {
      opacity: 0,
      yPercent: -15,
      duration: 0.8,
      ease: "power2.inOut",
    })
    .fromTo(
      text2Ref.current,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="services" style={{ backgroundColor: "var(--bg-main)" }}>
      
      {/* Title Header */}
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
            Le Confort de Chauffeur
          </span>
          <h2 className="h1" style={{ marginBottom: "2rem" }}>
            Services & <span className="text-silver">Équipements à Bord</span>
          </h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "var(--silver-medium)" }}>
            Chaque trajet est conçu pour être une parenthèse de sérénité. Votre chauffeur assure des services haut de gamme et met à votre disposition des équipements d'excellence.
          </p>
        </div>
      </div>

      {/* Sticky Split Layout (calqué sur l-status image-slider-sticky) */}
      <div
        ref={stickyRef}
        style={{
          height: "100vh",
          width: "100%",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          backgroundColor: "var(--bg-darker)",
          borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        }}
      >
        {/* Left Side: Sticky Details */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            padding: "0 12%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
          }}
        >
          <div style={{ position: "relative", width: "100%" }}>
            
            {/* Amenity 1 */}
            <div
              ref={text1Ref}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  marginBottom: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <Wifi size={22} color="var(--silver-light)" />
              </div>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--silver-medium)" }}>
                ÉQUIPEMENTS DE BORD
              </span>
              <h3 style={{ fontSize: "2.4rem", margin: "1rem 0 2rem 0", color: "#FFFFFF" }}>
                Connectivité & Rafraîchissements
              </h3>
              <p>
                Wi-Fi haut débit sécurisé, tablettes tactiles, chargeurs universels et sélection de rafraîchissements (bouteilles d'eau consignées, confiseries fines). Votre trajet devient un espace de travail ou de détente absolu.
              </p>
            </div>

            {/* Amenity 2 */}
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
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  marginBottom: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <VolumeX size={22} color="var(--silver-light)" />
              </div>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "var(--silver-medium)" }}>
                BIEN-ÊTRE EN VOL
              </span>
              <h3 style={{ fontSize: "2.4rem", margin: "1rem 0 2rem 0", color: "#FFFFFF" }}>
                Silence & Climatisation active
              </h3>
              <p>
                Insonorisation active haut de gamme pour vous isoler du tumulte urbain. La climatisation est dotée d'un filtre HEPA de qualité médicale qui retient 99.97% des particules, virus et odeurs.
              </p>
            </div>

          </div>

          {/* Simple Slider Progress */}
          <div
            style={{
              position: "absolute",
              bottom: "4rem",
              left: "12%",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
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
          </div>
        </div>

        {/* Right Side: Pinned Image Slide Panel */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "var(--bg-darker)",
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
              alt="Rafraîchissements et Wi-Fi à bord"
              fill
              sizes="60vw"
              style={{ objectFit: "cover", opacity: 0.35 }}
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
              alt="Silence et filtre HEPA de la Tesla"
              fill
              sizes="60vw"
              style={{ objectFit: "cover", opacity: 0.3, filter: "hue-rotate(180deg) brightness(0.9)" }}
            />
          </div>

          {/* Vignette Shadow */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle, transparent 20%, var(--bg-darker) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

      </div>
    </section>
  );
}
