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
  faQuoteLeft,
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
    image: "/images/cards/excellence.jpg",
    imageAlt: "Élèves africains en classe, concentrés sur leurs cahiers",
    badge: "Académique",
    title: "Excellence Académique",
    desc: "Un enseignement rigoureux et des résultats scolaires remarquables, du primaire au secondaire. Nos enseignants mettent tout en œuvre pour que chaque élève atteigne son plein potentiel.",
  },
  {
    icon: faGlobe,
    image: "/images/cards/bilinguisme.jpg",
    imageAlt: "Élèves noirs participant à un cours de langues",
    badge: "Langues",
    title: "Bilinguisme Authentique",
    desc: "Français et anglais sont enseignés au quotidien afin de préparer nos élèves à évoluer avec aisance dans le monde de demain, au Cameroun comme à l'international.",
  },
  {
    icon: faHeart,
    image: "/images/cards/discipline.jpg",
    imageAlt: "Groupe d'élèves en uniforme dans la cour de l'école",
    badge: "Valeurs",
    title: "Discipline & Valeurs",
    desc: "Respect, travail et responsabilité : les piliers de la formation de chaque élève, pour construire des citoyens intègres et épanouis.",
  },
  {
    icon: faTrophy,
    image: "/images/cards/reussite.jpg",
    imageAlt: "Élève noir recevant un prix lors d'une remise de diplômes",
    badge: "Réussite",
    title: "Réussite Garantie",
    desc: "Un accompagnement personnalisé et un suivi de proximité pour garantir la réussite de chaque apprenant tout au long de son parcours.",
  },
];

const STATS = [
  { value: "20+", label: "Années d'expérience" },
  { value: "1500+", label: "Élèves formés" },
  { value: "98%", label: "Taux de réussite" },
  { value: "50+", label: "Enseignants qualifiés" },
];

/* Infos du directeur : à adapter */
const DIRECTOR = {
  name: "M. / Mme [Nom du Directeur]",
  role: "Directeur du Collège Les Bambis",
  photo: "/images/directeur.jpg",
};

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col">
        {/* ================= MOT DU DIRECTEUR ================= */}
        <section
          className="w-full py-20"
          style={{
            background: `linear-gradient(180deg, #143F26 0%, #0E2417 100%)`,
          }}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-3xl"
                style={{ border: `2px solid ${BAMBIS_GOLD}` }}
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={DIRECTOR.photo}
                  alt={`Photo de ${DIRECTOR.name}, directeur du Collège Les Bambis`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 p-5"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(11,31,20,0.95) 0%, rgba(11,31,20,0) 100%)",
                  }}
                >
                  <p className="text-lg font-bold text-white">
                    {DIRECTOR.name}
                  </p>
                  <p className="text-sm" style={{ color: BAMBIS_GOLD }}>
                    {DIRECTOR.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Texte à droite */}
            <div>
              <p
                className="mb-3 text-xs font-bold uppercase tracking-widest"
                style={{ color: BAMBIS_GOLD }}
              >
                Le mot du directeur
              </p>
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                Bienvenue au Collège Les Bambis
              </h2>

              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="mb-4 text-3xl"
                style={{ color: `${BAMBIS_GOLD}99` }}
              />

              <div className="space-y-4 text-justify leading-relaxed text-gray-200">
                <p>
                  Chers parents, chers élèves, chers partenaires, c&apos;est
                  avec une grande joie que je vous accueille sur le site du
                  Collège Les Bambis. Depuis plus de vingt ans, notre
                  établissement s&apos;engage à offrir à chaque enfant une
                  éducation de qualité, fondée sur le travail, la discipline et
                  la réussite.
                </p>
                <p>
                  Nous croyons que chaque élève porte en lui un potentiel
                  unique. Notre rôle est de le révéler grâce à une équipe
                  pédagogique dévouée, un enseignement bilingue rigoureux et un
                  encadrement bienveillant qui place l&apos;épanouissement de
                  l&apos;apprenant au cœur de nos priorités.
                </p>
                <p>
                  Je vous invite à découvrir notre collège et à rejoindre la
                  grande famille Les Bambis, afin de bâtir ensemble l&apos;avenir
                  de vos enfants.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-lg font-bold text-white">{DIRECTOR.name}</p>
                <p className="text-sm" style={{ color: BAMBIS_GOLD }}>
                  {DIRECTOR.role}
                </p>
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

        {/* ================= FEATURES (cards avec image) ================= */}
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
                <article
                  key={feature.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderColor: `${BAMBIS_GOLD}33`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Badge */}
                    <span
                      className="mb-4 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: BAMBIS_GOLD,
                        color: DARK_BG,
                      }}
                    >
                      <FontAwesomeIcon icon={feature.icon} />
                      {feature.badge}
                    </span>

                    {/* Titre */}
                    <h3 className="mb-3 text-lg font-bold text-white">
                      {feature.title}
                    </h3>

                    {/* Description justifiée */}
                    <p className="text-justify text-sm leading-relaxed text-gray-300">
                      {feature.desc}
                    </p>
                  </div>
                </article>
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
              <p className="mb-6 text-justify leading-relaxed text-gray-300">
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
              Les inscriptions pour la prochaine rentrée sont ouvertes.
              Contactez-nous dès aujourd&apos;hui pour visiter notre
              établissement.
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