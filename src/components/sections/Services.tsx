"use client";

import { useState } from "react";
import { BriefcaseBusiness, MapPinned, Moon, Plane, TrainFront } from "lucide-react";
import LocalImage from "@/components/ui/LocalImage";
import { SERVICE_ITEMS } from "@/lib/constants";

const serviceIcons = [Plane, TrainFront, BriefcaseBusiness, Moon, MapPinned] as const;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICE_ITEMS[activeIndex];
  const ActiveIcon = serviceIcons[activeIndex];

  return (
    <section id="services" className="section ui-dark ui-background vtc-services" aria-labelledby="services-title">
      <div className="container-h vtc-section-heading vtc-section-heading--split">
        <div>
          <p className="vtc-section-kicker">Services</p>
          <h2 id="services-title">Aéroport, gare, business, soirée</h2>
        </div>
        <p>
          Chaque course est préparée avant le départ: horaire, point de rendez-vous, bagages, marge de sécurité et destination.
        </p>
      </div>

      <div className="container-h vtc-services__stage">
        <div className="vtc-services__media">
          <LocalImage
            src={activeService.image}
            alt={`${activeService.title} avec Cédric VTC en Tesla noire à Toulouse`}
            loading="lazy"
            width={1920}
            height={1080}
            sizes="(max-width: 900px) 100vw, 62vw"
          />
          <div className="vtc-services__media-label">
            <ActiveIcon size={20} />
            <span>{activeService.eyebrow}</span>
          </div>
        </div>

        <div className="vtc-services__content">
          <div className="vtc-services__counter">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span>/ {String(SERVICE_ITEMS.length).padStart(2, "0")}</span>
          </div>

          <h3>{activeService.title}</h3>
          <p>{activeService.text}</p>

          <div className="vtc-services__selector" role="tablist" aria-label="Choisir un service">
            {SERVICE_ITEMS.map((service, index) => {
              const Icon = serviceIcons[index];
              const isActive = index === activeIndex;

              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                  key={service.title}
                >
                  <Icon size={18} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
