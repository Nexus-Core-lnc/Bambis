import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBullseye,
  faEye,
  faHeart,
  faHandshake,
  faLightbulb,
  faShieldHalved,
  faUsers,
  faBookOpen,
  faTrophy,
  faCheckCircle,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14";

const VALUES = [
  {
    icon: faHeart,
    title: "Respect",
    desc: "Le respect de soi, des autres et de l'environnement est au cœur de notre projet éducatif.",
  },
  {
    icon: faHandshake,
    title: "Solidarité",
    desc: "Nous cultivons l'entraide et la coopération entre élèves, enseignants et familles.",
  },
  {
    icon: faLightbulb,
    title: "Curiosité",
    desc: "Nous encourageons l'esprit critique, la créativité et le goût d'apprendre.",
  },
  {
    icon: faShieldHalved,
    title: "Discipline",
    desc: "La rigueur et l'assiduité sont les fondations de la réussite académique.",
  },
];

const PILLARS = [
  {
    icon: faGraduationCap,
    title: "Excellence",
    desc: "Un niveau d'exigence élevé pour tirer le meilleur de chaque élève.",
  },
  {
    icon: faBookOpen,
    title: "Bilinguisme",
    desc: "Un enseignement en français et en anglais dès les premières classes.",
  },
  {
    icon: faUsers,
    title: "Encadrement",
    desc: "Des effectifs réduits et un suivi personnalisé de chaque apprenant.",
  },
  {
    icon: faTrophy,
    title: "Réussite",
    desc: "Un accompagnement vers l'excellence et l'insertion dans les meilleures écoles.",
  },
];

const TIMELINE = [
  {
    year: "Création",
    title: "Naissance du collège",
    desc: "Ouverture de l'établissement avec les premières classes du primaire.",
  },
  {
    year: "Expansion",
    title: "Ouverture du secondaire",
    desc: "Extension vers les classes du secondaire pour accompagner nos élèves plus loin.",
  },
  {
    year: "Aujourd'hui",
    title: "Un établissement de référence",
    desc: "Plus de 1500 élèves formés et un taux de réussite de 98% aux examens.",
  },
  {
    year: "Demain",
    title: "Toujours plus loin",
    desc: "Modernisation continue des infrastructures et des méthodes pédagogiques.",
  },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function AProposPage() {
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
              À Propos de nous
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Notre histoire, <br />
              <span style={{ color: BAMBIS_GOLD }}>notre engagement</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Depuis notre création, le Collège Privé Laïc Bilingue Les Bambis
              s&apos;engage à offrir une éducation d&apos;excellence, fondée sur
              le travail, la discipline et la réussite.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PRESENTATION ================= */}
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
              Qui sommes-nous ?
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Un établissement tourné vers l&apos;avenir
            </h2>
            <div className="space-y-5 leading-relaxed text-gray-300">
              <p>
                Le <strong className="text-white">Collège Privé Laïc Bilingue Les Bambis</strong>{" "}
                est un établissement d&apos;enseignement qui accueille les
                élèves du primaire et du secondaire dans un cadre
                bienveillant, moderne et exigeant.
              </p>
              <p>
                Notre projet éducatif repose sur trois piliers fondamentaux :{" "}
                <span style={{ color: BAMBIS_GOLD }} className="font-semibold">
                  Travail, Discipline et Réussite
                </span>
                . Ces valeurs guident chacune de nos actions et forgent le
                caractère de nos élèves.
              </p>
              <p>
                Grâce à un corps enseignant qualifié et passionné, nous
                accompagnons chaque enfant dans son développement académique,
                personnel et citoyen, dans un environnement bilingue
                français-anglais.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Nous rejoindre
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/offre-academique"
                className="inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Notre offre
              </Link>
            </div>
          </div>

          {/* Carte citation */}
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
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="mb-6 text-4xl"
                style={{ color: BAMBIS_GOLD }}
              />
              <p className="mb-6 text-lg font-medium italic leading-relaxed text-gray-100 lg:text-xl">
                « Former des jeunes compétents, responsables et bilingues,
                capables de relever les défis du monde moderne. »
              </p>
              <p className="text-sm font-bold" style={{ color: BAMBIS_GOLD }}>
                — La Direction Générale
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
                    98%
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Réussite</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold lg:text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    1500+
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Élèves</p>
                </div>
                <div>
                  <p
                    className="text-2xl font-bold lg:text-3xl"
                    style={{ color: BAMBIS_GOLD }}
                  >
                    50+
                  </p>
                  <p className="mt-1 text-xs text-gray-300">Enseignants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
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
              Nos fondations
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <div
              className="group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 lg:p-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderColor: `${BAMBIS_GOLD}33`,
              }}
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                <FontAwesomeIcon icon={faBullseye} className="text-2xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Notre Mission
              </h3>
              <p className="leading-relaxed text-gray-300">
                Offrir à chaque élève une éducation de qualité qui développe
                ses connaissances, ses compétences et son caractère, dans un
                cadre bilingue et bienveillant, afin de le préparer à devenir
                un citoyen responsable et accompli.
              </p>
            </div>

            {/* Vision */}
            <div
              className="group relative overflow-hidden rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 lg:p-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                borderColor: `${BAMBIS_GOLD}33`,
              }}
            >
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                <FontAwesomeIcon icon={faEye} className="text-2xl" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Notre Vision
              </h3>
              <p className="leading-relaxed text-gray-300">
                Être un établissement de référence, reconnu pour la qualité de
                son enseignement, son exigence académique et sa capacité à
                former des générations de jeunes compétents, bilingues et
                ouverts sur le monde.
              </p>
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
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Ce qui nous anime
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={value.icon} className="text-xl" />
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

      {/* ================= PILIERS ================= */}
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
              Notre approche
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Les piliers de notre pédagogie
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
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
                  0{idx + 1}
                </span>
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg"
                  style={{ backgroundColor: BAMBIS_GREEN, color: "#ffffff" }}
                >
                  <FontAwesomeIcon icon={pillar.icon} className="text-xl" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="mb-14 text-center">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              Notre parcours
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Une histoire en construction
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div
              className="absolute left-4 top-0 h-full w-0.5 md:left-1/2 md:-translate-x-1/2"
              style={{
                background: `linear-gradient(180deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />

            <div className="space-y-10">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.title}
                  className={`relative flex flex-col items-start gap-4 md:flex-row md:items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Contenu */}
                  <div className="ml-12 w-full md:ml-0 md:w-1/2 md:px-8">
                    <div
                      className="rounded-2xl border p-6 backdrop-blur-sm"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        borderColor: `${BAMBIS_GOLD}33`,
                      }}
                    >
                      <p
                        className="mb-2 text-xs font-bold uppercase tracking-widest"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        {item.year}
                      </p>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Point */}
                  <div
                    className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 md:left-1/2"
                    style={{
                      backgroundColor: BAMBIS_GOLD,
                      borderColor: DARK_BG,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-xs"
                      style={{ color: DARK_BG }}
                    />
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
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
            Envie d&apos;en savoir plus ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Venez visiter notre établissement et rencontrer notre équipe
            pédagogique. Nous serons ravis de vous accueillir.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              Nous contacter
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
              Voir notre offre
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}