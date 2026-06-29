import os

html_path = "C:\\Users\\newgenprometheus\\Downloads\\aircenter_space.html"
output_path = "c:\\Users\\newgenprometheus\\42\\vtc\\src\\app\\rawHtml.ts"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract only the content inside the <body> tag
body_start = content.find("<body")
if body_start != -1:
    body_start_content = content.find(">", body_start) + 1
    body_end = content.find("</body>")
    content = content[body_start_content:body_end]

# 1. Replace relative assets with absolute live assets
content = content.replace('"/assets/images/', '"https://aircenter.space/assets/images/')

# 2. Replace relative fonts and javascript references
content = content.replace('"/assets/javascripts/shared.js', '"/assets/javascripts/shared.js')
content = content.replace('"/assets/javascripts/landing.js', '"/assets/javascripts/landing.js')
content = content.replace('"/assets/javascripts/browser-message/browser-message.js', '"/assets/javascripts/browser-message/browser-message.js')

# 3. Translate texts (Prestige VTC)
content = content.replace('The\xa0architecture<br />of\xa0New Success', "L'excellence de votre<br />voyage privé")
content = content.replace('The\xa0architecture\nof\xa0New Success', "L'excellence de votre\nvoyage privé")
content = content.replace('The architecture<br />of New Success', "L'excellence de votre<br />voyage privé")
content = content.replace('Class (A)<br />premium business<br />center', "Chauffeur Privé VTC<br />de Prestige<br />Tesla")
content = content.replace('AIR — A Premium Class A Business Center on Khodynka Field by Tekta Group', "Cédric VTC — Chauffeur Privé de Prestige à Paris")
content = content.replace('Choose an\xa0office', "Réserver un chauffeur")
content = content.replace('Choose an office', "Réserver un chauffeur")
content = content.replace('Choose a\xa0parking spot', "Demander un devis")
content = content.replace('Choose a parking spot', "Demander un devis")
content = content.replace('By\xa0parameters', "Estimer un trajet")
content = content.replace('By parameters', "Estimer un trajet")
content = content.replace('On\xa0the\xa0master plan', "Réserver en ligne")
content = content.replace('On the master plan', "Réserver en ligne")
content = content.replace('About the project', "Notre Flotte")
content = content.replace('About the developer', "À propos de Cédric")
content = content.replace('Construction progress', "Prestations VIP")
content = content.replace('News and offers', "Services à bord")
content = content.replace('© 2026 Tekta group', "© 2026 Cédric VTC")
content = content.replace('Website by Vide Infra', "Site de prestige")

# 4. Specific section text overrides
content = content.replace('Efficient layouts and class (A) specifications', "Une flotte 100% électrique éco-responsable")
content = content.replace('A wide choice of layouts for teams of 10 to 100 people. Excellent class (A) technical parameters.', "Découvrez le luxe discret de nos Tesla Model S Plaid et Model Y. Un confort absolu pour tous vos transferts parisiens.")

# 5. Format section translation
content = content.replace('Office format', "Nos Modèles")
content = content.replace('Intelligent office formats for teams of any size', "La quintessence de l'éco-mobility premium")
content = content.replace('A set of smart office layouts developed taking into account the requirements of the largest and most demanding companies', "Des véhicules d'exception pour répondre aux exigences des passagers les plus sélectifs.")
content = content.replace('For mid-sized and large companies', "Pour vos trajets professionnels et transferts")
content = content.replace('For small teams and start-ups', "Pour un confort ultime en solo ou duo")

# 6. Harmony section translation
content = content.replace('An intelligent harmony of curved glass and radiant metal', "Une harmonie silencieuse de verre et de confort")
content = content.replace('The unique style of the business center is shaped by the curved panoramic glass facade and the radiant metal structure', "Le toit panoramique vitré vous offre une vue imprenable sur Paris, dans le silence feutré d'une cabine insonorisée.")

# 7. Life section translation
content = content.replace('Business and life in the center of events', "Votre temps est précieux")
content = content.replace('1 min walk Mall', "30 min drive Orly")
content = content.replace('3 min walk Metro', "45 min drive CDG")
content = content.replace('7 min drive Downtown', "15 min drive La Défense")
content = content.replace('20 min drive Airport', "10 min drive Gares")
content = content.replace('The convenient location on Khodynka Field allows easy access to both the city center and the airport', "Une planification millimétrée et un suivi en temps réel de vos vols pour vous garantir une ponctualité absolue.")

