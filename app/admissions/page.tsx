import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFileLines,
  faClipboardCheck,
  faCalendarCheck,
  faCheckCircle,
  faArrowRight,
  faArrowDown,
  faUsers,
  faGraduationCap,
  faFileSignature,
  faIdCard,
  faCamera,
  faStethoscope,
  faSchool,
  faBookOpen,
  faPercent,
  faHandHoldingDollar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14";

const CARD = {
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  borderColor: `${BAMBIS_GOLD}33`,
} as const;

/* Étapes de la procédure d'admission */
const STEPS = [
  {
    icon: faFileLines,
    step: "01",
    title: "Retrait du dossier",
    desc: "Procurez-vous le dossier d'inscription au secrétariat du collège ou téléchargez-le en ligne.",
  },
  {
    icon: faFileSignature,
    step: "02",
    title: "Dépôt du dossier",
    desc: "Complétez et déposez le dossier avec toutes les pièces justificatives requises.",
  },
  {
    icon: faClipboardCheck,
    step: "03",
    title: "Étude du dossier",
    desc: "La commission pédagogique examine votre demande et vous contacte sous 72h.",
  },
  {
    icon: faCalendarCheck,
    step: "04",
    title: "Inscription définitive",
    desc: "Après validation, finalisez l'inscription et réglez les frais de scolarité.",
  },
];

/* Pièces à fournir */
const DOCUMENTS = [
  { icon: faFileLines, label: "Bulletins des 2 dernières années" },
  { icon: faIdCard, label: "Acte de naissance (copie certifiée)" },
  { icon: faCamera, label: "4 photos d'identité récentes" },
  { icon: faStethoscope, label: "Carnet de vaccination à jour" },
  { icon: faFileSignature, label: "Certificat de transfert (si applicable)" },
  { icon: faClipboardCheck, label: "Formulaire d'inscription rempli" },
];

/* Frais de scolarité par cycle */
const FEES = [
  {
    icon: faSchool,
    level: "Primaire",
    range: "SIL → CM2",
    inscription: "25 000 FCFA",
    scolarite: "150 000 FCFA / an",
    features: [
      "Frais d'inscription",
      "Frais de scolarité annuels",
      "Fournitures incluses",
      "Cantine optionnelle",
    ],
    highlighted: false,
  },
  {
    icon: faBookOpen,
    level: "Secondaire 1er cycle",
    range: "6ᵉ → 3ᵉ",
    inscription: "30 000 FCFA",
    scolarite: "200 000 FCFA / an",
    features: [
      "Frais d'inscription",
      "Frais de scolarité annuels",
      "Laboratoires inclus",
      "Sorties pédagogiques",
    ],
    highlighted: true,
  },
  {
    icon: faGraduationCap,
    level: "Secondaire 2nd cycle",
    range: "2ⁿᵈ → Terminale",
    inscription: "35 000 FCFA",
    scolarite: "250 000 FCFA / an",
    features: [
      "Frais d'inscription",
      "Frais de scolarité annuels",
      "Préparation aux examens",
      "Orientation post-bac",
    ],
    highlighted: false,
  },
];

/* Facilités de paiement */
const FACILITIES = [
  {
    icon: faHandHoldingDollar,
    title: "Paiement échelonné",
    desc: "Possibilité de régler la scolarité en 3 tranches (septembre, janvier, avril).",
  },
  {
    icon: faPercent,
    title: "Réductions fratrie",
    desc: "-10% sur la scolarité à partir du 3ᵉ enfant inscrit dans l'établissement.",
  },
  {
    icon: faUsers,
    title: "Bourses au mérite",
    desc: "Des bourses partielles ou totales pour les élèves les plus méritants.",
  },
];

/* Dates clés */
const DATES = [
  { period: "Février – Juin", label: "Période de pré-inscription" },
  { period: "Juillet – Août", label: "Traitement des dossiers" },
  { period: "Début Septembre", label: "Rentrée scolaire officielle" },
];

/* Atouts rapides du hero */
const HERO_FACTS = [
  "4 étapes simples",
  "Réponse sous 72h",
  "Paiement en 3 tranches",
];

/* Code-barres décoratif de la carte */
const BARS = [
  60, 100, 40, 80, 100, 50, 90, 30, 100, 70, 45, 85, 100, 55, 75, 35, 95, 100,
  60, 40, 80, 100, 50, 90, 65, 100, 45, 85, 30, 100, 70, 55, 95, 40, 80, 100,
];

/* ------------------------------------------------------------------ */
/*  En-tête de section                                                 */
/* ------------------------------------------------------------------ */

