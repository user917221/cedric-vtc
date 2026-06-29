"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "Tesla Model S Plaid",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.5, ease: "easeIn" as const } },
  };

  return (
    <section
      id="reservation"
      style={{
        backgroundColor: "var(--bg-darker)",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Estimation & Réservation
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Planifiez Votre <span className="text-silver">Trajet</span>
          </h2>
        </div>

        {/* Step Progress Bar */}
        {!isSubmitted && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "3rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: `${((step - 1) / 2) * 100}%`,
                height: "1px",
                background: "var(--gradient-silver)",
                zIndex: 1,
                transition: "width 0.4s ease",
              }}
            />
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "0",
                  backgroundColor: step >= num ? "var(--silver-light)" : "var(--bg-card)",
                  color: step >= num ? "var(--bg-darker)" : "var(--silver-medium)",
                  border: `1px solid ${step >= num ? "var(--silver-light)" : "rgba(255, 255, 255, 0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  zIndex: 2,
                  transition: "all 0.4s ease",
                }}
              >
                {num}
              </div>
            ))}
          </div>
        )}

        {/* Form Panel */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid rgba(255, 255, 255, 0.03)",
            padding: "3.5rem 2.5rem",
            position: "relative",
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70px",
                  height: "70px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  marginBottom: "2rem",
                }}
              >
                <CheckCircle size={36} color="var(--silver-light)" />
              </div>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }} className="text-silver">
                Demande Transmise
              </h3>
              <p style={{ maxWidth: "500px", margin: "0 auto 2rem auto", fontSize: "0.95rem" }}>
                Merci {formData.name}. Cédric a bien reçu votre demande de prise en charge en {formData.vehicle}. Vous recevrez une confirmation de réservation par SMS/Email dans les 15 minutes.
              </p>
              <button
                className="btn-premium-outline"
                onClick={() => {
                  setStep(1);
                  setIsSubmitted(false);
                  setFormData({
                    pickup: "",
                    dropoff: "",
                    date: "",
                    time: "",
                    vehicle: "Tesla Model S Plaid",
                    name: "",
                    email: "",
                    phone: "",
                  });
                }}
              >
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                  >
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Détails de l'itinéraire</h3>
                    
                    {/* Departure */}
                    <div style={{ position: "relative" }}>
                      <MapPin
                        size={18}
                        style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                        color="var(--silver-medium)"
                      />
                      <input
                        type="text"
                        name="pickup"
                        placeholder="Adresse de départ (ex: Aéroport CDG, Gare de Lyon...)"
                        value={formData.pickup}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{ paddingLeft: "3.2rem" }}
                      />
                    </div>

                    {/* Destination */}
                    <div style={{ position: "relative" }}>
                      <MapPin
                        size={18}
                        style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                        color="var(--silver-medium)"
                      />
                      <input
                        type="text"
                        name="dropoff"
                        placeholder="Adresse de destination (ex: Hôtel, Bureau...)"
                        value={formData.dropoff}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{ paddingLeft: "3.2rem" }}
                      />
                    </div>

                    {/* Date and Time grid */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      <div style={{ position: "relative" }}>
                        <Calendar
                          size={18}
                          style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                          color="var(--silver-medium)"
                        />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          style={{ paddingLeft: "3.2rem" }}
                        />
                      </div>
                      <div style={{ position: "relative" }}>
                        <Clock
                          size={18}
                          style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                          color="var(--silver-medium)"
                        />
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="form-input"
                          style={{ paddingLeft: "3.2rem" }}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
                      <MagneticButton
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.pickup || !formData.dropoff || !formData.date || !formData.time}
                        className="btn-premium"
                        style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
                      >
                        <span>Continuer</span>
                        <ArrowRight size={16} />
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                  >
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Sélection du véhicule</h3>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                      {[
                        { name: "Tesla Model S Plaid", tag: "Prestige First-Class", price: "À partir de 90€" },
                        { name: "Tesla Model Y Grande Autonomie", tag: "Business SUV Class", price: "À partir de 70€" },
                      ].map((veh) => (
                        <div
                          key={veh.name}
                          onClick={() => setFormData((p) => ({ ...p, vehicle: veh.name }))}
                          style={{
                            padding: "2rem 1.5rem",
                            backgroundColor: formData.vehicle === veh.name ? "rgba(255,255,255,0.03)" : "transparent",
                            border: `1px solid ${
                              formData.vehicle === veh.name ? "var(--silver-light)" : "rgba(255,255,255,0.08)"
                            }`,
                            cursor: "pointer",
                            transition: "var(--transition-fast)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--silver-medium)",
                            }}
                          >
                            {veh.tag}
                          </span>
                          <h4 style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>{veh.name}</h4>
                          <span style={{ fontSize: "0.9rem", color: "var(--silver-light)" }}>{veh.price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn-premium-outline"
                        style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.8rem 1.8rem" }}
                      >
                        <ArrowLeft size={16} />
                        <span>Retour</span>
                      </button>
                      <MagneticButton
                        type="button"
                        onClick={handleNext}
                        className="btn-premium"
                        style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
                      >
                        <span>Continuer</span>
                        <ArrowRight size={16} />
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                  >
                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Vos coordonnées</h3>

                    {/* Name */}
                    <div style={{ position: "relative" }}>
                      <User
                        size={18}
                        style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                        color="var(--silver-medium)"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder="Nom complet"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{ paddingLeft: "3.2rem" }}
                      />
                    </div>

                    {/* Phone */}
                    <div style={{ position: "relative" }}>
                      <Phone
                        size={18}
                        style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                        color="var(--silver-medium)"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Numéro de téléphone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{ paddingLeft: "3.2rem" }}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ position: "relative" }}>
                      <Mail
                        size={18}
                        style={{ position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)" }}
                        color="var(--silver-medium)"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Adresse email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        style={{ paddingLeft: "3.2rem" }}
                      />
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn-premium-outline"
                        style={{ display: "flex", alignItems: "center", gap: "0.8rem", padding: "0.8rem 1.8rem" }}
                      >
                        <ArrowLeft size={16} />
                        <span>Retour</span>
                      </button>
                      <MagneticButton
                        type="submit"
                        disabled={!formData.name || !formData.phone || !formData.email}
                        className="btn-premium"
                        style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
                      >
                        <span>Réserver</span>
                        <CheckCircle size={16} />
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
