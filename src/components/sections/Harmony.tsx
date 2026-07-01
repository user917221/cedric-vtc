"use client";

import { ShieldCheck, UserRoundCheck, WalletCards } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const trustItems = [
  {
    icon: UserRoundCheck,
    title: "Service direct",
    text: "Un interlocuteur identifié, pas une plateforme anonyme.",
  },
  {
    icon: ShieldCheck,
    title: "Ponctualité",
    text: "Horaire, marge et point de rendez-vous confirmés avant la course.",
  },
  {
    icon: WalletCards,
    title: "Tarif confirmé",
    text: "Le prix est validé avant la prise en charge.",
  },
] as const;

export default function Harmony() {
  return (
    <section id="faq" className="section ui-light ui-background vtc-faq" aria-labelledby="faq-title">
      <div className="container-h vtc-faq__grid">
        <div>
          <p className="vtc-section-kicker">À propos</p>
          <h2 id="faq-title">Service direct, sans plateforme opaque</h2>
          <p className="vtc-faq__lead">
            Vous envoyez le trajet, Cédric confirme la faisabilité, l&apos;horaire et le tarif. Une réservation claire vaut mieux qu&apos;une promesse automatique.
          </p>

          <div className="vtc-trust">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="vtc-faq__items">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
