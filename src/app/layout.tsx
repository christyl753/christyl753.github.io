import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christ Tiantse — Étudiant en génie informatique · IA & Génie Logiciel",
  description:
    "Portfolio de Christ Aimant Tiantse Takamgno, étudiant en génie informatique à l'UQO (Gatineau). Projets en IA locale (Alyx), systèmes Linux/embarqués, SQL, Node.js et C/C++.",
  openGraph: {
    title: "Tiantse Christ — Portfolio Génie Informatique",
    description:
      "Systèmes embarqués, IA appliquée locale, pilotes Linux, SQL et C/C++. Disponible pour un stage à Gatineau et en télétravail.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} pf-grid-bg antialiased selection:bg-[#E11D48] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
