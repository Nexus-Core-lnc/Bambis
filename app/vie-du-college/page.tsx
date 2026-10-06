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
  faCamera,
  faTrophy,
  faCalendarDays,
  faHeart,
  faHandshake,
  faStar,
  faCheckCircle,
  faArrowRight,
  faFaceSmile,
  faChalkboardUser,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14";

/* Clubs et activités */
const CLUBS = [
  {
    icon: faFutbol,
    title: "Club Sportif",
    desc: "Football, basketball, athlétisme, natation. Des compétitions inter-classes et inter-établissements toute l'année.",
    color: "#EF4444",
  },
  {
    icon: faMicrophone,
    title: "Club de Débat",
    desc: "Art oratoire, éloquence et débats bilingues pour développer la confiance en soi et l'esprit critique.",
    color: "#8B5CF6",
  },
  {
    icon: faPalette,
    title: "Club Artistique",
    desc: "Arts plastiques, peinture, sculpture et expositions pour éveiller la créativité de chaque élève.",
    color: "#EC4899",
  },
  {
    icon: faMusic,
    title: "Chorale & Musique",
    desc: "Chorale officielle du collège, apprentissage d'instruments et spectacles de fin d'année.",
    color: "#F59E0B",
  },
  {
    icon: faFlask,
    title: "Club Scientifique",
    desc: "Expériences pratiques, projets de recherche et participation aux Olympiades scientifiques.",
    color: "#10B981",
  },
  {
    icon: faLaptopCode,
    title: "Club Informatique",
    desc: "Programmation, robotique et création de projets numériques. Initiation au codage dès le primaire.",
    color: "#3B82F6",
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
    icon: faChalkboardUser,
    month: "Juin",
    title: "Remise des prix",
    desc: "Célébration des réussites académiques et des talents de chaque élève.",
  },
  {
    icon: faChalkboardUser,
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

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function VieDuCollegePage() {
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
              Vie du Collège
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Une vie scolaire <br />
              <span style={{ color: BAMBIS_GOLD }}>riche et épanouissante</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Clubs, événements, sport et culture : au-delà des cours, nous
              offrons à chaque élève un environnement où il peut s&apos;épanouir
              et révéler ses talents.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLUBS ================= */}
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
              Clubs & Activités
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Découvrez nos clubs
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Plus de 20 activités pour tous les goûts et tous les talents
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CLUBS.map((club) => (
              <div
                key={club.title}
                className="group relative overflow-hidden rounded-3xl border p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                {/* Halo coloré */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: club.color }}
                />

                <div className="relative">
                  <div
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: club.color, color: "#ffffff" }}
                  >
                    <FontAwesomeIcon icon={club.icon} className="text-2xl" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {club.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {club.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENEMENTS ================= */}
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
              Temps forts
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Les événements de l&apos;année
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event) => (
              <div
                key={event.title}
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
                  <FontAwesomeIcon icon={event.icon} className="text-xl" />
                </div>
                <div>
                  <p
                    className="mb-1 text-xs font-bold uppercase tracking-widest"
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
            ))}
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Notre esprit
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Les valeurs qui nous animent
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Nos infrastructures
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Un cadre moderne et adapté
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300">
              Le Collège Les Bambis dispose d&apos;infrastructures modernes
              conçues pour favoriser l&apos;apprentissage, la créativité et
              l&apos;épanouissement de chaque élève.
            </p>

            <ul className="space-y-4">
              {FACILITIES.map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${BAMBIS_GOLD}1a`,
                      color: BAMBIS_GOLD,
                      border: `1px solid ${BAMBIS_GOLD}44`,
                    }}
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  </span>
                  <span className="text-gray-200">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte témoignage */}
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
                <FontAwesomeIcon icon={faCamera} className="text-2xl" />
              </div>
              <p className="mb-6 text-lg font-medium italic leading-relaxed text-gray-100 lg:text-xl">
                « Ce que je préfère au collège, c&apos;est la diversité des
                clubs. J&apos;ai pu découvrir la robotique, le théâtre et
                même participer à un tournoi de basketball ! »
              </p>
              <p className="text-sm font-bold" style={{ color: BAMBIS_GOLD }}>
                — Un élève de 3ᵉ
              </p>

              <div
                className="my-8 h-px w-full"
                style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
              />

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p
                    className="text-2xl font-bold lg:text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    20+
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Clubs</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold lg:text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    15+
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Événements</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold lg:text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    100%
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Engagement</p>
                </div>
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
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
            style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
          >
            <FontAwesomeIcon icon={faUsers} className="text-2xl" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Envie de rejoindre notre communauté ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Découvrez notre procédure d&apos;admission et venez visiter notre
            établissement lors de nos journées portes ouvertes.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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