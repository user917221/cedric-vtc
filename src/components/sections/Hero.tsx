"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import LocalImage from "@/components/ui/LocalImage";
import { ASSETS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="accueil" className="section section--no-margin ui-light ui-background vtc-hero">
      <h1 className="sr-only">Cédric VTC - chauffeur privé à Toulouse en Tesla noire</h1>

      <div className="vtc-hero__media" aria-hidden="true">
        <LocalImage
          src={ASSETS.hero}
          alt=""
          priority
          sizes="100vw"
          width={1920}
          height={1080}
          className="vtc-hero__image"
        />
      </div>

      <div className="vtc-hero__shade" aria-hidden="true" />

      <div className="container-h vtc-hero__content">
        <div className="vtc-hero__topline">
          <span>Chauffeur privé à Toulouse</span>
          <span>Tesla noire · sur réservation</span>
        </div>

        <div className="vtc-hero__wordmark" aria-hidden="true">
          <span>Cédric</span>
          <span>VTC</span>
        </div>

        <div className="vtc-hero__footer">
          <p>
            Transferts aéroport Blagnac, gare Matabiau, trajets business, soirées et longues distances depuis Toulouse centre.
          </p>

          <div className="vtc-hero__actions">
            <a className="btn btn--primary btn--rotation" href="#reservation">
              <span className="btn__content">
                <span className="btn__text">Réserver une voiture</span>
                <span className="btn__icon">
                  <ArrowUpRight size={18} />
                </span>
              </span>
            </a>
            <a className="btn btn--secondary btn--rotation" href="#services">
              <span className="btn__content">
                <span className="btn__text">Voir les services</span>
                <span className="btn__icon">
                  <ArrowDown size={18} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
