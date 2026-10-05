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
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const MARINE = "#0F2C59";
const GOLD = "#F4B400";

type NavItem = {
  label: string;
  href: string;
  icon: IconDefinition;
};

const NAV_ITEMS: NavItem[] = [
  { label: "À Propos", href: "/a-propos", icon: faInfoCircle },
  { label: "Offre Académique", href: "/offre-academique", icon: faGraduationCap },
  { label: "Admissions & Scolarité", href: "/admissions", icon: faUserPlus },
  { label: "Vie du Collège", href: "/vie-du-college", icon: faUsers },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 h-[15vh] w-full rounded-b-3xl bg-white shadow-lg"
      style={{ backgroundColor: "#ffffff" }}
    >
      <nav className="mx-auto flex h-full items-center justify-between gap-6 px-8 lg:px-12">
        {/* ---------- LOGO / ACCUEIL ---------- */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Accueil — Collège Privé Laïc Bilingue Les Bambis"
        >
          {logoError ? (
            /* Fallback : écusson / icône école */
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full shadow-md"
              style={{ backgroundColor: MARINE, color: GOLD }}
            >
              <FontAwesomeIcon icon={faSchool} className="text-xl" />
            </span>
          ) : (
            <Image
              src="/images/logo-bambis.png"
              alt="Logo du Collège Privé Laïc Bilingue Les Bambis"
              width={64}
              height={64}
              priority
              onError={() => setLogoError(true)}
              className="h-12 w-12 object-contain lg:h-14 lg:w-14"
            />
          )}

          <span className="hidden leading-tight lg:block">
            <span
              className="block text-sm font-bold xl:text-base"
              style={{ color: MARINE }}
            >
              Collège Les Bambis
            </span>
            <span
              className="block text-[10px] font-medium uppercase tracking-widest xl:text-xs"
              style={{ color: `${MARINE}99` }}
            >
              Privé Laïc Bilingue
            </span>
          </span>
        </Link>

        {/* ---------- LIENS DESKTOP ---------- */}
        <ul className="hidden items-center justify-between gap-6 md:flex lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative flex items-center gap-2 text-sm font-semibold transition-colors lg:text-[15px]"
                style={{ color: MARINE }}
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
                  style={{ backgroundColor: GOLD }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- CTA DESKTOP ---------- */}
        <Link
          href="/portail-parents"
          className="hidden shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:inline-flex lg:px-6"
          style={{ backgroundColor: GOLD, color: MARINE }}
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
          style={{ backgroundColor: MARINE, color: "#ffffff" }}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* ---------- MENU MOBILE DÉROULANT ---------- */}
      <div
        id="mobile-menu"
        className={`absolute left-0 top-full w-full overflow-hidden rounded-b-3xl bg-white shadow-xl transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#0F2C59]/5"
                style={{ color: MARINE }}
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
            style={{ backgroundColor: GOLD, color: MARINE }}
          >
            <FontAwesomeIcon icon={faUserLock} />
            Portail Parents
          </Link>
        </div>
      </div>
    </header>
  );
}