import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBookOpen,
  faUsers,
  faTrophy,
  faArrowRight,
  faCheckCircle,
  faGlobe,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14"; // Vert forêt très sombre

const FEATURES = [
  {
    icon: faGraduationCap,
    title: "Excellence Académique",
    desc: "Un enseignement rigoureux et des résultats scolaires remarquables, du primaire au secondaire.",
  },
  {
    icon: faGlobe,
    title: "Bilinguisme Authentique",
    desc: "Français et anglais enseignés au quotidien pour préparer nos élèves au monde de demain.",
  },
  {
    icon: faHeart,
    title: "Discipline & Valeurs",
    desc: "Respect, travail et responsabilité : les piliers de la formation de chaque élève.",
  },
  {
    icon: faTrophy,
    title: "Réussite Garantie",
    desc: "Un accompagnement personnalisé pour garantir la réussite de chaque apprenant.",
  },
];

const STATS = [
  { value: "20+", label: "Années d'expérience" },
  { value: "1500+", label: "Élèves formés" },
  { value: "98%", label: "Taux de réussite" },
  { value: "50+", label: "Enseignants qualifiés" },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>

    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[85vh] w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${DARK_BG} 0%, #10321E 45%, #143F26 100%)`,
        }}
      >
        {/* Effet lumineux décoratif */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GREEN}44` }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-20 text-center lg:flex-row lg:gap-16 lg:px-12 lg:text-left">
          {/* Logo */}
          <div className="shrink-0">
            <div
              className="flex h-48 w-48 items-center justify-center rounded-full shadow-2xl lg:h-64 lg:w-64"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: `0 0 60px ${BAMBIS_GOLD}55`,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo du Collège Les Bambis"
                width={220}
                height={220}
                priority
                className="h-40 w-40 object-contain lg:h-56 lg:w-56"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="max-w-2xl">
            <p
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${BAMBIS_GOLD}22`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}55`,
              }}
            >
              ★ Établissement Privé Laïc Bilingue
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-6xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Collège{" "}
              <span style={{ color: BAMBIS_GOLD }}>Les Bambis</span>
            </h1>

            <p
              className="mt-4 text-lg font-semibold lg:text-xl"
              style={{ color: "#A7F3D0" }}
            >
              Travail • Discipline • Réussite
            </p>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Un établissement d&apos;excellence où chaque élève est
              accompagné vers la réussite, dans un environnement bilingue,
              bienveillant et exigeant.
            </p>

            {/* Boutons CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Inscrire mon enfant
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Découvrir le collège
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        className="w-full py-16"
        style={{
          background: `linear-gradient(180deg, #0A1A10 0%, #0E2417 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-4xl font-bold lg:text-5xl"
                style={{ color: BAMBIS_GOLD }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-300 lg:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
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
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Une éducation d&apos;exception
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  borderColor: `${BAMBIS_GOLD}33`,
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: BAMBIS_GOLD,
                    color: DARK_BG,
                  }}
                >
                  <FontAwesomeIcon icon={feature.icon} className="text-xl" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VALUES / ABOUT ================= */}
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
              Notre mission
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Former les leaders de demain
            </h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              Au Collège Les Bambis, nous croyons que chaque enfant possède un
              potentiel unique. Notre mission est de le révéler à travers un
              enseignement de qualité, un encadrement bienveillant et des
              valeurs solides.
            </p>

            <ul className="space-y-3">
              {[
                "Programme officiel enrichi et bilingue",
                "Encadrement personnalisé de chaque élève",
                "Activités extrascolaires variées",
                "Environnement sûr et bienveillant",
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

            <Link
              href="/a-propos"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold transition-colors"
              style={{ color: BAMBIS_GOLD }}
            >
              En savoir plus sur nous
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Carte visuelle droite */}
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
                icon={faStar}
                className="mb-6 text-4xl"
                style={{ color: BAMBIS_GOLD }}
              />
              <p className="mb-6 text-lg font-medium italic leading-relaxed text-gray-100 lg:text-xl">
                « L&apos;éducation est l&apos;arme la plus puissante pour
                changer le monde. »
              </p>
              <p className="text-sm font-bold" style={{ color: BAMBIS_GOLD }}>
                — Nelson Mandela
              </p>

              <div
                className="my-8 h-px w-full"
                style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
              />

              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: BAMBIS_GREEN, color: "#ffffff" }}
                >
                  <FontAwesomeIcon icon={faBookOpen} className="text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white">Rejoignez-nous</p>
                  <p className="text-sm text-gray-300">
                    Les inscriptions sont ouvertes
                  </p>
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
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Prêt à rejoindre la famille{" "}
            <span style={{ color: BAMBIS_GOLD }}>Les Bambis</span> ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Les inscriptions pour la prochaine rentrée sont ouvertes. Contactez-nous
            dès aujourd&apos;hui pour visiter notre établissement.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faUsers} />
              S&apos;inscrire maintenant
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/portail-parents"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Portail Parents
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
  );
}