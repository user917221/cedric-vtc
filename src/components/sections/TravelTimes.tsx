"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Navigation } from "lucide-react";

export default function TravelTimes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax background scroll effect (like l-life-cards-background)
    gsap.fromTo(
      bgRef.current,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Staggered fade-in of time cards on scroll
    if (cardListRef.current) {
      const cards = cardListRef.current.querySelectorAll("li");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardListRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const items = [
    { num: "30", unit: "min", label: "Aéroport Orly", desc: "Depuis Paris Centre" },
    { num: "45", unit: "min", label: "Aéroport CDG", desc: "Depuis Paris Centre" },
    { num: "15", unit: "min", label: "La Défense", desc: "Liaisons d'affaires" },
    { num: "10", unit: "min", label: "Gares Parisiennes", desc: "Lyon, Montparnasse, Nord" },
  ];

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        backgroundColor: "var(--bg-darker)",
        padding: "8rem 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
      {/* Pinned background visual (moody Paris map outline or vehicle silhouette) */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-20%",
          left: 0,
          width: "100%",
          height: "140%",
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.015) 0%, transparent 60%), url('/tesla.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          zIndex: 1,
          filter: "brightness(0.3) contrast(1.2) blur(2px)",
        }}
      />

      <div className="container-h" style={{ position: "relative", zIndex: 2 }}>
        {/* Intro */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", marginBottom: "5rem" }}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                letterSpacing: "0.45em",
                color: "var(--silver-medium)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Ponctualité & Réactivité
            </span>
            <h2 className="h2" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Au Cœur de vos <span className="text-silver">Déplacements</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontSize: "1rem", color: "var(--silver-medium)", margin: 0 }}>
              Cédric VTC assure une planification rigoureuse de vos transferts. Grâce au suivi GPS et des vols en temps réel, votre chauffeur anticipe chaque itinéraire.
            </p>
          </div>
        </div>

        {/* Travel Cards (l-life-cards list representation) */}
        <ul
          ref={cardListRef}
          style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            padding: 0,
          }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              {/* Big Time Stat */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem", marginBottom: "1.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "4rem",
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "#FFFFFF",
                  }}
                >
                  {item.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--silver-medium)",
                  }}
                >
                  {item.unit}
                </span>
              </div>

              {/* Destination Details */}
              <h4 style={{ fontSize: "1.25rem", color: "#FFFFFF", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Navigation size={14} color="var(--silver-medium)" />
                {item.label}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--silver-dark)" }}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
