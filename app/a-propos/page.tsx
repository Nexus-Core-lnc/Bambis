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
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD = "#F4B400";
const DARK_BG = "#0B1F14";

const CARD = {
  backgroundColor: "rgba(255, 255, 255, 0.04)",
  borderColor: `${BAMBIS_GOLD}33`,
} as const;

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

const MISSION_VISION = [
  {
    icon: faBullseye,
    title: "Notre Mission",
    desc: "Offrir à chaque élève une éducation de qualité qui développe ses connaissances, ses compétences et son caractère, dans un cadre bilingue et bienveillant, afin de le préparer à devenir un citoyen responsable et accompli.",
  },
  {
    icon: faEye,
    title: "Notre Vision",
    desc: "Être un établissement de référence, reconnu pour la qualité de son enseignement, son exigence académique et sa capacité à former des générations de jeunes compétents, bilingues et ouverts sur le monde.",
  },
];

const STATS = [
  { value: "98%", label: "Réussite" },
  { value: "1500+", label: "Élèves" },
  { value: "50+", label: "Enseignants" },
];

const GALLERY = [
  { src: "/apropos/galerie-1.jpg", alt: "Élèves en classe" },
  { src: "/apropos/galerie-2.jpg", alt: "Cour de récréation" },
  { src: "/apropos/galerie-3.jpg", alt: "Activité sportive" },
  { src: "/apropos/galerie-4.jpg", alt: "Salle informatique" },
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

export default function AProposPage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
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
              À Propos de nous
            </p>

            <h1
              className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              <span className="block">Travail.</span>
              <span className="block">Discipline.</span>
              <span className="block" style={{ color: BAMBIS_GOLD }}>
                Réussite.
              </span>
            </h1>

            <div
              className="mx-auto mt-6 h-1 w-24 rounded-full lg:mx-0"
              style={{ backgroundColor: BAMBIS_GOLD }}
            />

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-200 lg:mx-0 lg:text-lg">
              Depuis notre création, le Collège Privé Laïc Bilingue Les Bambis
              s&apos;engage à offrir une éducation d&apos;excellence, fondée sur le
              travail, la discipline et la réussite.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#histoire"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Découvrir notre histoire
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

          {/* ============ MEDAILLON ============ */}
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
            {/* Lueur */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />

            {/* Cercle pointillé */}
            <div
              className="absolute inset-[6%] rounded-full border border-dashed"
              style={{ borderColor: `${BAMBIS_GOLD}55` }}
            />

            {/* Anneau de texte qui tourne */}
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full animate-[spin_40s_linear_infinite]"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="bambis-ring"
                  d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
              </defs>
              <text
                fill={BAMBIS_GOLD}
                fontSize="10"
                fontWeight="700"
                letterSpacing="2"
              >
                <textPath
                  href="#bambis-ring"
                  textLength="498"
                  lengthAdjust="spacing"
                >
                  TRAVAIL • DISCIPLINE • RÉUSSITE • TRAVAIL • DISCIPLINE • RÉUSSITE •
                </textPath>
              </text>
            </svg>

            {/* Logo */}
            <div
              className="absolute inset-[20%] flex items-center justify-center rounded-full shadow-2xl"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: `0 0 60px ${BAMBIS_GOLD}55`,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo du Collège Les Bambis"
                width={200}
                height={200}
                priority
                className="h-[70%] w-[70%] object-contain"
              />
            </div>

            {/* Badges chiffres */}
            {[
              { ...STATS[0], pos: "-right-2 top-8 lg:-right-6" },
              { ...STATS[1], pos: "-left-4 top-1/2 -translate-y-1/2 lg:-left-10" },
              { ...STATS[2], pos: "bottom-6 right-0 lg:-right-4" },
            ].map((s) => (
              <div
                key={s.label}
                className={`absolute rounded-2xl border px-4 py-2.5 text-center shadow-xl backdrop-blur-md ${s.pos}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  borderColor: `${BAMBIS_GOLD}55`,
                }}
              >
                <p
                  className="text-xl font-bold leading-none lg:text-2xl"
                  style={{ color: BAMBIS_GOLD }}
                >
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] text-gray-200">{s.label}</p>
              </div>
            ))}
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Vidéo */}
            <div
              className="order-2 overflow-hidden rounded-3xl border shadow-2xl lg:order-1"
              style={{ borderColor: `${BAMBIS_GOLD}33` }}
            >
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/apropos/video-poster.jpg"
              >
                <source src="/apropos/presentation.webm" type="video/webm" />
                <source src="/apropos/presentation.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2">
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
                  Le{" "}
                  <strong className="text-white">
                    Collège Privé Laïc Bilingue Les Bambis
                  </strong>{" "}
                  est un établissement d&apos;enseignement qui accueille les
                  élèves du primaire et du secondaire dans un cadre
                  bienveillant, moderne et exigeant.
                </p>
                <p>
                  Notre projet éducatif repose sur trois piliers fondamentaux :{" "}
                  <span
                    style={{ color: BAMBIS_GOLD }}
                    className="font-semibold"
                  >
                    Travail, Discipline et Réussite
                  </span>
                  . Ces valeurs guident chacune de nos actions et forgent le
                  caractère de nos élèves.
                </p>
                <p>
                  Grâce à un corps enseignant qualifié et passionné, nous
                  accompagnons chaque enfant dans son développement
                  académique, personnel et citoyen, dans un environnement
                  bilingue français-anglais.
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
          </div>

          {/* Mot de la direction */}
          <div
            className="relative mt-16 overflow-hidden rounded-3xl border backdrop-blur-sm"
            style={CARD}
          >
            <div
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
              style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
            />
            <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-[220px_1fr] lg:p-12">
              <div
                className="relative mx-auto aspect-[4/5] w-48 overflow-hidden rounded-2xl border md:w-full"
                style={{ borderColor: `${BAMBIS_GOLD}55` }}
              >
                <Image
                  src="/apropos/direction.jpg"
                  alt="La Direction Générale du collège"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              <div className="text-center md:text-left">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="mb-6 text-4xl"
                  style={{ color: BAMBIS_GOLD }}
                />
                <p className="mb-6 text-lg font-medium italic leading-relaxed text-gray-100 lg:text-2xl">
                  « Former des jeunes compétents, responsables et bilingues,
                  capables de relever les défis du monde moderne. »
                </p>
                <p className="text-sm font-bold" style={{ color: BAMBIS_GOLD }}>
                  — La Direction Générale
                </p>
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
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <SectionHeader label="Nos fondations" title="Mission & Vision" />

          <div className="space-y-8">
            {MISSION_VISION.map((item, idx) => (
              <div
                key={item.title}
                className={`group flex flex-col items-start gap-6 rounded-3xl border p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 md:items-center lg:p-10 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                style={CARD}
              >
                <div
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-gray-300">{item.desc}</p>
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
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <SectionHeader label="Ce qui nous anime" title="Nos Valeurs" />

          <ul
            className="border-t"
            style={{ borderColor: `${BAMBIS_GOLD}33` }}
          >
            {VALUES.map((value, idx) => (
              <li
                key={value.title}
                className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-2 border-b py-8 transition-colors hover:bg-white/5 md:grid-cols-[70px_56px_180px_1fr] md:px-4"
                style={{ borderColor: `${BAMBIS_GOLD}33` }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: `${BAMBIS_GOLD}66` }}
                >
                  0{idx + 1}
                </span>
                <span
                  className="hidden h-14 w-14 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 md:flex"
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                >
                  <FontAwesomeIcon icon={value.icon} className="text-xl" />
                </span>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="col-span-2 text-sm leading-relaxed text-gray-300 md:col-span-1">
                  {value.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= PILIERS ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0E2417 0%, #10321E 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <SectionHeader
            label="Notre approche"
            title="Les piliers de notre pédagogie"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="relative flex items-start gap-5 overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                style={CARD}
              >
                <span
                  className="absolute right-4 top-2 text-6xl font-bold opacity-10"
                  style={{ color: BAMBIS_GOLD }}
                >
                  0{idx + 1}
                </span>
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-lg"
                  style={{ backgroundColor: BAMBIS_GREEN, color: "#ffffff" }}
                >
                  <FontAwesomeIcon icon={pillar.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photos */}
          <div className="mt-16">
            <p
              className="mb-6 text-center text-xs font-bold uppercase tracking-widest"
              style={{ color: BAMBIS_GOLD }}
            >
              La vie au collège
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {GALLERY.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border"
                  style={{ borderColor: `${BAMBIS_GOLD}33` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
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
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <SectionHeader
            label="Notre parcours"
            title="Une histoire en construction"
          />

          <div className="relative">
            {/* Ligne verticale (mobile) */}
            <div
              className="absolute left-4 top-0 h-full w-0.5 lg:hidden"
              style={{
                background: `linear-gradient(180deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />
            {/* Ligne horizontale (desktop) */}
            <div
              className="absolute left-0 right-0 top-4 hidden h-0.5 lg:block"
              style={{
                background: `linear-gradient(90deg, ${BAMBIS_GOLD}00, ${BAMBIS_GOLD}, ${BAMBIS_GOLD}00)`,
              }}
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
              {TIMELINE.map((item) => (
                <div key={item.title} className="relative pl-12 lg:pl-0 lg:pt-14">
                  {/* Point */}
                  <div
                    className="absolute left-4 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 lg:left-1/2"
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

                  <div
                    className="h-full rounded-2xl border p-6 backdrop-blur-sm lg:text-center"
                    style={CARD}
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center lg:flex-row lg:justify-between lg:px-12 lg:text-left">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Envie d&apos;en savoir plus ?
            </h2>
            <p className="text-lg text-gray-300">
              Venez visiter notre établissement et rencontrer notre équipe
              pédagogique. Nous serons ravis de vous accueillir.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
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