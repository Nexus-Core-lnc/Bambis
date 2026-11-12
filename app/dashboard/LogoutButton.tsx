"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/portail-parents");
    router.refresh();
  };

  return (
    <button
      onClick={logout}
      className="mt-6 rounded-full bg-black px-6 py-2 text-sm font-bold text-white"
    >
      Se déconnecter
    </button>
  );
}