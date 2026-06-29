"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, Clock, Award, Briefcase } from "lucide-react";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        cardRefs.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const servicesList = [
    {
      title: "Transferts Aéroports",
      desc: "CDG, Orly, Le Bourget. Accueil nominatif en bout de jetée avec tablette, prise en charge des bagages et suivi en temps réel de votre vol.",
      icon: Plane,
    },
    {
      title: "Mise à Disposition",
      desc: "Chauffeur dédié pour vos rendez-vous d'affaires, sessions shopping ou événements. Flexibilité totale, arrêts illimités et discrétion.",
      icon: Clock,
    },
    {
      title: "Voyages d'Affaires",
      desc: "Cabine Tesla silencieuse configurée pour maximiser votre productivité. Wi-Fi sécurisé, prises de recharge et discrétion absolue.",
      icon: Briefcase,
    },
    {
      title: "Prestige & Événementiel",
      desc: "Mariages, soirées privées, lancements de produits. Coordination personnalisée et présentation impeccable du véhicule et du chauffeur.",
      icon: Award,
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      style={{
        backgroundColor: "var(--bg-main)",
        padding: "8rem 2rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              letterSpacing: "0.4em",
              color: "var(--silver-medium)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Services sur-mesure
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            L'Excellence du <span className="text-silver">Service VTC</span>
          </h2>
        </div>

        {/* Grid layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el;
                }}
                className="shine-hover"
                style={{
                  backgroundColor: "var(--bg-card)",
                  padding: "3rem 2rem",
                  border: "1px solid rgba(255, 255, 255, 0.03)",
                  transition: "var(--transition-smooth)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-card-hover)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                  }}
                >
                  <Icon size={22} color="var(--silver-light)" />
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-serif)",
                    color: "#FFFFFF",
                  }}
                >
                  {srv.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: "1.7",
                    color: "var(--silver-medium)",
                  }}
                >
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
