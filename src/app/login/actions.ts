"use server";

import { cookies } from "next/headers";
import { ukmAuthData } from "@/data/UkmAuth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username dan password wajib diisi." };
  }

  // Cek apakah Admin
  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    const cookieStore = await cookies();
    cookieStore.set("auth_role", "admin", { httpOnly: true, path: "/" });
    cookieStore.set("auth_username", username, { httpOnly: true, path: "/" });
    redirect("/dashboard");
  }

  // Cek apakah UKM/Paguyuban
  const userMatch = ukmAuthData.find(
    (u) => u.username === username && u.password === password
  );

  if (userMatch) {
    const cookieStore = await cookies();
    cookieStore.set("auth_role", "ukm", { httpOnly: true, path: "/" });
    cookieStore.set("auth_username", userMatch.username, { httpOnly: true, path: "/" });
    cookieStore.set("auth_ukm_name", userMatch.name, { httpOnly: true, path: "/" });
    redirect("/dashboard");
  }

  return { error: "Username atau password salah." };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_role");
  cookieStore.delete("auth_username");
  cookieStore.delete("auth_ukm_name");
  redirect("/login");
}
