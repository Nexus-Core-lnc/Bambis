import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faFlask,
  faCalculator,
  faLanguage,
  faPalette,
  faFutbol,
  faLaptopCode,
  faArrowRight,
  faCheckCircle,
  faClock,
  faUsers,
  faStar,
  faSchool,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14";

const CYCLES = [
  {
    icon: faSchool,
    level: "Primaire",
    range: "Classes de la SIL au CM2",
    desc: "Les fondations essentielles : lecture, écriture, calcul et découverte du monde, dans un cadre bilingue et bienveillant.",
    subjects: [
      "Français & Anglais",
      "Mathématiques",
      "Sciences d'observation",
      "Histoire-Géographie",
      "Éducation civique",
      "Arts plastiques",
    ],
  },
  {
    icon: faBookOpen,
    level: "Secondaire 1er cycle",
    range: "Classes de la 6ᵉ à la 3ᵉ",
    desc: "Consolidation des acquis et préparation au Brevet. Développement de l'autonomie et de l'esprit critique.",
    subjects: [
      "Français & Anglais",
      "Mathématiques",
      "Physique-Chimie",
      "SVT",
      "Histoire-Géographie",
      "Informatique",
    ],
  },
  {
    icon: faGraduationCap,
    level: "Secondaire 2nd cycle",
    range: "Classes de la 2ⁿᵈ à la Terminale",
    desc: "Spécialisation et préparation aux examens du Baccalauréat. Orientation vers les études supérieures.",
    subjects: [
      "Séries A, C & D",
      "Philosophie",
      "Mathématiques avancées",
      "Sciences physiques",
      "Économie",
      "Littérature",
    ],
  },
];

const SUBJECTS_HIGHLIGHT = [
  {
    icon: faLanguage,
    title: "Langues",
    desc: "Français, Anglais, et initiation à l'Espagnol et à l'Allemand.",
  },
  {
    icon: faCalculator,
    title: "Mathématiques",
    desc: "Programme exigeant avec préparation aux Olympiades nationales.",
  },
  {
    icon: faFlask,
    title: "Sciences",
    desc: "Physique, Chimie, SVT avec travaux pratiques en laboratoire.",
  },
  {
    icon: faLaptopCode,
    title: "Informatique",
    desc: "Bureautique, algorithmique et initiation à la programmation.",
  },
  {
    icon: faPalette,
    title: "Arts & Culture",
    desc: "Arts plastiques, musique et théâtre pour éveiller la créativité.",
  },
  {
    icon: faFutbol,
    title: "Sport",
    desc: "Football, basketball, athlétisme et natation pour la santé.",
  },
];

const ADVANTAGES = [
  "Programme officiel enrichi et bilingue",
  "Effectifs réduits (max. 30 élèves par classe)",
  "Suivi individuel et bulletins détaillés",
  "Préparation intensive aux examens",
  "Cours de soutien gratuits pour les élèves en difficulté",
  "Activités parascolaires et sorties pédagogiques",
];

