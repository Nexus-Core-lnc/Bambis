"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLock,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faArrowRight,
  faKey,
  faShieldHalved,
  faCircleInfo,
  faGraduationCap,
  faFileLines,
  faCalendarCheck,
  faBell,
  faHeadset,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

/* ------------------------------------------------------------------ */
/*  Configuration                                                      */
/* ------------------------------------------------------------------ */

const BAMBIS_GREEN = "#2E7D32";
const BAMBIS_GOLD  = "#F4B400";
const DARK_BG      = "#0B1F14";

/* Fonctionnalités du portail */
const FEATURES = [
  {
    icon: faFileLines,
    title: "Bulletins en ligne",
    desc: "Consultez les notes et bulletins de votre enfant dès leur publication.",
  },
  {
    icon: faCalendarCheck,
    title: "Emploi du temps",
    desc: "Accédez au planning des cours, aux devoirs et aux évaluations.",
  },
  {
    icon: faBell,
    title: "Notifications",
    desc: "Recevez les annonces importantes de l'établissement en temps réel.",
  },
  {
    icon: faGraduationCap,
    title: "Suivi scolaire",
    desc: "Suivez la progression et l'assiduité de votre enfant tout au long de l'année.",
  },
];

/* ------------------------------------------------------------------ */
/*  Composant                                                          */
/* ------------------------------------------------------------------ */

export default function PortailParentsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connecter à votre backend / API d'authentification
    console.log({ email, password, remember });
  };

  return (
    <main className="flex flex-col">
      {/* ================= HERO / SECTION PRINCIPALE ================= */}
      <section
        className="relative min-h-[85vh] w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${DARK_BG} 0%, #10321E 55%, #143F26 100%)`,
        }}
      >
        {/* Halos décoratifs */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GOLD}22` }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ backgroundColor: `${BAMBIS_GREEN}44` }}
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          {/* ============ COLONNE GAUCHE : PRESENTATION ============ */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full shadow-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: `0 0 40px ${BAMBIS_GOLD}55`,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Logo du Collège Les Bambis"
                  width={80}
                  height={80}
                  priority
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>

            <p
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{
                backgroundColor: `${BAMBIS_GOLD}22`,
                color: BAMBIS_GOLD,
                border: `1px solid ${BAMBIS_GOLD}55`,
              }}
            >
              🔒 Espace sécurisé
            </p>

            <h1
              className="text-4xl font-bold leading-tight text-white lg:text-5xl"
              style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
            >
              Portail <span style={{ color: BAMBIS_GOLD }}>Parents</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-200 lg:text-lg">
              Accédez à l&apos;espace personnel de votre enfant : notes,
              bulletins, emploi du temps et communications de
              l&apos;établissement.
            </p>

            {/* Liste des fonctionnalités */}
            <ul className="mt-8 space-y-4 text-left">
              {[
                "Consultation des notes et bulletins",
                "Suivi de l'assiduité et du comportement",
                "Communication directe avec les enseignants",
                "Paiement en ligne des frais de scolarité",
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

          {/* ============ COLONNE DROITE : FORMULAIRE ============ */}
          <div className="w-full">
            <div
              className="relative overflow-hidden rounded-3xl border p-8 backdrop-blur-xl lg:p-10"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: `${BAMBIS_GOLD}44`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
              }}
            >
              {/* Halo doré en haut */}
              <div
                className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full blur-3xl"
                style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
              />

              <div className="relative">
                {/* Titre du formulaire */}
                <div className="mb-8 text-center">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon
                      icon={faUserLock}
                      className="text-2xl"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Connexion à votre espace
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">
                    Entrez vos identifiants pour continuer
                  </p>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Champ Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      Adresse email
                    </label>
                    <div className="relative">
                      <span
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="parent@exemple.com"
                        className="w-full rounded-xl border bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-all focus:bg-white/10"
                        style={{
                          borderColor: `${BAMBIS_GOLD}44`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Champ Mot de passe */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-xs font-bold uppercase tracking-widest"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      Mot de passe
                    </label>
                    <div className="relative">
                      <span
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border bg-white/5 py-3 pl-11 pr-12 text-sm text-white placeholder-gray-500 outline-none transition-all focus:bg-white/10"
                        style={{
                          borderColor: `${BAMBIS_GOLD}44`,
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={
                          showPassword
                            ? "Masquer le mot de passe"
                            : "Afficher le mot de passe"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between text-xs">
                    <label className="flex cursor-pointer items-center gap-2 text-gray-300">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 cursor-pointer rounded"
                        style={{ accentColor: BAMBIS_GOLD }}
                      />
                      Se souvenir de moi
                    </label>
                    <Link
                      href="/portail-parents/mot-de-passe-oublie"
                      className="font-semibold transition-colors hover:text-white"
                      style={{ color: BAMBIS_GOLD }}
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  {/* Bouton de connexion */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
                  >
                    <FontAwesomeIcon icon={faKey} />
                    Se connecter
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>

                {/* Séparateur */}
                <div className="my-6 flex items-center gap-4">
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
                  />
                  <span className="text-xs text-gray-500">OU</span>
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: `${BAMBIS_GOLD}33` }}
                  />
                </div>

                {/* Aide */}
                <div
                  className="rounded-2xl border p-4"
                  style={{
                    backgroundColor: `${BAMBIS_GREEN}22`,
                    borderColor: `${BAMBIS_GOLD}44`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="mt-0.5 shrink-0 text-sm"
                      style={{ color: BAMBIS_GOLD }}
                    />
                    <p className="text-xs leading-relaxed text-gray-200">
                      Pas encore de compte ?{" "}
                      <Link
                        href="/admissions"
                        className="font-bold underline transition-colors hover:text-white"
                        style={{ color: BAMBIS_GOLD }}
                      >
                        Contactez le secrétariat
                      </Link>{" "}
                      pour obtenir vos identifiants.
                    </p>
                  </div>
                </div>

                {/* Badge de sécurité */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    style={{ color: BAMBIS_GOLD }}
                  />
                  Connexion sécurisée SSL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FONCTIONNALITES ================= */}
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
              Ce que vous pouvez faire
            </p>
            <h2 className="text-3xl font-bold text-white lg:text-4xl">
              Un espace complet pour les parents
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
                  style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
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

      {/* ================= ASSISTANCE ================= */}
      <section
        className="w-full py-20"
        style={{
          background: `linear-gradient(180deg, #10321E 0%, #0B1F14 100%)`,
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
            style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
          >
            <FontAwesomeIcon icon={faHeadset} className="text-2xl" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Besoin d&apos;aide ?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Notre secrétariat est disponible pour vous accompagner dans
            l&apos;utilisation du portail et la gestion de votre compte.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: BAMBIS_GOLD, color: DARK_BG }}
            >
              <FontAwesomeIcon icon={faHeadset} />
              Contacter le secrétariat
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Créer un compte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}