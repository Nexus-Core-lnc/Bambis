import Link from "next/link";
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
  faArrowDown,
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

const CARD = {
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  borderColor: `${BAMBIS_GOLD}33`,
} as const;

const HERO_STEPS = [
  {
    icon: faSchool,
    label: "Primaire",
    range: "SIL → CM2",
    height: "h-[11rem] lg:h-[14rem]",
  },
  {
    icon: faBookOpen,
    label: "1er cycle",
    range: "6ᵉ → 3ᵉ",
    height: "h-[15rem] lg:h-[19rem]",
  },
  {
    icon: faGraduationCap,
    label: "2nd cycle",
    range: "2ⁿᵈ → Tle",
    height: "h-[19rem] lg:h-[24rem]",
  },
];

const HERO_FACTS = [
  { icon: faUsers, text: "30 élèves max. par classe" },
  { icon: faLanguage, text: "Français • English" },
  { icon: faGraduationCap, text: "Préparation aux examens" },
];

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
    span: "lg:col-span-2",
  },
  {
    icon: faCalculator,
    title: "Mathématiques",
    desc: "Programme exigeant avec préparation aux Olympiades nationales.",
    span: "",
  },
  {
    icon: faFlask,
    title: "Sciences",
    desc: "Physique, Chimie, SVT avec travaux pratiques en laboratoire.",
    span: "",
  },
  {
    icon: faLaptopCode,
    title: "Informatique",
    desc: "Bureautique, algorithmique et initiation à la programmation.",
    span: "lg:col-span-2",
  },
  {
    icon: faPalette,
    title: "Arts & Culture",
    desc: "Arts plastiques, musique et théâtre pour éveiller la créativité.",
    span: "lg:col-span-2",
  },
  {
    icon: faFutbol,
    title: "Sport",
    desc: "Football, basketball, athlétisme et natation pour la santé.",
    span: "",
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

const BILINGUAL_POINTS = [
  "Cours en français et en anglais",
  "Enseignants natifs et qualifiés",
  "Ateliers de conversation",
  "Préparation aux certifications internationales",
];

/* ------------------------------------------------------------------ */
/*  En-tête de section                                                 */
/* ------------------------------------------------------------------ */

function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: React.ReactNode;
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function OffreAcademiquePage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO : L'ESCALIER ================= */}
      <section
        className="relative flex min-h-[80vh] w-full items-center overflow-hidden"
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
              Notre offre académique
            </p>

            <h1
              className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              De la SIL à la Terminale,{" "}
              <span className="block" style={{ color: BAMBIS_GOLD }}>
                un parcours d&apos;excellence
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-0 lg:text-lg">
              Du primaire au secondaire, nous offrons un programme académique
              exigeant et équilibré, adapté à chaque étape du parcours de
              l&apos;élève.
            </p>

            {/* Atouts rapides */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {HERO_FACTS.map((fact) => (
                <span
                  key={fact.text}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold text-gray-100 backdrop-blur-sm"
                  style={CARD}
                >
                  <FontAwesomeIcon
                    icon={fact.icon}
                    style={{ color: BAMBIS_GOLD }}
                  />
                  {fact.text}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#cycles"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Découvrir les cycles
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                S&apos;inscrire
              </Link>
            </div>
          </div>

          {/* ============ ESCALIER ============ */}
          <div className="mx-auto w-full max-w-lg">
            <div className="flex items-end gap-3">
              {HERO_STEPS.map((step, idx) => (
                <div
                  key={step.label}
                  className={`group relative flex-1 overflow-hidden rounded-t-3xl border border-b-0 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 lg:p-5 ${step.height}`}
                  style={CARD}
                >
                  {/* Liseré doré */}
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ backgroundColor: BAMBIS_GOLD }}
                  />
                  {/* Numéro */}
                  <span
                    className="absolute bottom-2 right-3 text-6xl font-extrabold opacity-10 lg:text-7xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    {idx + 1}
                  </span>

                  <div
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 lg:h-12 lg:w-12"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon icon={step.icon} className="text-lg" />
                  </div>
                  <p className="text-sm font-bold text-white lg:text-base">
                    {step.label}
                  </p>
                  <p
                    className="mt-1 text-[11px] font-bold uppercase tracking-wider lg:text-xs"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    {step.range}
                  </p>
                </div>
              ))}
            </div>
            {/* Sol de l'escalier */}
            <div
              className="h-1 w-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-300">
              Jusqu&apos;au Baccalauréat
            </p>
          </div>
        </div>
      </section>

      {/* ================= CYCLES ================= */}
      <section
        id="cycles"
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <SectionHeader
            label="Nos cycles d'enseignement"
            title="Trois niveaux, une même exigence"
          />

          <div className="space-y-8">
            {CYCLES.map((cycle, idx) => (
              <div
                key={cycle.level}
                className="group grid overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 lg:grid-cols-[340px_1fr]"
                style={CARD}
              >
                {/* Bandeau */}
                <div
                  className="relative flex flex-col justify-center p-8"
                  style={{
                    background: `linear-gradient(135deg, ${BAMBIS_GREEN}33, ${BAMBIS_GOLD}22)`,
                  }}
                >
                  <span
                    className="absolute right-4 top-2 text-6xl font-extrabold opacity-10"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    0{idx + 1}
                  </span>
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
                <div className="p-8 lg:p-10">
                  <p className="mb-6 leading-relaxed text-gray-300">
                    {cycle.desc}
                  </p>

                  <p
                    className="mb-3 text-xs font-bold uppercase tracking-widest"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    Matières principales
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
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
          <SectionHeader
            label="Disciplines enseignées"
            title="Un éventail complet de matières"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SUBJECTS_HIGHLIGHT.map((subject) => (
              <div
                key={subject.title}
                className={`group flex items-start gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 lg:p-8 ${subject.span}`}
                style={CARD}
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

      {/* ================= RYTHME + ATOUTS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:px-12">
          {/* Rythme scolaire */}
          <div
            className="rounded-3xl border p-8 backdrop-blur-sm lg:p-10"
            style={CARD}
          >
            <div className="mb-6 flex items-center gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-lg"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                <FontAwesomeIcon icon={faClock} className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Rythme scolaire</h3>
            </div>

            <div className="space-y-4">
              {SCHEDULE.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    borderColor: `${BAMBIS_GOLD}22`,
                  }}
                >
                  <div>
                    <p className="font-bold text-white">{item.day}</p>
                    <p className="mt-1 text-sm text-gray-300">{item.type}</p>
                  </div>
                  <span
                    className="shrink-0 self-start rounded-full px-4 py-1.5 text-sm font-bold sm:self-auto"
                    style={{
                      backgroundColor: `${BAMBIS_GOLD}22`,
                      color: BAMBIS_GOLD,
                    }}
                  >
                    {item.hours}
                  </span>
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

          {/* Atouts */}
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Nos atouts
            </p>
            <h2 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
              Ce qui fait notre différence
            </h2>

            <ul className="space-y-4">
              {ADVANTAGES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border p-4 backdrop-blur-sm"
                  style={CARD}
                >
                  <span
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
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
        </div>
      </section>

      {/* ================= BILINGUISME ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Bilinguisme authentique
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Préparer nos élèves au monde de demain
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              Le bilinguisme français-anglais est au cœur de notre projet
              éducatif. Nos élèves suivent des cours dans les deux langues dès
              le primaire, avec des enseignants natifs et qualifiés.
            </p>
            <p className="leading-relaxed text-gray-300">
              Dans un monde globalisé, la maîtrise de plusieurs langues est un
              atout majeur. C&apos;est pourquoi nous mettons un point
              d&apos;honneur à offrir à nos élèves un environnement
              d&apos;apprentissage véritablement bilingue.
            </p>
          </div>

          {/* FR ⇄ EN */}
          <div className="mb-12 grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div
              className="rounded-3xl border p-8 text-center backdrop-blur-sm"
              style={CARD}
            >
              <span
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold shadow-lg"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                FR
              </span>
              <p className="text-xl font-bold text-white">Français</p>
              <p className="mt-1 text-sm text-gray-400">Langue principale</p>
            </div>

            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
              style={{
                backgroundColor: BAMBIS_GREEN,
                color: "#ffffff",
                boxShadow: `0 0 40px ${BAMBIS_GOLD}33`,
              }}
            >
              <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
            </div>

            <div
              className="rounded-3xl border p-8 text-center backdrop-blur-sm"
              style={CARD}
            >
              <span
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold shadow-lg"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                EN
              </span>
              <p className="text-xl font-bold text-white">English</p>
              <p className="mt-1 text-sm text-gray-400">Second language</p>
            </div>
          </div>

          {/* Points clés */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {BILINGUAL_POINTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border p-5 backdrop-blur-sm"
                style={CARD}
              >
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
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(135deg, #0B1F14 0%, #143F26 100%)`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-3xl border p-10 text-center backdrop-blur-sm lg:p-14"
            style={CARD}
          >
            <div
              className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Intéressé par notre programme ?
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Consultez nos conditions d&apos;admission et rejoignez la
                famille Les Bambis dès la prochaine rentrée.
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
          </div>
        </div>
      </section>
    </main>
  );
}