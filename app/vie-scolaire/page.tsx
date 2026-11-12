import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFutbol,
  faPalette,
  faMicrophone,
  faFlask,
  faLaptopCode,
  faBookOpen,
  faMusic,
  faTrophy,
  faCalendarDays,
  faHeart,
  faHandshake,
  faStar,
  faCheckCircle,
  faArrowRight,
  faArrowDown,
  faFaceSmile,
  faAward,
  faGraduationCap,
  faLeaf,
  faQuoteLeft,
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

/* Tuiles de la mosaïque du hero (le logo prend la place centrale) */
const HERO_TILES = [
  { icon: faFutbol, label: "Sport", color: "#EF4444" },
  { icon: faMicrophone, label: "Débat", color: "#8B5CF6" },
  { icon: faPalette, label: "Arts", color: "#EC4899" },
  { icon: faMusic, label: "Musique", color: "#F59E0B" },
  // ← logo ici
  { icon: faFlask, label: "Sciences", color: "#10B981" },
  { icon: faLaptopCode, label: "Code", color: "#3B82F6" },
  { icon: faTrophy, label: "Tournois", color: BAMBIS_GOLD },
  { icon: faHeart, label: "Solidarité", color: BAMBIS_GREEN },
];

/* Clubs et activités (span = largeur de la carte sur grand écran) */
const CLUBS = [
  {
    icon: faFutbol,
    title: "Club Sportif",
    desc: "Football, basketball, athlétisme, natation. Des compétitions inter-classes et inter-établissements toute l'année.",
    color: "#EF4444",
    span: "lg:col-span-2",
  },
  {
    icon: faMicrophone,
    title: "Club de Débat",
    desc: "Art oratoire, éloquence et débats bilingues pour développer la confiance en soi et l'esprit critique.",
    color: "#8B5CF6",
    span: "",
  },
  {
    icon: faPalette,
    title: "Club Artistique",
    desc: "Arts plastiques, peinture, sculpture et expositions pour éveiller la créativité de chaque élève.",
    color: "#EC4899",
    span: "",
  },
  {
    icon: faMusic,
    title: "Chorale & Musique",
    desc: "Chorale officielle du collège, apprentissage d'instruments et spectacles de fin d'année.",
    color: "#F59E0B",
    span: "lg:col-span-2",
  },
  {
    icon: faFlask,
    title: "Club Scientifique",
    desc: "Expériences pratiques, projets de recherche et participation aux Olympiades scientifiques.",
    color: "#10B981",
    span: "lg:col-span-2",
  },
  {
    icon: faLaptopCode,
    title: "Club Informatique",
    desc: "Programmation, robotique et création de projets numériques. Initiation au codage dès le primaire.",
    color: "#3B82F6",
    span: "",
  },
];

/* Événements annuels */
const EVENTS = [
  {
    icon: faCalendarDays,
    month: "Septembre",
    title: "Rentrée scolaire",
    desc: "Accueil des nouveaux élèves, présentation des équipes et remise des emplois du temps.",
  },
  {
    icon: faTrophy,
    month: "Décembre",
    title: "Tournoi inter-classes",
    desc: "Compétitions sportives et culturelles qui rassemblent tous les niveaux autour de valeurs communes.",
  },
  {
    icon: faStar,
    month: "Février",
    title: "Semaine culturelle",
    desc: "Expositions, spectacles, concours d'éloquence et célébration des langues et cultures.",
  },
  {
    icon: faFaceSmile,
    month: "Mai",
    title: "Journée portes ouvertes",
    desc: "Familles et futurs élèves découvrent l'établissement, ses clubs et ses projets.",
  },
  {
    icon: faAward,
    month: "Juin",
    title: "Remise des prix",
    desc: "Célébration des réussites académiques et des talents de chaque élève.",
  },
  {
    icon: faGraduationCap,
    month: "Juillet",
    title: "Cérémonie de fin d'année",
    desc: "Gala, spectacles et discours de fin d'année pour clôturer la saison scolaire.",
  },
];

/* Valeurs de la vie scolaire */
const VALUES = [
  {
    icon: faHeart,
    title: "Bienveillance",
    desc: "Un environnement où chaque élève se sent écouté, respecté et valorisé.",
  },
  {
    icon: faHandshake,
    title: "Entraide",
    desc: "Le tutorat entre élèves et la solidarité entre les classes sont encouragés.",
  },
  {
    icon: faLeaf,
    title: "Responsabilité",
    desc: "Éco-délégués, actions citoyennes et engagement pour l'environnement.",
  },
  {
    icon: faUsers,
    title: "Communauté",
    desc: "Une véritable famille scolaire qui rassemble élèves, parents et enseignants.",
  },
];

