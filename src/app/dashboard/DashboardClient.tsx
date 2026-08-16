"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import type { StudentResult } from "@/lib/supabase";
import {
  Calendar,
  Download,
  ArrowDownRight,
  Search,
  Bell,
  Moon,
  LayoutDashboard,
  Users,
  LineChart,
  MoreVertical,
  Activity,
  Ticket,
  Clock,
  TrendingUp,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardClient({
  results,
  authRole = "admin",
  authUsername,
  authUkmName,
}: {
  results: StudentResult[];
  authRole?: string;
  authUsername?: string;
  authUkmName?: string;
}) {
  const [activeTab, setActiveTab] = useState<"analytics" | "data">(authRole === "ukm" ? "data" : "analytics");

  // Parse and group data
  const {
    groupedData,
    totalStudents,
    kipkStudents,
    topCategoriesData,
    topOrgsData,
    submissionsByDay,
    topFakultasData,
    avgRekPerPeserta,
  } = useMemo(() => {
    const map: Record<string, StudentResult[]> = {};
    let kipkCount = 0;
    const catCount: Record<string, number> = {};
    const dayCount: Record<string, { label: string; value: number }> = {};
    const fakCount: Record<string, number> = {};
    let totalRekCount = 0;

    results.forEach((student) => {
      if (student.is_kipk) kipkCount++;

      // Distribusi per Fakultas
      if (student.fakultas) {
        const shortFak = student.fakultas
          .replace("Fakultas ", "")
          .replace("Ilmu-ilmu ", "")
          .slice(0, 20);
        fakCount[shortFak] = (fakCount[shortFak] || 0) + 1;
      }

      // Submission per hari
      if (student.created_at) {
        const dateKey = student.created_at.slice(0, 10);
        const label = new Date(student.created_at).toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "short",
        });
        if (!dayCount[dateKey]) dayCount[dateKey] = { label, value: 0 };
        dayCount[dateKey].value++;
      }

      // Kategori dominan
      let cats: string[] = [];
      try {
        if (Array.isArray(student.top_kategori)) cats = student.top_kategori;
        else if (typeof student.top_kategori === "string")
          cats = JSON.parse(student.top_kategori);
      } catch (e) {}
      cats.forEach((c) => {
        catCount[c] = (catCount[c] || 0) + 1;
      });

      // Rekomendasi UKM
      let recs: string[] = [];
      try {
        if (Array.isArray(student.rekomendasi_ukm))
          recs = student.rekomendasi_ukm;
        else if (typeof student.rekomendasi_ukm === "string")
          recs = JSON.parse(student.rekomendasi_ukm);
      } catch (e) {}
      totalRekCount += recs.length;

      recs.forEach((orgName) => {
        if (authRole === "ukm" && orgName !== authUkmName) return;
        if (!map[orgName]) map[orgName] = [];
        map[orgName].push(student);
      });
    });

    const topOrgsArr = Object.keys(map)
      .map((name) => ({ name, count: map[name].length }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 7);

    const topCatArr = Object.keys(catCount)
      .map((name) => ({ name, value: catCount[name] }))
      .sort((a, b) => b.value - a.value);

    const dayArr = Object.entries(dayCount)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(-8)
      .map(([, { label, value }]) => ({ name: label, value }));

    const topFakArr = Object.entries(fakCount)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 3);

    const avgRek =
      results.length > 0
        ? (totalRekCount / results.length).toFixed(1)
        : "0";

    return {
      groupedData: map,
      totalStudents: results.length,
      kipkStudents: kipkCount,
      topCategoriesData: topCatArr,
      topOrgsData: topOrgsArr,
      submissionsByDay: dayArr,
      topFakultasData: topFakArr,
      avgRekPerPeserta: avgRek,
    };
  }, [results, authRole, authUkmName]);

  const orgNames = Object.keys(groupedData).sort();
  const [searchOrg, setSearchOrg] = useState("");
  const filteredOrgs = orgNames.filter((org) =>
    org.toLowerCase().includes(searchOrg.toLowerCase()),
  );
  const [selectedOrg, setSelectedOrg] = useState<string>(
    filteredOrgs.length > 0 ? filteredOrgs[0] : "",
  );
  const [headerSearch, setHeaderSearch] = useState("");

  useMemo(() => {
    if (filteredOrgs.length > 0 && !filteredOrgs.includes(selectedOrg)) {
      setSelectedOrg(filteredOrgs[0]);
    }
  }, [filteredOrgs, selectedOrg]);

  // Pencarian global (nama / NIM) lintas semua organisasi
  const headerSearchTerm = headerSearch.trim().toLowerCase();
  const globalSearchResults = headerSearchTerm
    ? results.filter(
        (s) =>
          s.nama?.toLowerCase().includes(headerSearchTerm) ||
          s.nim?.toLowerCase().includes(headerSearchTerm),
      )
    : [];
  const isGlobalSearchActive = headerSearchTerm.length > 0;

  const COLORS = ["#1f2937", "#4b5563", "#9ca3af"];
  const BAR_COLOR = "url(#barGradient)";

  // Bar chart menggunakan data real dari submissions

  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans text-gray-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 hidden lg:flex flex-shrink-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center">
              <div
                className="w-3 h-3 bg-white"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
              ></div>
            </div>
            <span className="font-bold text-lg tracking-tight">
              Panggih Sedulur
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
          <div className="text-xs font-semibold text-gray-400 mb-2 px-3 uppercase tracking-wider">
            Dashboards
          </div>
          <nav className="space-y-0.5">
            {/* Active Analytics Tab - Hanya untuk Admin */}
            {authRole === "admin" && (
              <button
                onClick={() => setActiveTab("analytics")}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg ${activeTab === "analytics" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <div className="flex items-center gap-3">
                  <LineChart className="w-4 h-4" /> Kuisioner Analytics
                </div>
              </button>
            )}
            {/* Active Data Tab */}
            <button
              onClick={() => setActiveTab("data")}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg ${activeTab === "data" ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4" /> Data Anak {authRole === "ukm" ? "Baru" : "UKM"}
              </div>
            </button>
          </nav>
        </div>
        <Link
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          <div className="p-4 border-t border-gray-100 flex items-center gap-3 cursor-default">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
              {authRole === "admin" ? "A" : (authUkmName?.[0] ?? "U")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {authRole === "admin" ? "Panitia Pusat" : authUkmName}
              </p>
              <p className="text-xs text-gray-500 truncate capitalize">{authRole}</p>
            </div>
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </div>
        </Link>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden text-gray-500">
              <LayoutDashboard className="w-5 h-5" />
            </button>
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama / NIM mahasiswa..."
                value={headerSearch}
                onChange={(e) => {
                  setHeaderSearch(e.target.value);
                  if (e.target.value.trim()) setActiveTab("data");
                }}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
              />
              {headerSearch && (
                <button
                  onClick={() => setHeaderSearch("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="text-sm font-bold text-gray-900">{authRole === "admin" ? "Panitia Pusat" : authUkmName}</span>
              <span className="text-xs text-gray-500 capitalize">{authRole}</span>
            </div>
            
            <form action="/login/actions" method="POST" className="m-0 p-0">
              <button 
                formAction={async () => {
                  const { logoutAction } = await import("@/app/login/actions");
                  await logoutAction();
                }}
                className="text-xs font-medium bg-red-50 text-red-600 px-3 py-1.5 rounded-md hover:bg-red-100 transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6">
          <svg style={{ height: 0, width: 0, position: "absolute" }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#111827" />
              </linearGradient>
            </defs>
          </svg>

          {activeTab === "analytics" && (
            <div className="max-w-[1200px] mx-auto space-y-6 pb-20">
              {/* PAGE HEADER */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Website Analytics
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-xs font-medium text-gray-600 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    08 May 2026 - 04 Jun 2026
                  </div>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-sm transition-colors">
                    Download
                  </button>
                </div>
              </div>

              {/* 4 METRICS CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-gray-500">Total Peserta Kuis</span>
                    <Users className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{totalStudents}</div>
                  <p className="text-[10px] text-gray-400 mt-1">Seluruh pengisi kuisioner</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-gray-500">Penerima KIP-K</span>
                    <Ticket className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{kipkStudents}</div>
                  <p className="text-[10px] text-gray-400 mt-1">dari {totalStudents} total peserta</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-gray-500">Avg. Rekomendasi / Peserta</span>
                    <Activity className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{avgRekPerPeserta}</div>
                  <p className="text-[10px] text-gray-400 mt-1">UKM per mahasiswa</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-gray-500">KIP-K Rate</span>
                    <TrendingUp className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {totalStudents > 0
                      ? ((kipkStudents / totalStudents) * 100).toFixed(1)
                      : 0}%
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Proporsi penerima KIP-K</p>
                </div>
              </div>

              {/* MIDDLE ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pendaftar per Hari */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] lg:col-span-2 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900">Pendaftar per Hari</h3>
                        <p className="text-xs text-gray-500">Berdasarkan tanggal submission</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-2 mb-6">
                      <span className="text-2xl font-bold text-gray-900">{totalStudents}</span>
                      <span className="text-xs text-gray-500 mb-1">total peserta</span>
                    </div>
                    <div className="h-40 w-full min-w-0">
                      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                        <BarChart
                          data={submissionsByDay.length > 0 ? submissionsByDay : [{ name: "-", value: 0 }]}
                          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                        >
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 10 }} />
                          <Bar dataKey="value" fill={BAR_COLOR} radius={[2, 2, 0, 0]} barSize={32} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Top Fakultas */}
                  <div className="w-full md:w-48 flex flex-col justify-center space-y-5 shrink-0">
                    <p className="text-xs font-semibold text-gray-700">Top Fakultas</p>
                    {topFakultasData.length > 0 ? (
                      topFakultasData.map((fak) => {
                        const pct = totalStudents > 0 ? Math.round((fak.count / totalStudents) * 100) : 0;
                        return (
                          <div key={fak.name}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-600 truncate max-w-[7.5rem]">{fak.name}</span>
                              <span className="font-bold text-gray-900">{fak.count}</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5">
                              <div className="bg-gray-800 h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-xs text-gray-400">Belum ada data</p>
                    )}
                  </div>
                </div>

                {/* Donut Chart Block */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <div className="flex-1 relative flex justify-center items-center">
                    <ResponsiveContainer width="100%" height={180} minWidth={0}>
                      <PieChart>
                        <Pie
                          data={
                            topCategoriesData.length > 0
                              ? topCategoriesData
                              : [{ name: "Empty", value: 1 }]
                          }
                          cx="50%"
                          cy="50%"
                          innerRadius={55}
                          outerRadius={75}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {topCategoriesData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-2">
                      <span className="text-xl font-bold text-gray-900">
                        {topCategoriesData.length > 0
                          ? Math.round(
                              (topCategoriesData[0].value /
                                (totalStudents || 1)) *
                                100,
                            ) + "%"
                          : "0%"}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        Completed
                      </span>
                    </div>
                  </div>

                  {/* 3 Tags at bottom */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <Ticket className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500">
                          Minat #1
                        </div>
                        <div className="text-xs font-bold">
                          {topCategoriesData[0]?.name || "-"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                        <Clock className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500">
                          Minat #2
                        </div>
                        <div className="text-xs font-bold">
                          {topCategoriesData[1]?.name || "-"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                        <Activity className="w-3 h-3" />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500">
                          Resp. Time
                        </div>
                        <div className="text-xs font-bold">1 Day</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Top UKM Direkomendasikan */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Top UKM Direkomendasikan</h3>
                  <p className="text-xs text-gray-500 mb-4">Berdasarkan hasil kuisioner</p>
                  <div className="space-y-2">
                    {topOrgsData && topOrgsData.slice(0, 5).map((org, i) => (
                      <div key={org.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</span>
                          <span className="font-medium text-gray-700 truncate max-w-[10rem]">{org.name}</span>
                        </div>
                        <span className="font-bold text-gray-900 shrink-0">{org.count}</span>
                      </div>
                    ))}
                    {(!topOrgsData || topOrgsData.length === 0) && (
                      <p className="text-xs text-gray-400">Belum ada data</p>
                    )}
                  </div>
                </div>

                {/* Top Kategori Minat */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Distribusi Minat</h3>
                  <p className="text-xs text-gray-500 mb-4">Kategori dominan peserta</p>
                  <div className="space-y-3">
                    {topCategoriesData.slice(0, 5).map((cat) => {
                      const pct = totalStudents > 0 ? Math.round((cat.value / totalStudents) * 100) : 0;
                      return (
                        <div key={cat.name}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600 truncate max-w-[9rem]">{cat.name}</span>
                            <span className="font-bold text-gray-900">{cat.value}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                    {topCategoriesData.length === 0 && <p className="text-xs text-gray-400">Belum ada data</p>}
                  </div>
                </div>

                {/* Statistik Jalur */}
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <h3 className="text-sm font-bold text-gray-900 mb-1">Statistik Jalur</h3>
                  <p className="text-xs text-gray-500 mb-4">KIP-K vs Reguler</p>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Reguler</span>
                        <span className="font-bold text-gray-900">{totalStudents - kipkStudents}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-gray-800 h-2 rounded-full" style={{ width: `${totalStudents > 0 ? Math.round(((totalStudents - kipkStudents) / totalStudents) * 100) : 0}%` }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">KIP-K</span>
                        <span className="font-bold text-emerald-700">{kipkStudents}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${totalStudents > 0 ? Math.round((kipkStudents / totalStudents) * 100) : 0}%` }} />
                      </div>
                    </div>
                    <p className="text-[10px] text-gray-400 pt-2 border-t border-gray-50">Total: {totalStudents} peserta</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: DATA MAHASISWA */}
          {activeTab === "data" && (
            <div className="max-w-[98%] mx-auto animate-in fade-in duration-300">
              <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-base font-bold text-gray-900">
                      Data Rekomendasi per Organisasi
                    </h2>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Daftar lengkap mahasiswa yang direkomendasikan
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Cari organisasi..."
                        className="pl-9 pr-3 py-1.5 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-gray-300 w-full sm:w-48 bg-gray-50"
                        value={searchOrg}
                        onChange={(e) => setSearchOrg(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 w-full sm:w-auto">
                      <Filter className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                      <select
                        className="bg-transparent border-none text-xs font-medium focus:ring-0 cursor-pointer outline-none w-full sm:w-56 truncate"
                        value={selectedOrg}
                        onChange={(e) => setSelectedOrg(e.target.value)}
                      >
                        {filteredOrgs.length === 0 ? (
                          <option value="">Tidak ada hasil</option>
                        ) : (
                          filteredOrgs.map((org) => (
                            <option key={org} value={org}>
                              {org} ({groupedData[org]?.length || 0})
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  className="overflow-x-auto overflow-y-auto w-full max-h-[calc(100vh-13em)] custom-scrollbar"
                  data-lenis-prevent
                >
                  {isGlobalSearchActive && (
                    <div className="px-5 py-2 bg-cyan-50 border-b border-cyan-100 text-xs text-cyan-700 flex items-center gap-2">
                      <Search className="w-3 h-3 shrink-0" />
                      Hasil pencarian <strong>&quot;{headerSearch}&quot;</strong>: {globalSearchResults.length} mahasiswa ditemukan
                    </div>
                  )}
                  <table className="w-full text-xs text-left relative">
                    <thead className="bg-gray-50 text-gray-500 border-b border-gray-100 sticky top-0 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                      <tr>
                        <th className="px-5 py-3 font-medium whitespace-nowrap">
                          Nama & NIM
                        </th>
                        <th className="px-5 py-3 font-medium">
                          Fakultas / Jurusan
                        </th>
                        <th className="px-5 py-3 font-medium">No. HP</th>
                        <th className="px-5 py-3 font-medium text-center">
                          Jalur KIP-K
                        </th>
                        <th className="px-5 py-3 font-medium">Waktu Tes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-gray-700">
                      {isGlobalSearchActive ? (
                        globalSearchResults.length > 0 ? (
                          globalSearchResults.map((student, idx) => (
                            <tr key={student.id || idx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-5 py-3">
                                <div className="font-semibold text-gray-900">{student.nama}</div>
                                <div className="text-gray-400 mt-0.5">{student.nim}</div>
                              </td>
                              <td className="px-5 py-3">
                                <div className="font-medium">{student.fakultas}</div>
                                <div className="text-gray-400 mt-0.5">{student.jurusan}</div>
                              </td>
                              <td className="px-5 py-3">
                                <div className="font-medium whitespace-nowrap">
                                  {student.no_hp ? (
                                    <a href={`https://wa.me/${student.no_hp.replace(/\D/g, "").replace(/^0/, "62")}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                      {student.no_hp}
                                    </a>
                                  ) : <span className="text-gray-300">-</span>}
                                </div>
                              </td>
                              <td className="px-5 py-3 text-center">
                                {student.is_kipk ? (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Ya</span>
                                ) : (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200">Tidak</span>
                                )}
                              </td>
                              <td className="px-5 py-3 text-gray-400 whitespace-nowrap font-medium">
                                {student.created_at ? new Date(student.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : "-"}
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-5 py-10 text-center text-gray-400">
                              Tidak ada mahasiswa yang cocok dengan &quot;{headerSearch}&quot;
                            </td>
                          </tr>
                        )
                      ) : selectedOrg && groupedData[selectedOrg] ? (
                        groupedData[selectedOrg].map((student, idx) => (
                          <tr key={student.id || idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-5 py-3">
                              <div className="font-semibold text-gray-900">{student.nama}</div>
                              <div className="text-gray-400 mt-0.5">{student.nim}</div>
                            </td>
                            <td className="px-5 py-3">
                              <div className="font-medium">{student.fakultas}</div>
                              <div className="text-gray-400 mt-0.5">{student.jurusan}</div>
                            </td>
                            <td className="px-5 py-3">
                              <div className="font-medium whitespace-nowrap">
                                {student.no_hp ? (
                                  <a href={`https://wa.me/${student.no_hp.replace(/\D/g, "").replace(/^0/, "62")}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {student.no_hp}
                                  </a>
                                ) : <span className="text-gray-300">-</span>}
                              </div>
                            </td>
                            <td className="px-5 py-3 text-center">
                              {student.is_kipk ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">Ya</span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200">Tidak</span>
                              )}
                            </td>
                            <td className="px-5 py-3 text-gray-400 whitespace-nowrap font-medium">
                              {student.created_at ? new Date(student.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) : "-"}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-5 py-10 text-center text-gray-400">Belum ada data</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
          height: 5px;
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
