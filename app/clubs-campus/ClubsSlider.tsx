"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { CLUBS_DATA, CLUB_ICONS } from "./data";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD = "#F4B400";
const DARK_BG = "#0B1F14";

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function ClubsSlider() {
  const [index, setIndex] = useState(0);
  const total = CLUBS_DATA.length;
  const club = CLUBS_DATA[index];
  const icon = CLUB_ICONS[club.iconKey];

  const goTo = (i: number) => setIndex((i + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <div className="mx-auto max-w-6xl">
      {/* ============ SLIDE ============ */}
      <div
        key={club.slug}
        className="group relative overflow-hidden rounded-3xl border backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          borderColor: `${BAMBIS_GOLD}33`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* ---------- IMAGE ---------- */}
          <div className="relative min-h-[260px] md:min-h-[460px]">
            <Image
              src={club.image}
              alt={club.imageAlt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay charte */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${BAMBIS_GREEN}33, ${BAMBIS_GOLD}22)`,
              }}
            />
            {/* Compteur */}
            <span
              className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
              style={{ backgroundColor: DARK_BG, color: BAMBIS_GOLD }}
            >
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* ---------- CONTENU ---------- */}
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={icon} className="text-2xl" />
            </div>

            <p
              className="mb-2 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              {club.subtitle}
            </p>

            <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
              {club.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-300 lg:text-base">
              {club.shortDesc}
            </p>

            {/* Points forts (2 premiers seulement pour garder le slide aéré) */}
            <ul className="mb-8 space-y-2">
              {club.features.slice(0, 2).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-200"
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="mt-1 shrink-0 text-xs"
                    style={{ color: BAMBIS_GOLD }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <Link
                href={`/clubs-campus/${club.slug}`}
                className="group/btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Découvrir le club
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============ NAVIGATION ============ */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Club précédent"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            borderColor: `${BAMBIS_GOLD}55`,
            color: BAMBIS_GOLD,
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="flex items-center gap-3">
          {CLUBS_DATA.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller au club ${item.title}`}
              aria-current={i === index}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "28px" : "10px",
                backgroundColor:
                  i === index ? BAMBIS_GOLD : `${BAMBIS_GOLD}55`,
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Club suivant"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 hover:-translate-y-0.5"
          style={{
            borderColor: `${BAMBIS_GOLD}55`,
            color: BAMBIS_GOLD,
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}