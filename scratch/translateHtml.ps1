# Powershell script to read aircenter_space.html, translate it to Cédric VTC, and output a rawHtml.ts module.

$htmlPath = "C:\Users\newgenprometheus\Downloads\aircenter_space.html"
$outputPath = "c:\Users\newgenprometheus\42\vtc\src\app\rawHtml.ts"

# Read file contents with UTF-8 encoding
$content = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# 1. Replace relative assets with absolute live assets
$content = $content.Replace('"/assets/images/', '"https://aircenter.space/assets/images/')

# 2. Replace relative fonts and javascript references
$content = $content.Replace('"/assets/javascripts/shared.js', '"/assets/javascripts/shared.js')
$content = $content.Replace('"/assets/javascripts/landing.js', '"/assets/javascripts/landing.js')
$content = $content.Replace('"/assets/javascripts/browser-message/browser-message.js', '"/assets/javascripts/browser-message/browser-message.js')

# 3. Translate texts (Prestige VTC)
$content = $content.Replace('The architecture<br />of New Success', 'L''excellence de votre<br />voyage privé')
$content = $content.Replace('Class (A)<br />premium business<br />center', 'Chauffeur Privé VTC<br />de Prestige<br />Tesla')
$content = $content.Replace('AIR — A Premium Class A Business Center on Khodynka Field by Tekta Group', 'Cédric VTC — Chauffeur Privé de Prestige à Paris')
$content = $content.Replace('Choose an office', 'Réserver un chauffeur')
$content = $content.Replace('Choose an office', 'Réserver un chauffeur')
$content = $content.Replace('Choose a<br />parking spot', 'Demander un devis')
$content = $content.Replace('Choose a parking spot', 'Demander un devis')
$content = $content.Replace('By parameters', 'Estimer un trajet')
$content = $content.Replace('By parameters', 'Estimer un trajet')
$content = $content.Replace('On the master plan', 'Réserver en ligne')
$content = $content.Replace('On the master plan', 'Réserver en ligne')
$content = $content.Replace('About the project', 'Notre Flotte')
$content = $content.Replace('About the developer', 'À propos de Cédric')
$content = $content.Replace('Construction progress', 'Prestations VIP')
$content = $content.Replace('News and offers', 'Services à bord')
$content = $content.Replace('© 2026 Tekta group', '© 2026 Cédric VTC')
$content = $content.Replace('Website by Vide Infra', 'Site de prestige')

# 4. Specific section text overrides
$content = $content.Replace('Efficient layouts and class (A) specifications', 'Une flotte 100% électrique éco-responsable')
$content = $content.Replace('A wide choice of layouts for teams of 10 to 100 people. Excellent class (A) technical parameters.', 'Découvrez le luxe discret de nos Tesla Model S Plaid et Model Y. Un confort absolu pour tous vos transferts parisiens.')

# 5. Format section translation
$content = $content.Replace('Office format', 'Nos Modèles')
$content = $content.Replace('Intelligent office formats for teams of any size', 'La quintessence de l''éco-mobilité premium')
$content = $content.Replace('A set of smart office layouts developed taking into account the requirements of the largest and most demanding companies', 'Des véhicules d''exception pour répondre aux exigences des passagers les plus sélectifs.')
$content = $content.Replace('For mid-sized and large companies', 'Pour vos trajets professionnels et transferts')
$content = $content.Replace('For small teams and start-ups', 'Pour un confort ultime en solo ou duo')

# 6. Harmony section translation
$content = $content.Replace('An intelligent harmony of curved glass and radiant metal', 'Une harmonie silencieuse de verre et de confort')
$content = $content.Replace('The unique style of the business center is shaped by the curved panoramic glass facade and the radiant metal structure', 'Le toit panoramique vitré vous offre une vue imprenable sur Paris, dans le silence feutré d''une cabine insonorisée.')

# 7. Life section translation
$content = $content.Replace('Business and life in the center of events', 'Votre temps est précieux')
$content = $content.Replace('1 min walk Mall', '30 min drive Orly')
$content = $content.Replace('3 min walk Metro', '45 min drive CDG')
$content = $content.Replace('7 min drive Downtown', '15 min drive La Défense')
$content = $content.Replace('20 min drive Airport', '10 min drive Gares')
$content = $content.Replace('The convenient location on Khodynka Field allows easy access to both the city center and the airport', 'Une planification millimétrée et un suivi en temps réel de vos vols pour vous garantir une ponctualité absolue.')

