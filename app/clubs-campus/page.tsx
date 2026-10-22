import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faArrowRight,
  faCheckCircle,
  faCamera,
  faBookOpen,
  faFlask,
  faLaptopCode,
  faFutbol,
  faPalette,
  faMusic,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { CLUBS_DATA } from "./data";
import ClubsSlider from "./ClubsSlider";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD = "#F4B400";
const DARK_BG = "#0B1F14";

/* Galerie photos du campus — remplacer par les vraies photos */
const CAMPUS_PHOTOS = [
  {
    src: "/images/campus/cour-principale.jpg",
    alt: "Cour principale et bâtiments du campus",
    label: "Cour principale",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/campus/bibliotheque.jpg",
    alt: "Bibliothèque multimédia",
    label: "Bibliothèque",
    className: "",
  },
  {
    src: "/images/campus/laboratoire.jpg",
    alt: "Laboratoire de sciences",
    label: "Laboratoires",
    className: "",
  },
  {
    src: "/images/campus/salle-informatique.jpg",
    alt: "Salle informatique équipée",
    label: "Salle informatique",
    className: "",
  },
  {
    src: "/images/campus/terrain-sport.jpg",
    alt: "Terrain de sport et gymnase",
    label: "Terrain de sport",
    className: "",
  },
];

/* Infrastructures clés */
const INFRASTRUCTURES = [
  { icon: faBookOpen, label: "Bibliothèque multimédia" },
  { icon: faFlask, label: "Laboratoires de sciences" },
  { icon: faLaptopCode, label: "Salle informatique & robotique" },
  { icon: faFutbol, label: "Terrain de sport & gymnase" },
  { icon: faPalette, label: "Atelier d'arts plastiques" },
  { icon: faMusic, label: "Salle de musique & chorale" },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function ClubsCampusPage() {
  return (
    <main className="flex flex-col">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[85vh] w-full overflow-hidden"
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

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-24">
          {/* GAUCHE */}
          <div className="lg:col-span-6">
            <p
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${BAMBIS_GOLD}22`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}55`,
              }}
            >
              Clubs &amp; Campus
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Des talents révélés, <br />
              <span style={{ color: BAMBIS_GOLD }}>
                un cadre d&apos;exception
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-200 lg:text-lg">
              Golf, Mendjan &amp; danse traditionnelle, informatique &amp;
              robotique, entrepreneuriat : nos clubs offrent à chaque élève
              un espace pour s&apos;exprimer et grandir, dans un campus
              moderne et accueillant.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#clubs"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
              >
                Explorer les clubs
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                style={{ borderColor: "#ffffff", color: "#ffffff" }}
              >
                Nous rejoindre
              </Link>
            </div>

            <div
              className="mt-10 grid grid-cols-3 gap-4 border-t pt-6"
              style={{ borderColor: `${BAMBIS_GOLD}33` }}
            >
              <div>
                <p
                  className="text-2xl font-bold lg:text-3xl"
                  style={{ color: BAMBIS_GOLD }}
                >
                  4
                </p>
                <p className="text-xs text-gray-400">clubs phares</p>
              </div>
              <div>
                <p
                  className="text-2xl font-bold lg:text-3xl"
                  style={{ color: BAMBIS_GOLD }}
                >
                  6+
                </p>
                <p className="text-xs text-gray-400">infrastructures</p>
              </div>
              <div>
                <p
                  className="text-2xl font-bold lg:text-3xl"
                  style={{ color: BAMBIS_GOLD }}
                >
                  100%
                </p>
                <p className="text-xs text-gray-400">élèves éligibles</p>
              </div>
            </div>
          </div>

          {/* DROITE : mosaïque 2×2 charte */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {CLUBS_DATA.map((club) => {
                const icon = require("./data").CLUB_ICONS[club.iconKey];
                return (
                  <div
                    key={club.slug}
                    className="group relative overflow-hidden rounded-3xl border p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderColor: `${BAMBIS_GOLD}33`,
                    }}
                  >
                    <div
                      className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full blur-2xl opacity-40"
                      style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
                    />
                    <div className="relative">
                      <div
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: BAMBIS_GREEN,
                          color: "#ffffff",
                        }}
                      >
                        <FontAwesomeIcon icon={icon} className="text-lg" />
                      </div>
                      <p className="text-sm font-bold text-white">
                        {club.title}
                      </p>
                      <p
                        className="mt-1 text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        {club.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CLUBS — SLIDER ================= */}
      <section
        id="clubs"
        className="w-full scroll-mt-24 py-20"
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
              Nos clubs phares
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Quatre univers à explorer
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
              Des activités encadrées par des enseignants passionnés et
              ouvertes à tous les niveaux, du primaire à la terminale.
            </p>
          </div>

          <ClubsSlider />
        </div>
      </section>

      {/* ================= GALERIE CAMPUS ================= */}
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
              Notre campus
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Un cadre moderne et accueillant
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400">
              Des espaces pensés pour l&apos;apprentissage, la créativité et
              l&apos;épanouissement de chaque élève.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {CAMPUS_PHOTOS.map((photo) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-2xl border ${photo.className}`}
                style={{ borderColor: `${BAMBIS_GOLD}33` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${BAMBIS_GREEN}33, ${BAMBIS_GOLD}22)`,
                  }}
                />
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <figcaption
                  className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(11,31,20,0.9), rgba(11,31,20,0))",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCamera}
                    className="mr-2"
                    style={{ color: BAMBIS_GOLD }}
                  />
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray-500">
            Photos non contractuelles — campus du Collège Les Bambis.
          </p>
        </div>
      </section>

      {/* ================= INFRASTRUCTURES ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #0B1F14 0%, #0E2417 100%)`,
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
              Des équipements au service de la réussite
            </h2>
            <p className="mb-8 leading-relaxed text-gray-300">
              Le campus du Collège Les Bambis est équipé pour accompagner
              chaque élève dans ses apprentissages académiques, sportifs et
              artistiques.
            </p>

            <ul className="space-y-4">
              {INFRASTRUCTURES.map((item) => (
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
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className="text-2xl"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Un campus sécurisé
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                Un environnement clos, surveillé et pensé pour la sécurité
                des élèves, avec des espaces verts et des aires de
                récréation adaptées à chaque cycle.
              </p>

              <ul className="space-y-3">
                {[
                  "Accès contrôlé et surveillé",
                  "Espaces verts et aires de jeux",
                  "Cantine et infirmerie",
                  "Salles de classe climatisées",
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
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
            style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
          >
            <FontAwesomeIcon icon={faUsers} className="text-2xl" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Envie de découvrir nos clubs ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Venez visiter le campus et rencontrer les encadrants lors de nos
            journées portes ouvertes, ou inscrivez votre enfant dès
            maintenant.
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
              href="/vie-scolaire"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Voir la vie scolaire
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}