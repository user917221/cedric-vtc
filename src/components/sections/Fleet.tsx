"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { BatteryCharging, ShieldAlert, Sparkles, VolumeX } from "lucide-react";

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-66.6vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${triggerRef.current?.offsetWidth}`,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const fleetItems = [
    {
      title: "Tesla Model S Plaid",
      class: "PRESTIGE FIRST-CLASS",
      desc: "L'ultime référence de la berline électrique. Performances hors normes, silence absolu, intérieur minimaliste ultra-luxueux avec filtration de l'air HEPA médicale.",
      image: "/tesla.png",
      specs: [
        { label: "Puissance", val: "1020 ch" },
        { label: "0-100 km/h", val: "2.1 s" },
        { label: "Autonomie", val: "600 km" },
        { label: "Capacité", val: "4 passagers" },
      ],
    },
    {
      title: "Tesla Model Y Grande Autonomie",
      class: "BUSINESS SUV CLASS",
      desc: "Idéal pour les voyages d'affaires ou les trajets avec bagages. Un toit vitré panoramique pour admirer Paris et un espace de rangement sans équivalent.",
      image: "/tesla.png", // Re-using the premium Tesla image, can adjust styling
      specs: [
        { label: "Espace Coffre", val: "2100 L" },
        { label: "Intérieur", val: "Premium noir" },
        { label: "Autonomie", val: "533 km" },
        { label: "Capacité", val: "4 passagers + bagages" },
      ],
    },
  ];

  return (
    <div ref={triggerRef} style={{ overflow: "hidden", backgroundColor: "var(--bg-darker)" }}>
      {/* Pin Wrapper */}
      <div
        ref={sectionRef}
        style={{
          height: "100vh",
          width: "300vw", // Three screens wide
          display: "flex",
          position: "relative",
        }}
      >
        {/* Slide 1: Introduction */}
        <div
          id="flotte"
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 10%",
            backgroundColor: "var(--bg-main)",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: "600px" }}>
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
              Éco-Luxe & Technologie
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.1,
                marginBottom: "2rem",
              }}
            >
              Une Flotte Exclusive <span className="text-silver">100% Électrique</span>
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "3rem" }}>
              Pour Cédric VTC, le luxe réside dans les détails. Voyagez à bord de véhicules silencieux d'exception, alliant élégance intemporelle et technologie de pointe.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <VolumeX color="var(--silver-medium)" size={24} />
                <div>
                  <h4 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Silence Absolu</h4>
                  <p style={{ fontSize: "0.85rem" }}>Cabine insonorisée pour un calme reposant.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <BatteryCharging color="var(--silver-medium)" size={24} />
                <div>
                  <h4 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>Zéro Émission</h4>
                  <p style={{ fontSize: "0.85rem" }}>Un transport haut de gamme sans empreinte carbone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slides 2 & 3: Vehicles */}
        {fleetItems.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: "100vw",
              height: "100%",
              backgroundColor: idx % 2 === 0 ? "var(--bg-darker)" : "var(--bg-main)",
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              alignItems: "center",
              padding: "0 8%",
              gap: "4rem",
              position: "relative",
            }}
          >
            {/* Left side: Specs and details */}
            <div style={{ zIndex: 2 }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.3em",
                  color: "var(--silver-medium)",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {item.class}
              </span>
              <h3 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", marginBottom: "1.5rem" }}>
                {item.title}
              </h3>
              <p style={{ marginBottom: "2.5rem", fontSize: "0.95rem" }}>{item.desc}</p>

              {/* Technical Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: "2rem",
                }}
              >
                {item.specs.map((spec, sIdx) => (
                  <div key={sIdx}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "var(--silver-dark)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {spec.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        color: "#FFFFFF",
                        fontWeight: 600,
                      }}
                    >
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Interactive Image Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "60vh",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                background: "radial-gradient(circle, #1a1a1a 0%, #070707 100%)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
              }}
              className="shine-hover"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  mixBlendMode: "screen",
                  opacity: 0.8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "2rem",
                  left: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  padding: "0.5rem 1rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Sparkles size={14} color="var(--gold-accent)" />
                <span style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>CONFORT ULTIME</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