# 8. People section translation
$content = $content.Replace('Designed with people in mind', 'Un service d''exception sur-mesure')
$content = $content.Replace('The business center provides a comfortable environment for work and rest, with a lot of light and green areas', 'Votre chauffeur privé bilingue assure un accueil nominatif aux gares et aéroports, avec service de bagages.')

# 9. Status section translation
$content = $content.Replace('A status property of international level', 'Équipements & Services VIP')
$content = $content.Replace('The business center has a high international status, with modern engineering systems and a high level of security', 'Wi-Fi haut débit, rafraîchissements premium, chargeurs et tablettes tactiles à votre disposition durant tout le trajet.')
$content = $content.Replace('Lobby and common areas', 'Connectivité & Wi-Fi')
$content = $content.Replace('Meeting rooms and conference halls', 'Bien-être & Air pur')

# 10. Replace SVG paths in preloader logo to say CÉDRIC VTC
# We will do a replacement of the SVG paths for A, I, R letters to render text instead.
# For landingIntroLogoA
$content = $content.Replace('<path d="M40.3666 86.4578L67.3714 16.4163H70.5558L97.5605 86.4578H40.3666ZM118.269 140H138L83.9176 0H54.0095L0 140H19.7306L34.0603 102.947H103.992L118.259 140H118.269Z" fill="black">` + "`n" + '                    </path>', '<text x="10" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="bold">CÉDRIC</text>')
# For landingIntroLogoI
$content = $content.Replace('<path d="M720 0H700V140H720V0Z" fill="black">' + "`n" + '                    </path>', '<text x="680" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">•</text>')
# For landingIntroLogoR
$content = $content.Replace('<path d="M1321.61 16.4895H1368.6C1383.39 16.4895 1395.41 28.4913 1395.41 43.2499C1395.41 58.0086 1383.39 70.0104 1368.6 70.0104H1321.61V16.4895ZM1420 140L1377.09 86.1371C1398.52 83.515 1415.1 65.3154 1415.1 43.2396C1415.1 19.3811 1395.68 0 1371.78 0H1302V139.917H1321.69V86.4066H1352.85L1395.47 139.917H1420V139.99V140Z" fill="black">' + "`n" + '                    </path>', '<text x="1250" y="110" fill="white" font-family="Cinzel" font-size="120" font-weight="light">VTC</text>')

# Repeat for mobile logo paths
$content = $content.Replace('<path d="M23.0667 49.4044L38.4979 9.38074H40.3176L55.7489 49.4044H23.0667ZM67.5825 80H78.8571L47.9529 0H30.8626L0 80H11.2746L19.463 58.8267H59.4238L67.5765 80H67.5825Z" fill="black">' + "`n" + '                    </path>', '<text x="5" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="bold">CÉDRIC</text>')
$content = $content.Replace('<path d="M180.429 0H169V80H180.429V0Z" fill="black">' + "`n" + '                    </path>', '<text x="170" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">•</text>')
$content = $content.Replace('<path d="M293.809 9.42256H320.658C329.107 9.42256 335.978 16.2807 335.978 24.7142C335.978 33.1478 329.107 40.0059 320.658 40.0059H293.809V9.42256ZM350.029 80L325.511 49.2212C337.752 47.7228 347.228 37.3231 347.228 24.7083C347.228 11.0749 336.132 0 322.473 0H282.6V79.9526H293.85V49.3752H311.657L336.014 79.9526H350.029V79.9941V80Z" fill="black">' + "`n" + '                    </path>', '<text x="260" y="65" fill="white" font-family="Cinzel" font-size="60" font-weight="light">VTC</text>')

# 11. Escape backticks for JS template literal safety
$escapedHtml = $content.Replace('`', '\`').Replace('$', '\$')

# Write out the rawHtml.ts module
$moduleContent = "export const rawHtml = ``" + $escapedHtml + "``;"
[System.IO.File]::WriteAllText($outputPath, $moduleContent, [System.Text.Encoding]::UTF8)

Write-Host "Success: rawHtml.ts has been created successfully!"
