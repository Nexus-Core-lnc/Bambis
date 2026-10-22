import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faArrowRight,
  faGraduationCap,
  faUserPlus,
  faUsers,
  faInfoCircle,
  faUserLock,
  faMapPin,
  faCalendarDays,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faWhatsapp,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GOLD = "#F4B400";
const DARK_BG     = "#0B1F14";

/* Liens utiles avec icônes dédiées */
const QUICK_LINKS = [
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
    label: "Vie Scolaire & Événements",
    href: "/vie-scolaire",
    icon: faCalendarDays,
  },
  {
    label: "Clubs & Campus",
    href: "/clubs-campus",
    icon: faBuildingColumns,
  },
  { label: "Portail Parents", href: "/portail-parents", icon: faUserLock },
];

/* Réseaux sociaux */
const SOCIALS = [
  { icon: faFacebookF, href: "#", label: "Facebook" },
  { icon: faWhatsapp, href: "#", label: "WhatsApp" },
  { icon: faLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: faYoutube, href: "#", label: "YouTube" },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${DARK_BG} 0%, #071410 100%)`,
        borderTop: `1px solid ${BAMBIS_GOLD}33`,
      }}
    >
      {/* Halo décoratif doré */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-12">
        {/* ================= GRILLE PRINCIPALE (3 COLONNES) ================= */}
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* ============ SECTION 1 : IDENTITÉ + MAP ============ */}
          <div className="flex flex-col">
            {/* Logo + Nom */}
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: `0 0 20px ${BAMBIS_GOLD}44`,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo du Collège Les Bambis"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">
                  Collège Les Bambis
                </p>
                <p
                  className="text-[10px] font-medium uppercase tracking-widest"
                  style={{ color: BAMBIS_GOLD }}
                >
                  Privé Laïc Bilingue
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mb-5 text-sm leading-relaxed text-gray-300">
              Établissement d&apos;excellence où chaque élève est accompagné
              vers la réussite, dans un environnement bilingue et
              bienveillant.
            </p>

            {/* Devise */}
            <div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${BAMBIS_GOLD}1a`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}44`,
              }}
            >
              ★ Travail • Discipline • Réussite
            </div>

            {/* ---------- CARTE GOOGLE MAPS ---------- */}
            <div className="mt-2">
              <div
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: BAMBIS_GOLD }}
              >
                <FontAwesomeIcon icon={faMapPin} />
                Nous localiser
              </div>

              <div
                className="overflow-hidden rounded-2xl border shadow-lg"
                style={{ borderColor: `${BAMBIS_GOLD}33` }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.990849492633!2d11.5021!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnNTIuOCJOIDExwrAzMCcwNy42IkU!5e0!3m2!1sfr!2scm!4v1700000000000!5m2!1sfr!2scm"
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du Collège Les Bambis"
                />
              </div>

              <p className="mt-3 text-xs text-gray-400">
                📍 Quartier Les Bambis — Yaoundé, Cameroun
              </p>
            </div>
          </div>

          {/* ============ SECTION 2 : LIENS UTILES ============ */}
          <div>
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Liens utiles
            </h4>

            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 hover:translate-x-1"
                  >
                    {/* Icône dans un carré doré */}
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${BAMBIS_GOLD}1a`,
                        color: BAMBIS_GOLD,
                        border: `1px solid ${BAMBIS_GOLD}44`,
                      }}
                    >
                      <FontAwesomeIcon icon={link.icon} className="text-xs" />
                    </span>

                    {/* Label */}
                    <span className="flex-1 text-sm text-gray-300 transition-colors group-hover:text-white">
                      {link.label}
                    </span>

                    {/* Flèche à droite */}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-[10px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: BAMBIS_GOLD }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ SECTION 3 : CONTACT + RÉSEAUX ============ */}
          <div className="flex flex-col">
            <h4
              className="mb-5 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Nous contacter
            </h4>

            {/* ---------- Coordonnées ---------- */}
            <ul className="mb-10 grid gap-5 text-sm text-gray-300">
              {/* Adresse */}
              <li className="flex min-h-[60px] items-center gap-3 rounded-xl px-2 py-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${BAMBIS_GOLD}1a`,
                    color: BAMBIS_GOLD,
                    border: `1px solid ${BAMBIS_GOLD}44`,
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} className="text-xs" />
                </span>
                <span className="leading-snug">
                  Quartier Les Bambis
                  <br />
                  Yaoundé, Cameroun
                </span>
              </li>

              {/* Téléphone */}
              <li className="flex min-h-[60px] items-center gap-3 rounded-xl px-2 py-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${BAMBIS_GOLD}1a`,
                    color: BAMBIS_GOLD,
                    border: `1px solid ${BAMBIS_GOLD}44`,
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} className="text-xs" />
                </span>
                <span className="leading-snug">
                  +237 XXX XXX XXX
                  <br />
                  +237 YYY YYY YYY
                </span>
              </li>

              {/* Email */}
              <li className="flex min-h-[60px] items-center gap-3 rounded-xl px-2 py-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${BAMBIS_GOLD}1a`,
                    color: BAMBIS_GOLD,
                    border: `1px solid ${BAMBIS_GOLD}44`,
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                </span>
                <span className="leading-snug">contact@bambis.com</span>
              </li>

              {/* Horaires */}
              <li className="flex min-h-[60px] items-center gap-3 rounded-xl px-2 py-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${BAMBIS_GOLD}1a`,
                    color: BAMBIS_GOLD,
                    border: `1px solid ${BAMBIS_GOLD}44`,
                  }}
                >
                  <FontAwesomeIcon icon={faClock} className="text-xs" />
                </span>
                <span className="leading-snug">
                  Lun – Ven : 07h30 – 15h30
                  <br />
                  Samedi : 08h00 – 12h00
                </span>
              </li>
            </ul>

            {/* ---------- RÉSEAUX SOCIAUX ---------- */}
            <div className="mt-auto">
              <h4
                className="mb-3 text-[10px] font-bold uppercase tracking-widest"
                style={{ color: `${BAMBIS_GOLD}99` }}
              >
                Suivez-nous
              </h4>

              <div className="flex items-center gap-5">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="text-[13px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BANDEAU INFÉRIEUR ================= */}
        <div
          className="flex flex-col items-center justify-between gap-4 border-t py-6 text-center text-xs text-gray-400 md:flex-row md:text-left"
          style={{ borderColor: `${BAMBIS_GOLD}22` }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">
              Collège Privé Laïc Bilingue Les Bambis
            </span>{" "}
            — Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-white"
            >
              Mentions légales
            </Link>
            <span style={{ color: `${BAMBIS_GOLD}55` }}>•</span>
            <Link
              href="/confidentialite"
              className="transition-colors hover:text-white"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}