function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 text-center">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-widest"
        style={{ color: BAMBIS_GOLD }}
      >
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-gray-400">{subtitle}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function AdmissionsPage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO : CARTE D'ELEVE ================= */}
      <section
        className="relative flex min-h-[85vh] w-full items-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${DARK_BG} 0%, #10321E 55%, #143F26 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GREEN}44` }}
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* ============ TEXTE ============ */}
          <div className="text-center lg:text-left">
            <p
              className="mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${BAMBIS_GOLD}22`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}55`,
              }}
            >
              Admissions & Scolarité
            </p>

            <h1
              className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Rejoignez la famille{" "}
              <span className="block" style={{ color: BAMBIS_GOLD }}>
                Les Bambis
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-0 lg:text-lg">
              Les inscriptions sont ouvertes. Découvrez notre procédure
              d&apos;admission, les documents requis et les frais de
              scolarité.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {HERO_FACTS.map((fact) => (
                <span
                  key={fact}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold text-gray-100 backdrop-blur-sm"
                  style={CARD}
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{ color: BAMBIS_GOLD }}
                  />
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#procedure"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Voir la procédure
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
              <Link
                href="/portail-parents"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Portail Parents
              </Link>
            </div>
          </div>

          {/* ============ CARTE D'ELEVE ============ */}
          <div className="relative mx-auto w-full max-w-md">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />

            <div
              className="relative -rotate-3 rounded-3xl border p-6 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0 lg:p-8"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                borderColor: `${BAMBIS_GOLD}55`,
              }}
            >
              {/* En-tête */}
              <div
                className="flex items-center gap-4 border-b pb-5"
                style={{ borderColor: `${BAMBIS_GOLD}33` }}
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "#ffffff",
                    boxShadow: `0 0 30px ${BAMBIS_GOLD}55`,
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="Logo du Collège Les Bambis"
                    width={56}
                    height={56}
                    priority
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    Carte d&apos;élève
                  </p>
                  <p className="text-lg font-bold text-white">
                    Collège Les Bambis
                  </p>
                </div>
              </div>

              {/* Corps */}
              <div className="mt-5 grid grid-cols-[96px_1fr] gap-5">
                <div
                  className="flex h-28 items-center justify-center rounded-2xl border border-dashed"
                  style={{
                    borderColor: `${BAMBIS_GOLD}77`,
                    backgroundColor: `${BAMBIS_GOLD}11`,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  />
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Élève", value: "Votre enfant" },
                    { label: "Classe", value: "SIL → Terminale" },
                    { label: "Rentrée", value: "Début septembre" },
                  ].map((field) => (
                    <div key={field.label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {field.label}
                      </p>
                      <p className="text-sm font-bold text-white">
                        {field.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statut */}
              <div
                className="mt-6 flex items-center justify-between rounded-2xl border p-4"
                style={{
                  backgroundColor: `${BAMBIS_GREEN}22`,
                  borderColor: `${BAMBIS_GOLD}55`,
                }}
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                      style={{ backgroundColor: BAMBIS_GOLD }}
                    />
                    <span
                      className="relative inline-flex h-3 w-3 rounded-full"
                      style={{ backgroundColor: BAMBIS_GOLD }}
                    />
                  </span>
                  Inscriptions ouvertes
                </span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: BAMBIS_GOLD }}
                />
              </div>

              {/* Code-barres décoratif */}
              <div
                className="mt-5 flex h-8 items-end gap-[3px] opacity-60"
                aria-hidden="true"
              >
                {BARS.map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] rounded-sm"
                    style={{ height: `${h}%`, backgroundColor: BAMBIS_GOLD }}
                  />
                ))}
              </div>
            </div>

            {/* Badges flottants */}
            <div
              className="absolute -right-2 -top-5 rounded-2xl border px-4 py-2.5 text-center shadow-xl backdrop-blur-md lg:-right-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: `${BAMBIS_GOLD}55`,
              }}
            >
              <p
                className="text-xl font-bold leading-none"
                style={{ color: BAMBIS_GOLD }}
              >
                72h
              </p>
              <p className="mt-1 text-[11px] text-gray-200">Réponse</p>
            </div>
            <div
              className="absolute -bottom-5 -left-2 rounded-2xl border px-4 py-2.5 text-center shadow-xl backdrop-blur-md lg:-left-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: `${BAMBIS_GOLD}55`,
              }}
            >
              <p
                className="text-xl font-bold leading-none"
                style={{ color: BAMBIS_GOLD }}
              >
                4
              </p>
              <p className="mt-1 text-[11px] text-gray-200">étapes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCEDURE ================= */}
      <section
        id="procedure"
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeader
            label="Comment s'inscrire ?"
            title="La procédure en 4 étapes"
          />

          <ol className="relative space-y-8">
            {/* Ligne verticale */}
            <div
              className="absolute left-7 top-0 h-full w-0.5 -translate-x-1/2"
              style={{
                background: `linear-gradient(180deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />

            {STEPS.map((step) => (
              <li key={step.title} className="relative flex items-start gap-6">
                <div
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 text-lg font-extrabold shadow-lg"
                  style={{
                    backgroundColor: BAMBIS_GOLD,
                    color: DARK_BG,
                    borderColor: DARK_BG,
                  }}
                >
                  {step.step}
                </div>

                <div
                  className="flex-1 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                  style={CARD}
                >
                  <div className="mb-2 flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-lg"
                      style={{ color: BAMBIS_GOLD }}
                    />
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= DOCUMENTS + DATES ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Carte dates clés */}
          <div
            className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm lg:p-12"
            style={CARD}
          >
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-lg"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={faClock} className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-white">Dates clés</h3>
              </div>

              <div className="space-y-4">
                {DATES.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border p-5"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: `${BAMBIS_GOLD}22`,
                    }}
                  >
                    <div
                      className="flex h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: BAMBIS_GOLD }}
                    />
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        {item.period}
                      </p>
                      <p className="text-sm text-gray-200">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 rounded-2xl border p-5"
                style={{
                  backgroundColor: `${BAMBIS_GREEN}22`,
                  borderColor: `${BAMBIS_GOLD}55`,
                }}
              >
                <p className="text-sm text-gray-100">
                  <strong className="text-white">Rentrée :</strong> début
                  septembre. Le calendrier précis est communiqué en août.
                </p>
              </div>
            </div>
          </div>

          {/* Pièces à fournir */}
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Dossier d&apos;inscription
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Pièces à fournir
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300">
              Pour finaliser votre inscription, veuillez préparer les
              documents suivants. Le dossier complet doit être déposé au
              secrétariat de l&apos;établissement.
            </p>

            <ul className="space-y-3">
              {DOCUMENTS.map((doc) => (
                <li
                  key={doc.label}
                  className="flex items-center gap-4 rounded-xl border p-3 backdrop-blur-sm"
                  style={CARD}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${BAMBIS_GOLD}1a`,
                      color: BAMBIS_GOLD,
                      border: `1px solid ${BAMBIS_GOLD}44`,
                    }}
                  >
                    <FontAwesomeIcon icon={doc.icon} className="text-sm" />
                  </span>
                  <span className="text-gray-200">{doc.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FRAIS DE SCOLARITE ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <SectionHeader
            label="Frais de scolarité"
            title="Tarifs par cycle"
            subtitle="Tarifs indicatifs pour l'année scolaire en cours"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEES.map((fee) => (
              <div
                key={fee.level}
                className={`relative overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                  fee.highlighted ? "md:z-10 md:scale-105" : ""
                }`}
                style={{
                  backgroundColor: fee.highlighted
                    ? `${BAMBIS_GOLD}1a`
                    : "rgba(255, 255, 255, 0.04)",
                  borderColor: fee.highlighted
                    ? BAMBIS_GOLD
                    : `${BAMBIS_GOLD}33`,
                  boxShadow: fee.highlighted
                    ? `0 0 40px ${BAMBIS_GOLD}33`
                    : "none",
                }}
              >
                {fee.highlighted && (
                  <div
                    className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    Populaire
                  </div>
                )}

                <div className="p-8">
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon icon={fee.icon} className="text-xl" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {fee.level}
                  </h3>
                  <p
                    className="mb-6 text-xs font-bold uppercase tracking-widest"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    {fee.range}
                  </p>

                  <div
                    className="mb-6 border-y py-5"
                    style={{ borderColor: `${BAMBIS_GOLD}33` }}
                  >
                    <div className="mb-3 flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">
                        Inscription
                      </span>
                      <span className="text-lg font-bold text-white">
                        {fee.inscription}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">Scolarité</span>
                      <span
                        className="text-lg font-bold"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        {fee.scolarite}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {fee.features.map((feature) => (
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

                  <Link
                    href="/portail-parents"
                    className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{
                      backgroundColor: fee.highlighted
                        ? BAMBIS_GOLD
                        : "rgba(255,255,255,0.08)",
                      color: fee.highlighted ? DARK_BG : "#ffffff",
                      border: fee.highlighted
                        ? "none"
                        : `1px solid ${BAMBIS_GOLD}55`,
                    }}
                  >
                    S&apos;inscrire
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACILITES DE PAIEMENT ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-12">
          {/* Titre */}
          <div className="text-center lg:text-left">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Facilités
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Paiement & réductions
            </h2>
            <p className="leading-relaxed text-gray-300">
              Nous voulons que chaque famille puisse offrir à son enfant une
              éducation de qualité. Découvrez les solutions qui facilitent le
              règlement de la scolarité.
            </p>
          </div>

          {/* Cartes */}
          <div className="space-y-5">
            {FACILITIES.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:translate-x-1"
                style={CARD}
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(135deg, #0B1F14 0%, #143F26 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm lg:p-12"
            style={CARD}
          >
            <div
              className="absolute -top-20 -left-20 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />

            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                <FontAwesomeIcon icon={faUserPlus} className="text-3xl" />
              </div>

              <div className="flex-1">
                <h2 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
                  Prêt à inscrire votre enfant ?
                </h2>
                <p className="text-lg text-gray-300">
                  Retirez votre dossier d&apos;inscription dès aujourd&apos;hui
                  ou contactez-nous pour plus d&apos;informations.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/portail-parents"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={faUsers} />
                  Portail Parents
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/a-propos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                  style={{ borderColor: "#ffffff", color: "#ffffff" }}
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}