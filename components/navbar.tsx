"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faGraduationCap,
  faUserPlus,
  faUsers,
  faUserLock,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32"; // Vert forêt extrait du logo
const BAMBIS_GOLD = "#F4B400"; // Jaune doré extrait du logo

type NavItem = {
  label: string;
  href: string;
  icon: IconDefinition;
};

const NAV_ITEMS: NavItem[] = [
  { label: "À Propos", href: "/about", icon: faInfoCircle },
  { label: "Offre Académique", href: "/offre-academique", icon: faGraduationCap },
  { label: "Admissions & Scolarité", href: "/admissions", icon: faUserPlus },
  { label: "Vie du Collège", href: "/vie-du-college", icon: faUsers },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 z-50 h-[15vh] w-full rounded-b-3xl shadow-lg backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(207, 250, 254, 0.85) 0%, rgba(186, 230, 253, 0.80) 45%, rgba(167, 243, 208, 0.85) 100%)",
      }}
    >
      <nav className="mx-auto flex h-full items-center justify-between gap-6 px-8 lg:px-12">
        {/* ---------- LOGO / ACCUEIL (Uniquement l'image) ---------- */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center transition-opacity hover:opacity-80"
          aria-label="Accueil — Collège Privé Laïc Bilingue Les Bambis"
        >
          <Image
            src="/logo.png"
            alt="Logo du Collège Privé Laïc Bilingue Les Bambis"
            width={64}
            height={64}
            priority
            className="h-12 w-12 object-contain lg:h-16 lg:w-16"
          />
        </Link>

        {/* ---------- LIENS DESKTOP ---------- */}
        <ul className="hidden items-center justify-between gap-6 md:flex lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative flex items-center gap-2 text-sm font-semibold transition-colors lg:text-[15px]"
                style={{ color: BAMBIS_GREEN }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-base transition-colors group-hover:text-[#F4B400]"
                />
                <span className="whitespace-nowrap transition-colors group-hover:text-[#F4B400]">
                  {item.label}
                </span>

                {/* Soulignement animé */}
                <span
                  className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: BAMBIS_GOLD }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- CTA DESKTOP ---------- */}
        <Link
          href="/portail-parents"
          className="hidden shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex lg:px-6"
          style={{ backgroundColor: BAMBIS_GOLD, color: BAMBIS_GREEN }}
        >
          <FontAwesomeIcon icon={faUserLock} />
          <span className="whitespace-nowrap">Portail Parents</span>
        </Link>

        {/* ---------- BURGER MOBILE ---------- */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl shadow-sm transition-colors md:hidden"
          style={{ backgroundColor: BAMBIS_GREEN, color: "#ffffff" }}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* ---------- MENU MOBILE DÉROULANT ---------- */}
      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full overflow-hidden rounded-b-3xl shadow-xl transition-[max-height,opacity] duration-300 ease-in-out md:hidden bg-gradient-to-b from-white/90 to-cyan-50/90 backdrop-blur-lg ${isOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#2E7D32]/5"
                style={{ color: BAMBIS_GREEN }}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-5 text-center text-[#F4B400]"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-6">
          <Link
            href="/portail-parents"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-transform active:scale-95"
            style={{ backgroundColor: BAMBIS_GOLD, color: BAMBIS_GREEN }}
          >
            <FontAwesomeIcon icon={faUserLock} />
            Portail Parents
          </Link>
        </div>
      </div>
    </header>
  );
}