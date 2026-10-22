import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGolfBallTee,
  faMasksTheater,
  faRobot,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type ClubActivity = {
  title: string;
  desc: string;
};

export type ClubData = {
  slug: string;
  iconKey: "golf" | "mendjan" | "robotique" | "entrepreneuriat";
  title: string;
  subtitle: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  imageAlt: string;
  features: string[];
  activities: ClubActivity[];
  objectives: string[];
  schedule: string;
  audience: string;
};

/* ------------------------------------------------------------------ */
/*  Icônes (mappées côté composant, pas dans les données brutes)       */
/* ------------------------------------------------------------------ */

export const CLUB_ICONS: Record<ClubData["iconKey"], IconDefinition> = {
  golf: faGolfBallTee,
  mendjan: faMasksTheater,
  robotique: faRobot,
  entrepreneuriat: faLightbulb,
};

/* ------------------------------------------------------------------ */
/*  Données                                                            */
/* ------------------------------------------------------------------ */

export const CLUBS_DATA: ClubData[] = [
  {
    slug: "golf",
    iconKey: "golf",
    title: "Golf",
    subtitle: "Précision & concentration",
    shortDesc:
      "Initiation au golf dès le primaire, pratique régulière sur un green partenaire et compétitions inter-établissements.",
    longDesc:
      "Le club Golf du Collège Les Bambis initie les élèves à ce sport d'adresse et de concentration. Encadrés par un coach diplômé, les élèves découvrent les fondamentaux du swing, du putting et de l'étiquette du golf, avant de s'entraîner régulièrement sur un green partenaire. Le club participe également à des compétitions inter-établissements, développant l'esprit sportif et la maîtrise de soi.",
    image: "/images/clubs/golf.jpg",
    imageAlt: "Élèves du club Golf sur le green",
    features: [
      "Initiation dès le primaire",
      "Partenariat green local",
      "Compétitions inter-écoles",
      "Encadrement par un coach diplômé",
      "Matériel fourni sur place",
    ],
    activities: [
      {
        title: "École de golf",
        desc: "Séances hebdomadaires pour acquérir les bases techniques du swing et du putting.",
      },
      {
        title: "Pratique sur green",
        desc: "Sorties régulières sur le parcours partenaire pour s'entraîner en conditions réelles.",
      },
      {
        title: "Compétitions",
        desc: "Tournois inter-écoles et rencontres amicales avec d'autres établissements.",
      },
    ],
    objectives: [
      "Développer la concentration",
      "Apprendre la précision et la patience",
      "Favoriser l'esprit sportif et le respect des règles",
      "Créer une cohésion de groupe",
    ],
    schedule: "Mercredi 14h – 16h + sorties ponctuelles le samedi",
    audience: "Primaire & Secondaire",
  },
  {
    slug: "mendjan",
    iconKey: "mendjan",
    title: "Mendjan & Danse traditionnelle",
    subtitle: "Culture & transmission",
    shortDesc:
      "Valorisation du patrimoine culturel camerounais à travers le Mendjan et les danses traditionnelles, avec spectacles, costumes et cérémonies.",
    longDesc:
      "Le club Mendjan & Danse traditionnelle plonge les élèves au cœur du patrimoine culturel camerounais. Encadrés par des artistes et des aînés, les élèves apprennent les rythmes, les pas et les chants traditionnels du Mendjan, ainsi que d'autres danses du terroir. Le club se produit lors des cérémonies de l'établissement, des journées culturelles et des spectacles inter-écoles, valorisant ainsi la richesse et la diversité culturelle du Cameroun.",
    image: "/images/clubs/mendjan.jpg",
    imageAlt: "Danse traditionnelle Mendjan au collège",
    features: [
      "Patrimoine camerounais",
      "Spectacles & cérémonies",
      "Costumes traditionnels",
      "Encadrement par des artistes",
      "Chants et percussions",
    ],
    activities: [
      {
        title: "Ateliers hebdomadaires",
        desc: "Apprentissage des pas, rythmes et chants traditionnels du Mendjan.",
      },
      {
        title: "Costumes & parures",
        desc: "Découverte des costumes traditionnels et de leur symbolique.",
      },
      {
        title: "Spectacles",
        desc: "Représentations lors des journées culturelles, cérémonies et kermesses.",
      },
    ],
    objectives: [
      "Transmettre le patrimoine culturel",
      "Développer la confiance en soi",
      "Encourager la créativité et l'expression",
      "Renforcer le sentiment d'appartenance",
    ],
    schedule: "Vendredi 15h30 – 17h30",
    audience: "Primaire & Secondaire",
  },
  {
    slug: "robotique",
    iconKey: "robotique",
    title: "Informatique & Robotique",
    subtitle: "Innovation & avenir",
    shortDesc:
      "Programmation, conception de robots, impression 3D et projets numériques pour préparer les élèves aux métiers de demain.",
    longDesc:
      "Le club Informatique & Robotique initie les élèves aux sciences du numérique et à la robotique. À travers des projets concrets, ils apprennent à programmer (Scratch, Python), à concevoir et assembler des robots, et à utiliser une imprimante 3D. Le club prépare également ses membres aux concours nationaux et participe à des hackathons scolaires, développant ainsi la créativité, la logique et l'esprit d'équipe.",
    image: "/images/clubs/robotique.jpg",
    imageAlt: "Élèves construisant un robot en salle informatique",
    features: [
      "Programmation & algorithmique",
      "Robotique & impression 3D",
      "Concours nationaux",
      "Ateliers encadrés",
      "Projets collaboratifs",
    ],
    activities: [
      {
        title: "Ateliers de programmation",
        desc: "Scratch, Python, HTML/CSS — du niveau débutant au niveau avancé.",
      },
      {
        title: "Construction de robots",
        desc: "Assemblage, câblage et programmation de robots éducatifs.",
      },
      {
        title: "Impression 3D",
        desc: "Modélisation et impression de pièces et de projets personnels.",
      },
      {
        title: "Concours & hackathons",
        desc: "Participation à des compétitions nationales et événements inter-écoles.",
      },
    ],
    objectives: [
      "Initier aux sciences du numérique",
      "Développer la logique et l'algorithmique",
      "Encourager la créativité technologique",
      "Préparer aux métiers de demain",
    ],
    schedule: "Mardi & Jeudi 15h30 – 17h00",
    audience: "Secondaire (prioritairement 4ᵉ à Terminale)",
  },
  {
    slug: "entrepreneuriat",
    iconKey: "entrepreneuriat",
    title: "Entrepreneuriat",
    subtitle: "Initiative & créativité",
    shortDesc:
      "Ateliers de création d'entreprise, pitchs, gestion de projet et rencontres avec des entrepreneurs locaux pour développer l'esprit d'initiative.",
    longDesc:
      "Le club Entrepreneuriat éveille l'esprit d'initiative des élèves et les initie au monde de l'entreprise. À travers des ateliers pratiques, ils apprennent à identifier une opportunité, à construire un projet, à élaborer un business plan et à pitcher leurs idées devant un jury. Des rencontres avec des entrepreneurs locaux et des visites d'entreprises complètent le programme, offrant aux élèves une première immersion dans le monde professionnel.",
    image: "/images/clubs/entrepreneuriat.jpg",
    imageAlt: "Élèves présentant un projet entrepreneurial",
    features: [
      "Ateliers de création",
      "Pitchs & présentations",
      "Rencontres de pros",
      "Visites d'entreprises",
      "Concours de projets",
    ],
    activities: [
      {
        title: "Ateliers de création",
        desc: "De l'idée au projet : idéation, étude de marché, business model.",
      },
      {
        title: "Pitchs",
        desc: "Présentation des projets devant un jury et des entrepreneurs locaux.",
      },
      {
        title: "Rencontres",
        desc: "Échanges avec des entrepreneurs et visites d'entreprises partenaires.",
      },
      {
        title: "Concours",
        desc: "Participation à des concours de jeunes entrepreneurs et mini-hackathons.",
      },
    ],
    objectives: [
      "Développer l'esprit d'initiative",
      "Apprendre à travailler en équipe",
      "Structurer et défendre un projet",
      "Découvrir le monde de l'entreprise",
    ],
    schedule: "Samedi 09h00 – 11h00 (bimensuel)",
    audience: "Secondaire (3ᵉ à Terminale)",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getClubBySlug(slug: string): ClubData | undefined {
  return CLUBS_DATA.find((club) => club.slug === slug);
}