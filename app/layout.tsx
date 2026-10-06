// app/layout.tsx
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Collège Privé Laïc Bilingue Les Bambis",
    template: "%s | Collège Les Bambis",
  },
  description:
    "Site officiel du Collège Privé Laïc Bilingue Les Bambis — Excellence, discipline et bilinguisme au service de la réussite.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${comfortaa.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-comfortaa bg-white text-bambis-green">
        <Navbar />
        <main className="flex-1 pt-[15vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}