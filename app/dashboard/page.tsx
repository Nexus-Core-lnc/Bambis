import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/portail-parents");

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { name: true, email: true },
  });
  if (!user) redirect("/portail-parents");

  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="text-3xl font-bold">Bienvenue {user.name ?? user.email}</h1>
      <p className="mt-2 text-gray-600">{user.email}</p>
      <LogoutButton />
    </main>
  );
}