# Cédric VTC - refonte UI/UX Norme 42

## Hypothèses
- Base active : home React inspirée Aircenter/Awwwards, sans `rawHtml.ts` et sans runtime JS Aircenter.
- Client : Cédric VTC, chauffeur privé à Toulouse et sa région.
- Zones prioritaires : Toulouse centre, aéroport Toulouse-Blagnac, gare Matabiau, Airbus/Colomiers, MEETT, trajets privés de nuit.
- DA obligatoire : fond noir, blanc cassé/gris, accent champagne sobre.
- Véhicule visible et contenu : Tesla noire uniquement. Aucun libellé "berline équivalente".
- Contact réel non confirmé : rester en réservation par formulaire/email, sans faux numéro.

## Passe actuelle
- [x] Corriger le scroll desktop cassé par `has-scroll-smooth` / `html` à hauteur viewport.
- [x] Retirer le chargement runtime `shared.js` / `landing.js`.
- [x] Remplacer les imports CSS Aircenter minifiés par une feuille autonome.
- [x] Refaire navbar Aircenter-like : menu carré, action mail, CTA réservation, aucun titre central.
- [x] Recomposer le hero avec Tesla noire + Toulouse nuit + wordmark CÉDRIC/VTC.
- [x] Remonter une réservation compacte juste après le hero.
- [x] Ajouter services concrets : Blagnac, Matabiau, Business, Soirée, Longue distance.
- [x] Ajouter section Tesla dédiée et trajets locaux.
- [x] Ajouter FAQ / confiance + footer avec crédit `Fait par 42.`.
- [x] Remplacer les assets ambigus par WebP Tesla locaux.
- [ ] Vérifier lint/build.
- [ ] Vérifier captures desktop/mobile section par section.
- [ ] Déployer Vercel production.
- [ ] Vérifier production après déploiement.

## Notes
- URL locale utilisée pendant la passe : `http://127.0.0.1:3002` car le port 3000 est occupé par un autre projet.
- URL canonique/OG : `https://vtc-sigma.vercel.app` en attente d'un domaine client confirmé.
- Coordonnées définitives à confirmer : téléphone réel et email réellement actif.
