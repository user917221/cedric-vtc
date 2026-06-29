"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { 
  Menu, X, Phone, Calendar, Clock, MapPin, 
  ArrowRight, ArrowLeft, CheckCircle, Wifi, VolumeX, Shield, Sparkles 
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Refs for ScrollTrigger animations
  const introLogoRef = useRef<HTMLDivElement>(null);
  const logoCRef = useRef<HTMLSpanElement>(null);
  const logoVRef = useRef<HTMLSpanElement>(null);
  
  const introSectionRef = useRef<HTMLDivElement>(null);
  const introBgRef = useRef<HTMLDivElement>(null);
  
  const impulseSectionRef = useRef<HTMLDivElement>(null);
  const impulseImg1Ref = useRef<HTMLDivElement>(null);
  const impulseImg2Ref = useRef<HTMLDivElement>(null);
  
  const formatSectionRef = useRef<HTMLDivElement>(null);
  const [formatActiveSlide, setFormatActiveSlide] = useState(1);
  const formatText1Ref = useRef<HTMLDivElement>(null);
  const formatText2Ref = useRef<HTMLDivElement>(null);

  const statusSectionRef = useRef<HTMLDivElement>(null);
  const [statusActiveSlide, setStatusActiveSlide] = useState(1);
  const statusText1Ref = useRef<HTMLDivElement>(null);
  const statusText2Ref = useRef<HTMLDivElement>(null);

  const lifeSectionRef = useRef<HTMLDivElement>(null);
  const lifeBgRef = useRef<HTMLDivElement>(null);

  // Booking Form State
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "Tesla Model S Plaid",
    name: "",
    phone: "",
    email: ""
  });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!isLoaded) return;
    gsap.registerPlugin(ScrollTrigger);

    // 1. Intro Logo scroll letters splitting (calqué sur l-intro-logo)
    gsap.to(logoCRef.current, {
      xPercent: -45,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "50% top",
        scrub: true,
      }
    });

    gsap.to(logoVRef.current, {
      xPercent: 45,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "50% top",
        scrub: true,
      }
    });

    // 2. Intro background parallax (calqué sur l-intro background--cover)
    gsap.to(introBgRef.current, {
      yPercent: 15,
      scale: 0.95,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: introSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. Impulse double image parallax (calqué sur l-impulse-card-images)
    gsap.fromTo(impulseImg1Ref.current,
      { yPercent: 10 },
      {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: impulseSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    gsap.fromTo(impulseImg2Ref.current,
      { yPercent: 20 },
      {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: impulseSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // 4. Format Split Showroom Sticky (calqué sur l-format-section)
    const formatTl = gsap.timeline({
      scrollTrigger: {
        trigger: formatSectionRef.current,
        pin: true,
        start: "top top",
        end: "+=120%",
        scrub: 1,
        onUpdate: (self) => {
          setFormatActiveSlide(self.progress < 0.5 ? 1 : 2);
        }
      }
    });

    formatTl.to(formatText1Ref.current, {
      opacity: 0,
      yPercent: -15,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .fromTo(formatText2Ref.current,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    // 5. Life section background map parallax (calqué sur l-life-cards-background)
    gsap.fromTo(lifeBgRef.current,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: lifeSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // 6. Status/Amenities split sticky section (calqué sur image-slider-sticky)
    const statusTl = gsap.timeline({
      scrollTrigger: {
        trigger: statusSectionRef.current,
        pin: true,
        start: "top top",
        end: "+=120%",
        scrub: 1,
        onUpdate: (self) => {
          setStatusActiveSlide(self.progress < 0.5 ? 1 : 2);
        }
      }
    });

    statusTl.to(statusText1Ref.current, {
      opacity: 0,
      yPercent: -15,
      duration: 0.8,
      ease: "power2.inOut"
    })
    .fromTo(statusText2Ref.current,
      { opacity: 0, yPercent: 15 },
      { opacity: 1, yPercent: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      {isLoaded && <CustomCursor />}
      
      <div className="page-content-wrapper ui-dark-background">
        
        {/* HEADER (calqué sur header--fixed) */}
        <header className="header is-hidden--print header--fixed ui-light" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000, mixBlendMode: "difference" }}>
          <div className="header__content container-h" style={{ padding: "2rem 4rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href="#top" style={{ fontFamily: "var(--font-serif)", fontWeight: "700", fontSize: "1.4rem", letterSpacing: "0.15em", color: "#FFFFFF" }}>
              CÉDRIC<span style={{ fontWeight: "300", opacity: 0.8 }}> VTC</span>
            </a>
            
            <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="btn-premium-outline is-hidden--sm-down"
                style={{ padding: "0.6rem 1.6rem", fontSize: "0.75rem" }}
              >
                Réservation en ligne
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(true)} 
                style={{ color: "#FFFFFF", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        <SmoothScroll>
          <div className="page-content-wrapper__inner js-page-content-wrapper">
            <div className="page-content js-page-content">
              <main id="top" className="page-content__overflow-fix">
                
                {/* 1. INTRO LOGO SECTION (l-intro-logo) */}
                <div ref={introLogoRef} className="section section--top ui-light l-intro-logo" style={{ height: "100svh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="sticky sticky--full-height" style={{ width: "100%" }}>
                    <div className="sticky__layer sticky__layer--sticky" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <h1 style={{ fontSize: "clamp(4rem, 15vw, 11rem)", letterSpacing: "0.1em", fontWeight: 700, display: "flex", gap: "2vw" }}>
                        <span ref={logoCRef} className="text-silver" style={{ display: "inline-block" }}>CÉDRIC</span>
                        <span ref={logoVRef} style={{ display: "inline-block", fontWeight: 300 }}>VTC</span>
                      </h1>
                    </div>
                  </div>
                </div>

                {/* 2. INTRO CONTENT SECTION (l-intro) */}
                <section ref={introSectionRef} className="section section--no-margin section--full-height section--no-overflow-clip ui-light ui-background" style={{ position: "relative", height: "100svh" }}>
                  <div className="sticky sticky--full-height">
                    {/* Background loops (Vimeo loop equivalent) */}
                    <div ref={introBgRef} className="background background--cover" style={{ backgroundImage: "url('/tesla.png')", opacity: 0.45, transform: "scale(1.1)", filter: "brightness(0.35) contrast(1.1)" }} />
                    
                    {/* Floating texts */}
                    <div className="sticky__layer l-intro" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 3 }}>
                      <div className="container-h">
                        <div style={{ marginBottom: "2rem" }}>
                          <p className="h2 text-silver" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", letterSpacing: "0.15em" }}>
                            L'excellence à la française
                          </p>
                        </div>
                        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                          <p style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", fontWeight: 300, color: "var(--silver-light)", lineHeight: 1.6 }}>
                            Service de chauffeur privé haut de gamme pour vos transferts, séjours et événements. Une immersion technologique exclusive.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. IMPULSE SECTION (l-impulse) */}
                <section ref={impulseSectionRef} id="impulse" className="section section--no-margin section--no-overflow-clip ui-light ui-background" style={{ padding: "10rem 0", position: "relative" }}>
                  <div className="container-h">
                    <h2 className="h1 text-silver" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4rem" }}>
                      <span>L'Impulsion</span>
                      <span>de l'Éco-Luxe</span>
                    </h2>
                    
                    <div className="row row--pad" style={{ marginTop: "4rem" }}>
                      {/* Left: Overlapping Images */}
                      <div className="col col--6" style={{ position: "relative", height: "65vh" }}>
                        <div ref={impulseImg1Ref} style={{ position: "absolute", width: "80%", height: "80%", top: 0, left: 0 }}>
                          <Image src="/tesla.png" alt="Tesla grille detail" fill className="img-cover img-rounded" style={{ opacity: 0.6 }} />
                        </div>
                        <div ref={impulseImg2Ref} style={{ position: "absolute", width: "65%", height: "65%", bottom: 0, right: 0, zIndex: 2 }}>
                          <Image src="/tesla.png" alt="Tesla cabin interior" fill className="img-cover img-rounded" style={{ border: "2px solid var(--bg-darker)", opacity: 0.8 }} />
                        </div>
                      </div>
                      
                      {/* Right: Text content */}
                      <div className="col col--6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "4rem" }}>
                        <p className="h2 text-color-heading" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
                          Une conduite fluide, silencieuse, sans aucune émission. Une flotte électrique d'exception.
                        </p>
                        <p style={{ marginBottom: "3rem" }}>
                          Cédric VTC redéfinit le transport privé haut de gamme en Île-de-France. Alliez le confort le plus absolu et la préservation de l'environnement à bord de nos berlines et SUV Tesla noirs de prestige.
                        </p>
                        <div>
                          <button onClick={() => setIsBookingOpen(true)} className="btn-premium">
                            Réserver maintenant
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. FORMAT SECTION (l-format-section) */}
                <section ref={formatSectionRef} id="format" className="section section--no-overflow-clip ui-light ui-background" style={{ height: "100vh", position: "relative" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", height: "100%", width: "100%" }}>
                    
                    {/* Left: Pinned Image Layer */}
                    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#000" }}>
                      <div style={{ position: "absolute", inset: 0, opacity: formatActiveSlide === 1 ? 0.45 : 0, transition: "opacity 1s ease" }}>
                        <Image src="/tesla.png" alt="Tesla S Plaid" fill className="img-cover" />
                      </div>
                      <div style={{ position: "absolute", inset: 0, opacity: formatActiveSlide === 2 ? 0.4 : 0, transition: "opacity 1s ease", filter: "hue-rotate(30deg)" }}>
                        <Image src="/tesla.png" alt="Tesla Y SUV" fill className="img-cover" />
                      </div>
                      
                      {/* Badge category */}
                      <div style={{ position: "absolute", bottom: "4rem", left: "4rem", display: "flex", alignItems: "center", gap: "0.8rem", backgroundColor: "rgba(10,10,10,0.6)", padding: "0.8rem 1.6rem", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
                        <Sparkles size={14} color="var(--silver-medium)" />
                        <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em" }}>
                          {formatActiveSlide === 1 ? "PRESTIGE BERLINE" : "BUSINESS SUV"}
                        </span>
                      </div>
                    </div>

                    {/* Right: Scrolling texts with Counter */}
                    <div style={{ position: "relative", width: "100%", height: "100%", padding: "0 10%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      
                      <div style={{ position: "relative", width: "100%" }}>
                        {/* Vehicle 1 */}
                        <div ref={formatText1Ref}>
                          <span style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--silver-medium)" }}>MODÈLE PILOTE</span>
                          <h3 style={{ fontSize: "2.8rem", margin: "1rem 0 2rem 0" }} className="text-silver">Tesla Model S Plaid</h3>
                          <p style={{ marginBottom: "3rem" }}>
                            Le vaisseau amiral de notre flotte. Une puissance phénoménale combinée à une insonorisation active et un confort haut de gamme.
                          </p>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            <div>
                              <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)" }}>Puissance</h5>
                              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>1020 CH</span>
                            </div>
                            <div>
                              <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)" }}>Autonomie</h5>
                              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>600 KM</span>
                            </div>
                          </div>
                        </div>

                        {/* Vehicle 2 (GSAP crossfades this in) */}
                        <div ref={formatText2Ref} style={{ position: "absolute", top: 0, left: 0, width: "100%", opacity: 0, pointerEvents: formatActiveSlide === 2 ? "auto" : "none" }}>
                          <span style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--silver-medium)" }}>MODÈLE SUV</span>
                          <h3 style={{ fontSize: "2.8rem", margin: "1rem 0 2rem 0" }} className="text-silver">Tesla Model Y</h3>
                          <p style={{ marginBottom: "3rem" }}>
                            Le compromis idéal pour les déplacements professionnels et transferts avec bagages volumineux. Espace généreux et toit vitré complet.
                          </p>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                            <div>
                              <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)" }}>Volume Coffre</h5>
                              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>2100 LITRES</span>
                            </div>
                            <div>
                              <h5 style={{ fontSize: "0.7rem", color: "var(--silver-dark)" }}>Capacité</h5>
                              <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem" }}>4 PAX + BAGAGES</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Counter */}
                      <div style={{ position: "absolute", bottom: "4rem", right: "10%", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.1)", position: "relative" }}>
                          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${formatActiveSlide * 50}%`, background: "var(--gradient-silver)", transition: "width 0.4s ease" }} />
                        </div>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#FFFFFF" }}>
                          <span className="text-silver">{formatActiveSlide}</span> / 2
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. HARMONY SECTION (l-harmony) */}
                <section id="harmony" className="section section--no-overflow-clip ui-dark ui-background" style={{ position: "relative", height: "100svh", overflow: "hidden" }}>
                  <div className="l-harmony">
                    <div className="l-harmony__layer">
                      {/* Glass view background */}
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/tesla.png')", backgroundSize: "cover", backgroundPosition: "center 40%", opacity: 0.3, filter: "brightness(0.3) contrast(1.1) grayscale(0.2)" }} />
                    </div>
                    
                    <div className="l-harmony__layer l-harmony__layer--bottom" style={{ padding: "0 4rem 10vh 4rem", display: "flex", justifyContent: "flex-end" }}>
                      <div className="l-harmony-card" style={{ maxWidth: "480px", padding: "3rem", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <h2 className="leading-trim text-silver" style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>
                          Une harmonie de verre et de silence
                        </h2>
                        <p style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>
                          Détendez-vous ou travaillez en toute quiétude. Nos Tesla filtrent les bruits extérieurs pour vous offrir une cabine sereine, chauffée ou climatisée à la perfection.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 6. LIFE SECTION (l-life) */}
                <section ref={lifeSectionRef} id="life" className="section section--no-overflow-clip ui-dark ui-background" style={{ padding: "10rem 0", position: "relative" }}>
                  {/* Paris street background parallax */}
                  <div ref={lifeBgRef} className="l-life-cards-background" style={{ backgroundImage: "url('/tesla.png')", opacity: 0.15, backgroundSize: "cover", filter: "brightness(0.2) blur(3px)" }} />
                  
                  <div className="container-h" style={{ position: "relative", zIndex: 2 }}>
                    <h2 className="h1 text-silver" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "4rem" }}>
                      <span>Au Cœur</span>
                      <span>De La Métropole</span>
                    </h2>
                    
                    <ul className="mobile-scrollable l-life-cards__list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", listStyle: "none", padding: 0 }}>
                      {[
                        { num: "30", unit: "min", title: "Aéroport Orly", desc: "Transfert direct Paris" },
                        { num: "45", unit: "min", title: "Aéroport CDG", desc: "Terminal & accueil nominatif" },
                        { num: "15", unit: "min", title: "La Défense", desc: "Quartier d'affaires" },
                        { num: "10", unit: "min", title: "Paris Centre", desc: "Disponibilité totale" }
                      ].map((card, idx) => (
                        <li key={idx} className="mobile-scrollable__item">
                          <div className="l-location-card" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
                            <span className="h1 text-color-heading leading-trim l-location-card__top">{card.num}</span>
                            <span className="text-small text-color-text leading-trim" style={{ fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{card.unit} drive</span>
                            <span className="h2 text-color-heading text-right leading-trim l-location-card__bottom" style={{ fontSize: "1.2rem", marginTop: "2rem" }}>{card.title}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 7. STATUS / AMENITIES SECTION (l-status) */}
                <section ref={statusSectionRef} id="status" className="section section--no-overflow-clip ui-light ui-background" style={{ height: "100vh", position: "relative" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", height: "100%", width: "100%" }}>
                    
                    {/* Left: Details */}
                    <div style={{ position: "relative", width: "100%", height: "100%", padding: "0 10%", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255,255,255,0.03)" }}>
                      <div style={{ position: "relative", width: "100%" }}>
                        {/* Slide 1 */}
                        <div ref={statusText1Ref}>
                          <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "2rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                            <Wifi size={22} color="var(--silver-light)" />
                          </div>
                          <span style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--silver-medium)" }}>ÉQUIPEMENTS VIP</span>
                          <h3 style={{ fontSize: "2.6rem", margin: "1rem 0 2rem 0" }} className="text-silver">Wi-Fi & Rafraîchissements</h3>
                          <p>
                            Profitez d'un accès Wi-Fi haut débit sécurisé, de tablettes tactiles, de bouteilles d'eau consignées d'exception, et de confiseries fines pour agrémenter votre trajet.
                          </p>
                        </div>

                        {/* Slide 2 */}
                        <div ref={statusText2Ref} style={{ position: "absolute", top: 0, left: 0, width: "100%", opacity: 0, pointerEvents: statusActiveSlide === 2 ? "auto" : "none" }}>
                          <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "2rem", backgroundColor: "rgba(255,255,255,0.02)" }}>
                            <VolumeX size={22} color="var(--silver-light)" />
                          </div>
                          <span style={{ fontSize: "0.75rem", letterSpacing: "0.25em", color: "var(--silver-medium)" }}>BIEN-ÊTRE SUPRÊME</span>
                          <h3 style={{ fontSize: "2.6rem", margin: "1rem 0 2rem 0" }} className="text-silver">Cabine insonorisée & Air HEPA</h3>
                          <p>
                            Bénéficiez du silence absolu grâce à l'insonorisation active de la route. L'air intérieur est purifié continuellement par un filtre HEPA qui capture 99.97% des poussières et virus.
                          </p>
                        </div>
                      </div>

                      {/* Slider Counter */}
                      <div style={{ position: "absolute", bottom: "4rem", left: "10%", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", color: "#FFFFFF" }}>
                          <span className="text-silver">{statusActiveSlide}</span> / 2
                        </span>
                        <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.1)", position: "relative" }}>
                          <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${statusActiveSlide * 50}%`, background: "var(--gradient-silver)", transition: "width 0.4s ease" }} />
                        </div>
                      </div>
                    </div>

                    {/* Right: Pinned Image Slide */}
                    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#000" }}>
                      <div style={{ position: "absolute", inset: 0, opacity: statusActiveSlide === 1 ? 0.4 : 0, transition: "opacity 1s ease" }}>
                        <Image src="/tesla.png" alt="Refreshments inside the Tesla" fill className="img-cover" />
                      </div>
                      <div style={{ position: "absolute", inset: 0, opacity: statusActiveSlide === 2 ? 0.35 : 0, transition: "opacity 1s ease", filter: "hue-rotate(90deg)" }}>
                        <Image src="/tesla.png" alt="Silent filters cabin" fill className="img-cover" />
                      </div>
                    </div>
                  </div>
                </section>

              </main>

              {/* FOOTER (calqué sur footer) */}
              <footer className="section section--no-overflow ui-dark ui-background footer" style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "8rem" }}>
                <div className="container-h pb-layout" style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "4rem" }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }} className="text-silver">
                        CÉDRIC VTC
                      </h3>
                      <p style={{ maxWidth: "350px", fontSize: "0.9rem" }}>
                        Le prestige du VTC 100% électrique à Paris. Services professionnels, discrets et éco-responsables à bord de véhicules haut de gamme.
                      </p>
                    </div>
                    <div>
                      <h5 style={{ textTransform: "uppercase", fontSize: "0.8rem", color: "var(--silver-medium)", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>
                        Contact
                      </h5>
                      <p style={{ fontSize: "0.9rem" }}>
                        <a href="tel:+33600000000" style={{ color: "#FFFFFF" }}>+33 6 00 00 00 00</a>
                        <br />
                        <a href="mailto:contact@cedric-vtc.fr" style={{ color: "#FFFFFF" }}>contact@cedric-vtc.fr</a>
                      </p>
                    </div>
                    <div>
                      <h5 style={{ textTransform: "uppercase", fontSize: "0.8rem", color: "var(--silver-medium)", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>
                        Disponibilité
                      </h5>
                      <p style={{ fontSize: "0.9rem", color: "var(--silver-medium)" }}>
                        24 heures sur 24
                        <br />
                        7 jours sur 7
                        <br />
                        Paris & Île-de-France
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--silver-dark)" }}>
                    <p>© {new Date().getFullYear()} Cédric VTC. Tous droits réservés.</p>
                    <p>Designed in compliance with 42 school norms.</p>
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </SmoothScroll>

        {/* FULLSCREEN NAVIGATION MODAL (calqué sur modal--menu) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(5,5,5,0.98)",
                zIndex: 2000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 10%",
              }}
            >
              {/* Close button */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                style={{ position: "absolute", top: "3rem", right: "4rem", color: "#FFFFFF" }}
              >
                <X size={36} />
              </button>
              
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem", maxWidth: "1000px", width: "100%" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", letterSpacing: "0.3em", color: "var(--silver-medium)", textTransform: "uppercase", display: "block", marginBottom: "2rem" }}>
                    Menu
                  </span>
                  
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {[
                      { label: "Accueil", href: "#top" },
                      { label: "Notre Flotte", href: "#flotte" },
                      { label: "Prestations", href: "#harmony" },
                      { label: "Itinéraires", href: "#life" },
                      { label: "Services", href: "#status" }
                    ].map((item, idx) => (
                      <li key={idx}>
                        <a 
                          href={item.href} 
                          onClick={() => setIsMenuOpen(false)}
                          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 4rem)", color: "#FFFFFF", display: "inline-block", transition: "transform 0.4s ease" }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(20px)"}
                          onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0px)"}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(255,255,255,0.05)", paddingLeft: "4rem" }}>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }} className="text-silver">
                    Demande instantanée
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--silver-medium)", marginBottom: "2.5rem" }}>
                    Besoin d'un chauffeur dans l'immédiat ? Planifiez ou commandez en quelques clics.
                  </p>
                  <button 
                    onClick={() => { setIsMenuOpen(false); setIsBookingOpen(true); }}
                    className="btn-premium"
                    style={{ width: "fit-content" }}
                  >
                    Estimer un trajet
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOOKING MODAL (calqué sur callbackModal) */}
        <AnimatePresence>
          {isBookingOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(5,5,5,0.95)",
                zIndex: 2100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                backdropFilter: "blur(10px)"
              }}
            >
              <div 
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  width: "100%",
                  maxWidth: "650px",
                  padding: "4rem 3rem",
                  position: "relative",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.8)"
                }}
              >
                {/* Close Button */}
                <button 
                  onClick={() => { setIsBookingOpen(false); setBookingSubmitted(false); setBookingStep(1); }}
                  style={{ position: "absolute", top: "2rem", right: "2rem", color: "#FFFFFF" }}
                >
                  <X size={24} />
                </button>

                {bookingSubmitted ? (
                  <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{ width: "60px", height: "60px", border: "1px solid rgba(255,255,255,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                      <CheckCircle size={32} color="var(--silver-light)" />
                    </div>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }} className="text-silver">Demande Transmise</h3>
                    <p style={{ fontSize: "0.95rem", color: "var(--silver-medium)", marginBottom: "2.5rem" }}>
                      Merci {bookingData.name}. Cédric a bien reçu votre demande de trajet en {bookingData.vehicle}. Nous vous recontactons sous 15 minutes.
                    </p>
                    <button 
                      onClick={() => { setBookingSubmitted(false); setBookingStep(1); setIsBookingOpen(false); }}
                      className="btn-premium-outline"
                    >
                      Fermer
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }} className="text-silver">
                      Réservation de prestige
                    </h3>
                    
                    {/* Step indicator */}
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem" }}>
                      {[1, 2].map(n => (
                        <div key={n} style={{ flex: 1, height: "2px", backgroundColor: bookingStep >= n ? "#FFFFFF" : "rgba(255,255,255,0.08)", transition: "all 0.4s ease" }} />
                      ))}
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); setBookingSubmitted(true); }}>
                      <AnimatePresence mode="wait">
                        {bookingStep === 1 ? (
                          <motion.div
                            key="b-step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                          >
                            <div style={{ position: "relative" }}>
                              <MapPin size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }} color="var(--silver-medium)" />
                              <input required type="text" name="pickup" value={bookingData.pickup} onChange={handleBookingChange} placeholder="Adresse de départ" className="form-input" style={{ paddingLeft: "2.8rem" }} />
                            </div>
                            <div style={{ position: "relative" }}>
                              <MapPin size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }} color="var(--silver-medium)" />
                              <input required type="text" name="dropoff" value={bookingData.dropoff} onChange={handleBookingChange} placeholder="Adresse de destination" className="form-input" style={{ paddingLeft: "2.8rem" }} />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                              <input required type="date" name="date" value={bookingData.date} onChange={handleBookingChange} className="form-input" />
                              <input required type="time" name="time" value={bookingData.time} onChange={handleBookingChange} className="form-input" />
                            </div>
                            
                            <button 
                              type="button" 
                              disabled={!bookingData.pickup || !bookingData.dropoff || !bookingData.date || !bookingData.time}
                              onClick={() => setBookingStep(2)}
                              className="btn-premium"
                              style={{ width: "fit-content", alignSelf: "flex-end", marginTop: "1rem" }}
                            >
                              Suivant
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="b-step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                          >
                            <select name="vehicle" value={bookingData.vehicle} onChange={handleBookingChange} className="form-input" style={{ appearance: "none" }}>
                              <option value="Tesla Model S Plaid">Tesla Model S Plaid (Prestige Berline)</option>
                              <option value="Tesla Model Y Premium">Tesla Model Y (SUV Confort)</option>
                            </select>
                            
                            <input required type="text" name="name" value={bookingData.name} onChange={handleBookingChange} placeholder="Nom complet" className="form-input" />
                            <input required type="tel" name="phone" value={bookingData.phone} onChange={handleBookingChange} placeholder="Téléphone" className="form-input" />
                            <input required type="email" name="email" value={bookingData.email} onChange={handleBookingChange} placeholder="Adresse email" className="form-input" />
                            
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
                              <button type="button" onClick={() => setBookingStep(1)} className="btn-premium-outline">
                                Retour
                              </button>
                              <button type="submit" className="btn-premium">
                                Confirmer
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}
