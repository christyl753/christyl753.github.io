import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christ Tiantse — Étudiant en génie informatique · IA & Systèmes",
  description:
    "Portfolio de Christ Aimant Tiantse Takamgno, étudiant en génie informatique à l'UQO (Gatineau). Projets en IA locale (Alyx), systèmes Linux/embarqués, SQL, Node.js et C/C++.",
  openGraph: {
    title: "Christ Tiantse — Portfolio Génie Informatique",
    description:
      "Systèmes embarqués, Linux, IA locale (Alyx), SQL, API REST et C/C++. Disponible pour un stage à Gatineau.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased selection:bg-[#9CE0A8] selection:text-[#111613]"
      >
        {children}
      </body>
    </html>
  );
}
