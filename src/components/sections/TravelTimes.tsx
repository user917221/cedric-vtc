"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { ROUTE_POINTS } from "@/lib/constants";

export default function TravelTimes() {
  return (
    <section id="trajets" className="section ui-dark ui-background vtc-routes" aria-labelledby="routes-title">
      <div className="container-h vtc-routes__grid">
        <div className="vtc-routes__intro">
          <p className="vtc-section-kicker">Trajets</p>
          <h2 id="routes-title">
            Toulouse
            <br />
            de nuit
          </h2>
          <p>
            Des repères clairs pour les points clés autour de Toulouse. Les durées restent indicatives: elles dépendent de l&apos;heure, de la circulation et de l&apos;adresse exacte.
          </p>
          <a className="btn btn--secondary btn--rotation" href="#reservation">
            <span className="btn__content">
              <span className="btn__text">Préparer un trajet</span>
              <span className="btn__icon">
                <ArrowUpRight size={18} />
              </span>
            </span>
          </a>
        </div>

        <div className="vtc-routes__map" aria-label="Repères de trajets autour de Toulouse">
          <div className="vtc-routes__line vtc-routes__line--one" />
          <div className="vtc-routes__line vtc-routes__line--two" />
          <div className="vtc-routes__center">
            <MapPin size={20} />
            <span>Toulouse centre</span>
          </div>
          <span className="vtc-routes__pin vtc-routes__pin--airport">Blagnac</span>
          <span className="vtc-routes__pin vtc-routes__pin--station">Matabiau</span>
          <span className="vtc-routes__pin vtc-routes__pin--airbus">Airbus</span>
          <span className="vtc-routes__pin vtc-routes__pin--meett">MEETT</span>
        </div>
      </div>

      <div className="container-h">
        <ul className="vtc-route-list">
          {ROUTE_POINTS.map((route) => (
            <li key={route.title}>
              <div>
                <span className="vtc-route-list__time">
                  {route.value}
                  <small>{route.unit}</small>
                </span>
                <strong>{route.title}</strong>
              </div>
              <p>{route.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
