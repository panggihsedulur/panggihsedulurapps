"use client";

import { useActionState, useState, useRef, useEffect } from "react";
import { loginAction } from "./actions";
import { KeyRound, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ukmAuthData } from "@/data/UkmAuth";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(
    async (prevState: any, formData: FormData) => {
      return await loginAction(formData);
    },
    null,
  );

  // Searchable Dropdown State
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allOptions = [
    { username: "admin", name: "Panitia Pusat (Admin)", type: "Admin" },
    ...ukmAuthData
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((u) => ({
        username: u.username,
        name: u.name,
        type: u.id.startsWith("ukm") ? "UKM" : "Paguyuban",
      })),
  ];

  const filteredOptions = allOptions.filter(
    (opt) =>
      opt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opt.username.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen py-10 px-4 text-black flex flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-500/10 to-transparent -z-10 blur-3xl opacity-50" />

      <Link href="/" className="mb-8 hover:scale-105 transition-transform">
        <Image
          src="/logo-pangsud.webp"
          alt="Panggih Sedulur"
          width={100}
          height={100}
          className="drop-shadow-lg"
          priority
        />
      </Link>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[1rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border border-black/10 p-8">
        <div className="mb-8 text-center flex flex-col items-center">
          <div className="bg-black/5 p-3 rounded-full mb-4">
            <KeyRound className="w-6 h-6 text-black" />
          </div>
          <h2 className="text-2xl font-extrabold text-black mb-2">
            Login Dashboard
          </h2>
          <p className="text-black/70 text-sm">
            Masuk sebagai Panitia atau Pengurus UKM/Paguyuban
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          {/* Username (Searchable Dropdown) */}
          <div className="space-y-2 relative" ref={dropdownRef}>
            <label className="block text-sm font-bold text-black mb-2">
              Username Organisasi
            </label>
            <input
              type="hidden"
              name="username"
              value={selectedUsername}
              required
            />

            <div className="relative">
              <input
                type="text"
                placeholder="Ketik untuk mencari organisasi..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsOpen(true);
                  if (selectedUsername) setSelectedUsername("");
                }}
                onFocus={() => setIsOpen(true)}
                className="w-full pl-11 pr-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-gray-500 backdrop-blur-sm transition-all focus:bg-white"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {isOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white/95 backdrop-blur-xl border border-black/10 rounded-xl shadow-xl max-h-60 overflow-y-auto custom-scrollbar">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((opt) => (
                    <div
                      key={opt.username}
                      onClick={() => {
                        setSelectedUsername(opt.username);
                        setSearchTerm(opt.name);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-3 hover:bg-cyan-50 cursor-pointer flex justify-between items-center transition-colors border-b border-gray-100 last:border-0 ${selectedUsername === opt.username ? "bg-cyan-50/50" : ""}`}
                    >
                      <span className="font-medium text-black text-sm">
                        {opt.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded ${opt.type === "Admin" ? "text-rose-600 bg-rose-50" : "text-cyan-600 bg-cyan-50"}`}
                      >
                        {opt.type}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-4 text-sm text-gray-500 text-center">
                    Organisasi tidak ditemukan
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Password (Input) */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-black mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 bg-black/5 text-black placeholder:text-gray-600 backdrop-blur-sm transition-all focus:bg-white"
              autoComplete="current-password"
            />
          </div>

          {state?.error && (
            <div className="text-sm font-medium text-rose-500 bg-rose-50 border border-rose-100 p-3 rounded-xl text-center">
              ⚠ {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={pending || (!selectedUsername && searchTerm.length > 0)}
            className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-cyan-900/40 active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Memeriksa Kredensial..." : "Masuk ke Dashboard 🚀"}
          </button>
        </form>

        <p className="text-xs text-black/40 text-center italic mt-6">
          Gunakan username dan password yang diberikan Panitia Panggih Sedulur
          2026.
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d1d5db; 
        }
        `,
        }}
      />
    </div>
  );
}