const SCHEDULE = [
  { day: "Lundi - Vendredi", hours: "07h30 → 15h30", type: "Cours obligatoires" },
  { day: "Lundi - Jeudi", hours: "15h30 → 17h00", type: "Cours de soutien & clubs" },
  { day: "Samedi", hours: "08h00 → 12h00", type: "Activités parascolaires" },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function OffreAcademiquePage() {
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
              Notre offre académique
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Un enseignement <br />
              <span style={{ color: BAMBIS_GOLD }}>complet et bilingue</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Du primaire au secondaire, nous offrons un programme académique
              exigeant et équilibré, adapté à chaque étape du parcours de
              l&apos;élève.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CYCLES ================= */}
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
              Nos cycles d&apos;enseignement
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Trois niveaux, un même exigence
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {CYCLES.map((cycle) => (
              <div
                key={cycle.level}
                className="group relative overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                {/* Bandeau supérieur */}
                <div
                  className="relative p-8"
                  style={{
                    background: `linear-gradient(135deg, ${BAMBIS_GREEN}33, ${BAMBIS_GOLD}22)`,
                  }}
                >
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon icon={cycle.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {cycle.level}
                  </h3>
                  <p
                    className="mt-1 text-xs font-bold uppercase tracking-widest"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    {cycle.range}
                  </p>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <p className="mb-6 text-sm leading-relaxed text-gray-300">
                    {cycle.desc}
                  </p>

                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-widest"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    Matières principales
                  </p>
                  <ul className="space-y-2">
                    {cycle.subjects.map((subject) => (
                      <li
                        key={subject}
                        className="flex items-start gap-2 text-sm text-gray-200"
                      >
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="mt-1 shrink-0 text-xs"
                          style={{ color: BAMBIS_GOLD }}
                        />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MATIERES ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Disciplines enseignées
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Un éventail complet de matières
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUBJECTS_HIGHLIGHT.map((subject) => (
              <div
                key={subject.title}
                className="group flex items-start gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={subject.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-white">
                    {subject.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {subject.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AVANTAGES + EMPLOI DU TEMPS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Avantages */}
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Nos atouts
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Ce qui fait notre différence
            </h2>

            <ul className="space-y-4">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-xs"
                    />
                  </span>
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/admissions"
              className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              S&apos;inscrire
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Emploi du temps */}
          <div
            className="rounded-3xl border p-8 backdrop-blur-sm lg:p-10"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderColor: `${BAMBIS_GOLD}33`,
            }}
          >
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faClock} className="text-xl" />
            </div>

            <h3 className="mb-6 text-2xl font-bold text-white">
              Rythme scolaire
            </h3>

            <div className="space-y-4">
              {SCHEDULE.map((item, idx) => (
                <div
                  key={item.day}
                  className="rounded-2xl border p-5"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderColor: `${BAMBIS_GOLD}22`,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-bold text-white">{item.day}</p>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        backgroundColor: `${BAMBIS_GOLD}22`,
                        color: BAMBIS_GOLD,
                      }}
                    >
                      {item.hours}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{item.type}</p>
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
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-lg"
                  style={{ color: BAMBIS_GOLD }}
                />
                <p className="text-sm text-gray-100">
                  <strong className="text-white">Rentrée scolaire :</strong>{" "}
                  généralement début septembre. Calendrier communiqué en août.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BILINGUISME ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
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
                  <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white">
                  Bilinguisme <span style={{ color: BAMBIS_GOLD }}>authentique</span>
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Le bilinguisme français-anglais est au cœur de notre projet
                  éducatif. Nos élèves suivent des cours dans les deux langues
                  dès le primaire, avec des enseignants natifs et qualifiés.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl border p-4 text-center"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: `${BAMBIS_GOLD}22`,
                    }}
                  >
                    <p
                      className="text-3xl font-bold"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      🇫🇷
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Français
                    </p>
                    <p className="text-xs text-gray-400">Langue principale</p>
                  </div>
                  <div
                    className="rounded-2xl border p-4 text-center"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                      borderColor: `${BAMBIS_GOLD}22`,
                    }}
                  >
                    <p
                      className="text-3xl font-bold"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      🇬🇧
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">English</p>
                    <p className="text-xs text-gray-400">Second language</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: BAMBIS_GOLD }}
              >
                Notre engagement
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                Préparer nos élèves au monde de demain
              </h2>
              <p className="mb-6 leading-relaxed text-gray-300">
                Dans un monde globalisé, la maîtrise de plusieurs langues est
                un atout majeur. C&apos;est pourquoi nous mettons un point
                d&apos;honneur à offrir à nos élèves un environnement
                d&apos;apprentissage véritablement bilingue.
              </p>

              <ul className="space-y-3">
                {[
                  "Cours en français et en anglais",
                  "Enseignants natifs et qualifiés",
                  "Ateliers de conversation",
                  "Préparation aux certifications internationales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mt-1 shrink-0"
                      style={{ color: BAMBIS_GOLD }}
                    />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Intéressé par notre programme ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Consultez nos conditions d&apos;admission et rejoignez la famille
            Les Bambis dès la prochaine rentrée.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faUsers} />
              Voir les admissions
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