# 8. People section translation
content = content.replace('Designed with people in mind', "Un service d'exception sur-mesure")
content = content.replace('The business center provides a comfortable environment for work and rest, with a lot of light and green areas', "Votre chauffeur privé bilingue assure un accueil nominatif aux gares et aéroports, avec service de bagages.")

# 9. Status section translation
content = content.replace('A status property of international level', "Équipements & Services VIP")
content = content.replace('The business center has a high international status, with modern engineering systems and a high level of security', "Wi-Fi haut débit, rafraîchissements premium, chargeurs et tablettes tactiles à votre disposition durant tout le trajet.")
content = content.replace('Lobby and common areas', "Connectivité & Wi-Fi")
content = content.replace('Meeting rooms and conference halls', "Bien-être & Air pur")

# 10. Replace SVG paths in preloader logo to say CÉDRIC VTC
# We will do a replacement of the SVG paths for A, I, R letters to render text instead.
# For landingIntroLogoA
old_path_a = '<path d="M40.3666 86.4578L67.3714 16.4163H70.5558L97.5605 86.4578H40.3666ZM118.269 140H138L83.9176 0H54.0095L0 140H19.7306L34.0603 102.947H103.992L118.259 140H118.269Z" fill="black">\n                    </path>'
new_text_a = '<text x="10" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="bold">CÉDRIC</text>'
content = content.replace(old_path_a, new_text_a)

# For landingIntroLogoI
old_path_i = '<path d="M720 0H700V140H720V0Z" fill="black">\n                    </path>'
new_text_i = '<text x="680" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">•</text>'
content = content.replace(old_path_i, new_text_i)

# For landingIntroLogoR
old_path_r = '<path d="M1321.61 16.4895H1368.6C1383.39 16.4895 1395.41 28.4913 1395.41 43.2499C1395.41 58.0086 1383.39 70.0104 1368.6 70.0104H1321.61V16.4895ZM1420 140L1377.09 86.1371C1398.52 83.515 1415.1 65.3154 1415.1 43.2396C1415.1 19.3811 1395.68 0 1371.78 0H1302V139.917H1321.69V86.4066H1352.85L1395.47 139.917H1420V139.99V140Z" fill="black">\n                    </path>'
new_text_r = '<text x="1250" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">VTC</text>'
content = content.replace(old_path_r, new_text_r)

# Repeat for mobile logo paths
old_path_a_m = '<path d="M23.0667 49.4044L38.4979 9.38074H40.3176L55.7489 49.4044H23.0667ZM67.5825 80H78.8571L47.9529 0H30.8626L0 80H11.2746L19.463 58.8267H59.4238L67.5765 80H67.5825Z" fill="black">\n                    </path>'
new_text_a_m = '<text x="5" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="bold">CÉDRIC</text>'
content = content.replace(old_path_a_m, new_text_a_m)

old_path_i_m = '<path d="M180.429 0H169V80H180.429V0Z" fill="black">\n                    </path>'
new_text_i_m = '<text x="170" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">•</text>'
content = content.replace(old_path_i_m, new_text_i_m)

old_path_r_m = '<path d="M293.809 9.42256H320.658C329.107 9.42256 335.978 16.2807 335.978 24.7142C335.978 33.1478 329.107 40.0059 320.658 40.0059H293.809V9.42256ZM350.029 80L325.511 49.2212C337.752 47.7228 347.228 37.3231 347.228 24.7083C347.228 11.0749 336.132 0 322.473 0H282.6V79.9526H293.85V49.3752H311.657L336.014 79.9526H350.029V79.9941V80Z" fill="black">\n                    </path>'
new_text_r_m = '<text x="260" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">VTC</text>'
content = content.replace(old_path_r_m, new_text_r_m)

# 11. Escape backticks for JS template literal safety
escaped_html = content.replace('`', '\\`').replace('$', '\\$')

# Write out the rawHtml.ts module
with open(output_path, "w", encoding="utf-8") as f:
    f.write(f"export const rawHtml = `{escaped_html}`;\n")

print("Success: rawHtml.ts has been created successfully!")
