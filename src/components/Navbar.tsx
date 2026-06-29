"use client";

import { useState, useRef } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    initial: {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
    },
    animate: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Notre Flotte", href: "#flotte" },
    { name: "Réservation", href: "#reservation" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mixBlendMode: "difference", // Awwwards overlap styling
        }}
      >
        {/* Brand Logo */}
        <a
          href="#accueil"
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: "700",
            fontSize: "1.4rem",
            letterSpacing: "0.15em",
            color: "#FFFFFF",
          }}
        >
          CÉDRIC<span style={{ fontWeight: "300", opacity: 0.8 }}> VTC</span>
        </a>

        {/* Action Button & Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {/* Quick Call */}
          <a
            href="tel:+33600000000"
            className="btn-premium-outline"
            style={{
              padding: "0.6rem 1.5rem",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "0",
              fontWeight: 400,
            }}
          >
            <Phone size={14} />
            <span>Appeler</span>
          </a>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.5rem",
            }}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "var(--bg-darker)",
              zIndex: 2000,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "10% 5%",
            }}
          >
            {/* Close Button */}
            <div
              style={{
                position: "absolute",
                top: "2.5rem",
                right: "2.5rem",
              }}
            >
              <MagneticButton
                onClick={() => setIsOpen(false)}
                className="btn-premium-outline"
                style={{
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={24} />
              </MagneticButton>
            </div>

            {/* Nav Menu Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2.5rem",
                maxWidth: "800px",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.4em",
                  color: "var(--silver-medium)",
                  textTransform: "uppercase",
                  marginBottom: "-1rem",
                }}
              >
                Navigation
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "3.5rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      display: "block",
                      lineHeight: 1.1,
                      transition: "var(--transition-smooth)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(20px)";
                      e.currentTarget.style.color = "var(--silver-medium)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0px)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Footer details in menu */}
            <div
              style={{
                marginTop: "auto",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1.5rem",
              }}
            >
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--silver-dark)" }}>
                  RÉSERVEZ EN DIRECT
                </p>
                <a
                  href="tel:+33600000000"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  +33 6 00 00 00 00
                </a>
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--silver-dark)" }}>
                  CONTACT
                </p>
                <a
                  href="mailto:contact@cedric-vtc.fr"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  contact@cedric-vtc.fr
                </a>
              </div>
              <div>
                <p style={{ fontSize: "0.8rem", color: "var(--silver-dark)" }}>
                  DISPONIBLE
                </p>
                <p style={{ color: "#FFFFFF", fontSize: "1.1rem" }}>
                  24/7 - Paris & Île-de-France
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
