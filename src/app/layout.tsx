import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cédric VTC | Chauffeur Privé de Prestige en Tesla noire",
  description:
    "Service de chauffeur privé et VTC de luxe à Paris et Île-de-France. Voyagez à bord d'une Tesla noire haut de gamme. Réservation instantanée.",
  keywords: ["vtc", "chauffeur prive", "tesla", "luxe", "paris", "cedric vtc", "chauffeur electrique"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased" style={{ scrollBehavior: "smooth" }}>
      <body className="min-h-full flex flex-col" style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
