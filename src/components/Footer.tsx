"use client";

import { ArrowUp } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#070707",
        padding: "5rem 2rem 2rem 2rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "4rem",
            marginBottom: "5rem",
          }}
        >
          {/* Logo & Slogan */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: "700",
                fontSize: "1.6rem",
                letterSpacing: "0.15em",
                color: "#FFFFFF",
              }}
            >
              CÉDRIC<span style={{ fontWeight: "300", opacity: 0.8 }}> VTC</span>
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--silver-medium)", maxWidth: "300px" }}>
              L'excellence du VTC de prestige 100% électrique à Paris et en Île-de-France. Le luxe silencieux de la mobilité verte.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--silver-medium)",
                marginBottom: "1.5rem",
              }}
            >
              Renseignements
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", padding: 0 }}>
              <li>
                <a
                  href="tel:+33600000000"
                  style={{ fontSize: "0.95rem", color: "#FFFFFF", transition: "var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--silver-medium)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  +33 6 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@cedric-vtc.fr"
                  style={{ fontSize: "0.95rem", color: "#FFFFFF", transition: "var(--transition-fast)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--silver-medium)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                >
                  contact@cedric-vtc.fr
                </a>
              </li>
              <li style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>
                Disponible 24 heures sur 24, 7 jours sur 7.
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--silver-medium)",
                marginBottom: "1.5rem",
              }}
            >
              Secteurs Prise en charge
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", padding: 0 }}>
              <li style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>Paris & Métropole du Grand Paris</li>
              <li style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>Aéroports CDG, Orly, Le Bourget</li>
              <li style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>Gares Parisiennes</li>
              <li style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>Déplacements toutes distances</li>
            </ul>
          </div>

          {/* Quick links & Back to top */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2rem" }}>
            <h4
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--silver-medium)",
                marginBottom: "1.5rem",
              }}
            >
              Retour en haut
            </h4>
            <MagneticButton
              onClick={scrollToTop}
              className="btn-premium-outline"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ArrowUp size={20} />
            </MagneticButton>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "var(--silver-dark)",
          }}
        >
          <div>© {new Date().getFullYear()} Cédric VTC. Tous droits réservés.</div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="#legal"
              style={{ transition: "var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--silver-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver-dark)")}
            >
              Mentions Légales
            </a>
            <a
              href="#cgv"
              style={{ transition: "var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--silver-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--silver-dark)")}
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
