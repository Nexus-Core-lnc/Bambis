import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faFileLines,
  faClipboardCheck,
  faCalendarCheck,
  faMoneyBillWave,
  faCheckCircle,
  faArrowRight,
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
  },
];

/* Avantages / Facilités de paiement */
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

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function AdmissionsPage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[60vh] w-full overflow-hidden"
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

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 text-center lg:flex-row lg:gap-16 lg:px-12 lg:py-24 lg:text-left">
          <div className="shrink-0">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-full shadow-2xl lg:h-52 lg:w-52"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: `0 0 60px ${BAMBIS_GOLD}55`,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo du Collège Les Bambis"
                width={180}
                height={180}
                priority
                className="h-32 w-32 object-contain lg:h-44 lg:w-44"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <p
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${BAMBIS_GOLD}22`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}55`,
              }}
            >
              Admissions & Scolarité
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Rejoignez la famille <br />
              <span style={{ color: BAMBIS_GOLD }}>Les Bambis</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Les inscriptions sont ouvertes. Découvrez notre procédure
              d&apos;admission, les documents requis et les frais de
              scolarité.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#procedure"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Voir la procédure
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/portail-parents"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Portail Parents
              </Link>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Comment s&apos;inscrire ?
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              La procédure en 4 étapes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                <span
                  className="absolute top-4 right-4 text-5xl font-bold opacity-10"
                  style={{ color: BAMBIS_GOLD }}
                >
                  {step.step}
                </span>
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={step.icon} className="text-xl" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {step.desc}
                </p>

                {/* Flèche entre les étapes */}
                {idx < STEPS.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
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

            <ul className="space-y-4">
              {DOCUMENTS.map((doc) => (
                <li key={doc.label} className="flex items-center gap-4">
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

          {/* Carte dates clés */}
          <div
            className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm lg:p-12"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderColor: `${BAMBIS_GOLD}33`,
            }}
          >
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />
            <div className="relative">
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                <FontAwesomeIcon icon={faClock} className="text-2xl" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-white">
                Dates clés
              </h3>

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
        </div>
      </section>

      {/* ================= FRAIS DE SCOLARITE ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Frais de scolarité
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Tarifs par cycle
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Tarifs indicatifs pour l&apos;année scolaire en cours
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FEES.map((fee) => (
              <div
                key={fee.level}
                className="relative overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Facilités
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Paiement & réductions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {FACILITIES.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                <div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.desc}
                </p>
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
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
            style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
          >
            <FontAwesomeIcon icon={faUserPlus} className="text-2xl" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Prêt à inscrire votre enfant ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Retirez votre dossier d&apos;inscription dès aujourd&apos;hui ou
            contactez-nous pour plus d&apos;informations.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
      </section>
    </main>
  );
}