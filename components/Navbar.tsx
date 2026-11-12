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
  faChevronDown,
  faCalendarDays,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD = "#F4B400";

type NavLeaf = {
  label: string;
  href: string;
  icon: IconDefinition;
};

type NavItem = {
  label: string;
  href?: string;
  icon: IconDefinition;
  children?: NavLeaf[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "À Propos", href: "/a-propos", icon: faInfoCircle },
  {
    label: "Offre Académique",
    href: "/offre-academique",
    icon: faGraduationCap,
  },
  {
    label: "Admissions & Scolarité",
    href: "/admissions",
    icon: faUserPlus,
  },
  {
    label: "Vie du Collège",
    icon: faUsers,
    children: [
      {
        label: "Vie Scolaire & Événements",
        href: "/vie-scolaire",
        icon: faCalendarDays,
      },
      {
        label: "Clubs & Campus",
        href: "/clubs-campus",
        icon: faBuildingColumns,
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeMobile = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header
      className="fixed top-0 left-0 z-50 h-[15vh] w-full rounded-b-3xl shadow-lg backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(207, 250, 254, 0.85) 0%, rgba(186, 230, 253, 0.80) 45%, rgba(167, 243, 208, 0.85) 100%)",
      }}
    >
      <nav className="mx-auto flex h-full items-center justify-between gap-6 px-8 lg:px-12">
        {/* ---------- LOGO ---------- */}
        <Link
          href="/"
          onClick={closeMobile}
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
          {NAV_ITEMS.map((item) =>
            item.children ? (
              /* ---- Item avec sous-menu ---- */
              <li key={item.label} className="group relative">
                <button
                  type="button"
                  aria-haspopup="true"
                  className="relative flex items-center gap-2 text-sm font-semibold transition-colors lg:text-[15px]"
                  style={{ color: BAMBIS_GREEN }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-base transition-colors group-hover:text-[#F4B400]"
                  />
                  <span className="whitespace-nowrap transition-colors group-hover:text-[#F4B400]">
                    {item.label}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[10px] transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#F4B400]"
                  />
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: BAMBIS_GOLD }}
                  />
                </button>

                {/* Panneau dropdown (pont invisible via pt-3) */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul
                    className="w-72 overflow-hidden rounded-2xl border bg-white/95 shadow-2xl backdrop-blur-lg"
                    style={{ borderColor: `${BAMBIS_GOLD}55` }}
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="group/link flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#2E7D32]/5"
                          style={{ color: BAMBIS_GREEN }}
                        >
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover/link:scale-110"
                            style={{
                              backgroundColor: `${BAMBIS_GOLD}22`,
                              color: BAMBIS_GOLD,
                              border: `1px solid ${BAMBIS_GOLD}55`,
                            }}
                          >
                            <FontAwesomeIcon
                              icon={child.icon}
                              className="text-xs"
                            />
                          </span>
                          <span className="flex-1 transition-colors group-hover/link:text-[#F4B400]">
                            {child.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              /* ---- Item simple ---- */
              <li key={item.href}>
                <Link
                  href={item.href as string}
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
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: BAMBIS_GOLD }}
                  />
                </Link>
              </li>
            )
          )}
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
        className={`absolute left-0 top-full w-full overflow-hidden rounded-b-3xl shadow-xl transition-[max-height,opacity] duration-300 ease-in-out md:hidden bg-gradient-to-b from-white/95 to-cyan-50/95 backdrop-blur-lg ${
          isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-4">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenSubmenu((prev) =>
                      prev === item.label ? null : item.label
                    )
                  }
                  aria-expanded={openSubmenu === item.label}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#2E7D32]/5"
                  style={{ color: BAMBIS_GREEN }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-5 text-center text-[#F4B400]"
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform duration-300 ${
                      openSubmenu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                    openSubmenu === item.label
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={closeMobile}
                        className="flex items-center gap-3 rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium transition-colors hover:bg-[#2E7D32]/5"
                        style={{ color: BAMBIS_GREEN }}
                      >
                        <FontAwesomeIcon
                          icon={child.icon}
                          className="w-4 text-center text-[#F4B400]"
                        />
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href as string}
                  onClick={closeMobile}
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
            )
          )}
        </ul>

        <div className="px-6 pb-6">
          <Link
            href="/portail-parents"
            onClick={closeMobile}
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