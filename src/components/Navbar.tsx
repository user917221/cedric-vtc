"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Copy, Mail, Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "@/lib/constants";

const ANCHOR_OFFSET = 88;
const PREVIEW_EMAIL = "cedricexemple@mail.com";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const copyPreviewEmail = async () => {
    await navigator.clipboard.writeText(PREVIEW_EMAIL);
    setHasCopiedEmail(true);
    window.setTimeout(() => setHasCopiedEmail(false), 1400);
  };

  const scrollToHash = (href: string) => {
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const offset = targetId === "reservation" ? 0 : ANCHOR_OFFSET;
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  };

  const handleAnchor = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    closeMenu();
    scrollToHash(href);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <header className="header header--fixed ui-light vtc-nav" data-nosnippet="">
        <div className="header__content container-h py-layout">
          <nav className="group group--nav group--between header__nav" aria-label="Navigation principale">
            <div className="btn-group btn-group--gap btn-container header__nav-last">
              <button
                className="btn btn--primary btn--sm btn--square vtc-icon-btn"
                type="button"
                onClick={() => setIsOpen((value) => !value)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                aria-controls="menu"
              >
                <span className="btn__content">
                  <span className="btn__icon">{isOpen ? <X size={20} /> : <Menu size={22} />}</span>
                </span>
              </button>

              <div className="vtc-mail-wrap">
                <a className="btn btn--secondary btn--sm btn--square vtc-icon-btn vtc-mail-btn" href={SITE.mailto} aria-label="Écrire à Cédric VTC">
                  <span className="btn__content">
                    <span className="btn__icon">
                      <Mail size={18} />
                    </span>
                  </span>
                </a>

                <div className="vtc-mail-popover" aria-label="Email exemple à copier">
                  <button className={`vtc-mail-copy ${hasCopiedEmail ? "is-copied" : ""}`} type="button" onClick={copyPreviewEmail}>
                    <span className="vtc-mail-copy__text" aria-live="polite">
                      <span className="vtc-mail-copy__email">{PREVIEW_EMAIL}</span>
                      <span className="vtc-mail-copy__copied">Copié</span>
                    </span>
                    <Copy size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            <a
              className="btn btn--primary btn--sm btn--rotation header__nav-wide-button vtc-nav-cta"
              href="#reservation"
              aria-label="Réserver une voiture"
              onClick={(event) => handleAnchor(event, "#reservation")}
            >
              <span className="btn__content">
                <span className="btn__text">Réserver une voiture</span>
                <span className="btn__icon">
                  <ArrowUpRight size={18} />
                </span>
              </span>
            </a>
          </nav>
        </div>
      </header>

      <div
        className={`vtc-menu ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-hidden={!isOpen}
        aria-modal={isOpen}
        aria-label="Menu principal"
        id="menu"
      >
        <button className="vtc-menu__backdrop" type="button" aria-label="Fermer le menu" onClick={closeMenu} />
        <div className="vtc-menu__panel">
          <div className="vtc-menu__brand" aria-hidden="true">
            <span>Cédric</span>
            <span>VTC</span>
          </div>

          <nav className="vtc-menu__nav" aria-label="Sections du site">
            {NAV_ITEMS.map((item) => (
              <a href={item.href} onClick={(event) => handleAnchor(event, item.href)} key={item.href}>
                <span>{item.label}</span>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </nav>

          <div className="vtc-menu__actions">
            <a href="#reservation" onClick={(event) => handleAnchor(event, "#reservation")}>
              Réserver une voiture
            </a>
            <a href={SITE.mailto}>Écrire à Cédric</a>
          </div>
        </div>
      </div>
    </>
  );
}