/* Installations */
const FACILITIES = [
  { icon: faBookOpen, label: "Bibliothèque multimédia" },
  { icon: faFlask, label: "Laboratoires de sciences" },
  { icon: faLaptopCode, label: "Salle informatique équipée" },
  { icon: faFutbol, label: "Terrain de sport & gymnase" },
  { icon: faPalette, label: "Atelier d'arts plastiques" },
  { icon: faMusic, label: "Salle de musique & chorale" },
];

const STATS = [
  { value: "20+", label: "Clubs" },
  { value: "15+", label: "Événements" },
  { value: "100%", label: "Engagement" },
];

/* ------------------------------------------------------------------ */
/*  Éléments réutilisables                                             */
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

function HeroTile({
  tile,
  gridIndex,
}: {
  tile: (typeof HERO_TILES)[number];
  gridIndex: number;
}) {
  return (
    <div
      className={`group flex aspect-square flex-col items-center justify-center gap-2 rounded-3xl border p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
        gridIndex % 3 === 1 ? "translate-y-6" : ""
      }`}
      style={{
        backgroundColor: `${tile.color}1f`,
        borderColor: `${tile.color}66`,
      }}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 lg:h-14 lg:w-14"
        style={{
          backgroundColor: tile.color,
          color: tile.color === BAMBIS_GOLD ? DARK_BG : "#ffffff",
        }}
      >
        <FontAwesomeIcon icon={tile.icon} className="text-xl" />
      </span>
      <span className="text-[11px] font-bold text-white lg:text-xs">
        {tile.label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function VieDuCollegePage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO : MOSAIQUE DE TALENTS ================= */}
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
              Vie du Collège
            </p>

            <h1
              className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Une vie scolaire{" "}
              <span className="block" style={{ color: BAMBIS_GOLD }}>
                riche et épanouissante
              </span>
            </h1>

            <div
              className="mx-auto mt-6 h-1 w-24 rounded-full lg:mx-0"
              style={{ backgroundColor: BAMBIS_GOLD }}
            />

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-0 lg:text-lg">
              Clubs, événements, sport et culture : au-delà des cours, nous
              offrons à chaque élève un environnement où il peut
              s&apos;épanouir et révéler ses talents.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#clubs"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Découvrir les clubs
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
                Nous rejoindre
              </Link>
            </div>
          </div>

          {/* ============ MOSAIQUE ============ */}
          <div className="relative mx-auto w-full max-w-md pb-8 pt-4">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />

            <div className="relative grid grid-cols-3 gap-4">
              {HERO_TILES.slice(0, 4).map((tile, i) => (
                <HeroTile key={tile.label} tile={tile} gridIndex={i} />
              ))}

              {/* Logo au centre */}
              <div
                className="flex aspect-square translate-y-6 items-center justify-center rounded-3xl"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: `0 0 50px ${BAMBIS_GOLD}66`,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo du Collège Les Bambis"
                  width={120}
                  height={120}
                  priority
                  className="h-[72%] w-[72%] object-contain"
                />
              </div>

              {HERO_TILES.slice(4).map((tile, i) => (
                <HeroTile key={tile.label} tile={tile} gridIndex={i + 5} />
              ))}
            </div>

            {/* Badges flottants */}
            <div
              className="absolute -right-2 -top-3 rounded-2xl border px-4 py-2.5 text-center shadow-xl backdrop-blur-md lg:-right-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: `${BAMBIS_GOLD}55`,
              }}
            >
              <p
                className="text-xl font-bold leading-none"
                style={{ color: BAMBIS_GOLD }}
              >
                20+
              </p>
              <p className="mt-1 text-[11px] text-gray-200">Clubs</p>
            </div>
            <div
              className="absolute -bottom-2 -left-2 rounded-2xl border px-4 py-2.5 text-center shadow-xl backdrop-blur-md lg:-left-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: `${BAMBIS_GOLD}55`,
              }}
            >
              <p
                className="text-xl font-bold leading-none"
                style={{ color: BAMBIS_GOLD }}
              >
                15+
              </p>
              <p className="mt-1 text-[11px] text-gray-200">Événements</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLUBS ================= */}
      <section
        id="clubs"
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeader
            label="Clubs & Activités"
            title="Découvrez nos clubs"
            subtitle="Plus de 20 activités pour tous les goûts et tous les talents"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CLUBS.map((club) => (
              <div
                key={club.title}
                className={`group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${club.span}`}
                style={CARD}
              >
                {/* Halo coloré */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-30 blur-3xl"
                  style={{ backgroundColor: club.color }}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: club.color, color: "#ffffff" }}
                  >
                    <FontAwesomeIcon icon={club.icon} className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {club.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {club.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENEMENTS : FRISE DE L'ANNEE ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <SectionHeader
            label="Temps forts"
            title="Les événements de l'année"
          />

          <div className="relative">
            {/* Ligne verticale */}
            <div
              className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
              style={{
                background: `linear-gradient(180deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />

            <div className="space-y-10">
              {EVENTS.map((event, idx) => (
                <div
                  key={event.title}
                  className={`relative flex flex-col items-start gap-4 md:items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Carte */}
                  <div className="ml-14 w-full md:ml-0 md:w-1/2 md:px-10">
                    <div
                      className="rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                      style={CARD}
                    >
                      <p
                        className="mb-1 text-xs font-bold uppercase tracking-widest md:hidden"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        {event.month}
                      </p>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {event.desc}
                      </p>
                    </div>
                  </div>

                  {/* Point avec icône */}
                  <div
                    className="absolute left-4 top-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 shadow-lg md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                    style={{
                      backgroundColor: BAMBIS_GOLD,
                      color: DARK_BG,
                      borderColor: DARK_BG,
                    }}
                  >
                    <FontAwesomeIcon icon={event.icon} className="text-xs" />
                  </div>

                  {/* Mois (côté opposé, desktop) */}
                  <div
                    className={`hidden md:block md:w-1/2 md:px-10 ${
                      idx % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <p
                      className="text-3xl font-extrabold uppercase tracking-wide lg:text-4xl"
                      style={{ color: `${BAMBIS_GOLD}66` }}
                    >
                      {event.month}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALEURS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeader
            label="Notre esprit"
            title="Les valeurs qui nous animent"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:pb-10">
            {VALUES.map((value, idx) => (
              <div
                key={value.title}
                className={`group rounded-2xl border p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
                  idx % 2 === 1 ? "lg:translate-y-10" : ""
                }`}
                style={CARD}
              >
                <div
                  className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={value.icon} className="text-2xl" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTALLATIONS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Nos infrastructures
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Un cadre moderne et adapté
            </h2>
            <p className="leading-relaxed text-gray-300">
              Le Collège Les Bambis dispose d&apos;infrastructures modernes
              conçues pour favoriser l&apos;apprentissage, la créativité et
              l&apos;épanouissement de chaque élève.
            </p>
          </div>

          {/* Tuiles installations */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {FACILITIES.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                style={CARD}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${BAMBIS_GOLD}1a`,
                    color: BAMBIS_GOLD,
                    border: `1px solid ${BAMBIS_GOLD}44`,
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-lg" />
                </span>
                <span className="text-sm font-semibold text-gray-200">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Témoignage + chiffres */}
          <div
            className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm lg:p-12"
            style={CARD}
          >
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="mb-5 text-4xl"
                  style={{ color: BAMBIS_GOLD }}
                />
                <p className="mb-6 text-lg font-medium italic leading-relaxed text-gray-100 lg:text-xl">
                  « Ce que je préfère au collège, c&apos;est la diversité des
                  clubs. J&apos;ai pu découvrir la robotique, le théâtre et
                  même participer à un tournoi de basketball ! »
                </p>
                <p className="text-sm font-bold" style={{ color: BAMBIS_GOLD }}>
                  — Un élève de 3ᵉ
                </p>
              </div>

              <div
                className="grid grid-cols-3 gap-4 border-t pt-8 text-center lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-left"
                style={{ borderColor: `${BAMBIS_GOLD}33` }}
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-3xl font-bold lg:text-4xl"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-gray-300">{s.label}</p>
                  </div>
                ))}
              </div>
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left">
          <div className="max-w-2xl">
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg lg:mx-0"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faUsers} className="text-2xl" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Envie de rejoindre notre communauté ?
            </h2>
            <p className="text-lg text-gray-300">
              Découvrez notre procédure d&apos;admission et venez visiter notre
              établissement lors de nos journées portes ouvertes.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faCheckCircle} />
              S&apos;inscrire
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/offre-academique"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Voir l&apos;offre académique
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}