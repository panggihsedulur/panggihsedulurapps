"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionCard } from "@/components/test/QuestionCard";
import { ProgressBar } from "@/components/test/ProgressBar";
import {
  getBranchOption,
  getBranchQuestionById,
  getBranchStartQuestionId,
  getLevelOneQuestions,
  type Question,
} from "@/lib/questions";
import {
  saveQuizResult,
  getTopKategori,
  getCombinedRecommendationObjects,
} from "@/lib/quiz-helpers";
import { initializeSkor, type Biodata, type Kategori } from "@/lib/schema";

export default function TestPage() {
  const router = useRouter();
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [phase, setPhase] = useState<"level1" | "branch">("level1");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [branchQuestionId, setBranchQuestionId] = useState<string | null>(null);
  const [branchStep, setBranchStep] = useState(0);
  const [branchTotalSteps, setBranchTotalSteps] = useState(1);
  const [branchRecommendations, setBranchRecommendations] = useState<string[]>(
    [],
  );
  const [dominantCategory, setDominantCategory] = useState<Kategori | null>(
    null,
  );
  const [skor, setSkor] = useState<Record<Kategori, number>>(initializeSkor());
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const levelOneQuestions = getLevelOneQuestions();

  const mergeSkor = (
    currentSkor: Record<Kategori, number>,
    weight: Record<Kategori, number>,
  ): Record<Kategori, number> => {
    const newSkor = { ...currentSkor };
    for (const [kategori, val] of Object.entries(weight)) {
      newSkor[kategori as Kategori] =
        (newSkor[kategori as Kategori] || 0) + val;
    }
    return newSkor;
  };

  // Load biodata dari localStorage
  useEffect(() => {
    const storedBiodata = localStorage.getItem("biodata");
    if (!storedBiodata) {
      router.push("/kuisioner/biodata");
      return;
    }

    queueMicrotask(() => {
      try {
        const parsedBiodata = JSON.parse(storedBiodata) as Biodata;
        setBiodata(parsedBiodata);
        setSkor(initializeSkor());
        setPhase("level1");
        setCurrentQuestionIndex(0);
        setBranchQuestionId(null);
        setBranchStep(0);
        setBranchTotalSteps(1);
        setBranchRecommendations([]);
        setDominantCategory(null);
        setIsInitializing(false);
      } catch (err) {
        console.error("Error parsing biodata:", err);
        setError("Gagal memuat data biodata. Silakan mulai kembali.");
        setIsInitializing(false);
      }
    });
  }, [router]);

  // Submit kuis dan simpan hasil
  const handleSubmitQuiz = async (
    skorFinal: Record<Kategori, number>,
    dominant: Kategori | null,
    selectedBranchRecommendations: string[],
  ) => {
    if (!biodata) return;

    setIsLoading(true);
    setError(null);

    try {
      const computedTopKategori = getTopKategori(skorFinal, 2);
      const topKategori = dominant
        ? [dominant, ...computedTopKategori.filter((k) => k !== dominant)]
        : computedTopKategori;

      // Get recommended UKM objects
      const recommendedUKMs = getCombinedRecommendationObjects(
        topKategori,
        biodata.agama,
        biodata.is_kipk,
        biodata.fakultas,
        selectedBranchRecommendations,
        3,
      );

      // Prepare result object
      const result = {
        biodata,
        skor_kategori: skorFinal,
        top_kategori: topKategori,
        rekomendasi_ukm: recommendedUKMs.map((u) => u.name),
      };

      // Save ke Supabase
      const { success, error: saveError } = await saveQuizResult(result);

      if (success) {
        // Simpan ke localStorage juga untuk result page
        localStorage.setItem("quizResult", JSON.stringify(result));
        localStorage.setItem(
          "recommendedUKMs",
          JSON.stringify(recommendedUKMs),
        );

        // Redirect ke result page
        router.push("/kuisioner/result");
      } else {
        setError(`Gagal menyimpan hasil: ${saveError}`);
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Error submitting quiz:", err);
      setError("Terjadi kesalahan saat menyimpan hasil. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  // Handle jawaban kuis (Level 1)
  const handleLevelOneAnswer = async (optionId: string) => {
    const currentQuestion = levelOneQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    const option = currentQuestion.options.find((opt) => opt.id === optionId);
    if (!option) return;

    // Hitung skor terbaru secara sinkron agar jawaban terakhir tidak hilang.
    const updatedSkor = mergeSkor(skor, option.weight);
    setSkor(updatedSkor);

    const isLastLevelOneQuestion =
      currentQuestionIndex === levelOneQuestions.length - 1;

    if (!isLastLevelOneQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      return;
    }

    const topOne = getTopKategori(updatedSkor, 1)[0] as Kategori | undefined;
    if (!topOne) {
      await handleSubmitQuiz(updatedSkor, null, []);
      return;
    }

    setDominantCategory(topOne);
    const startBranchQuestionId = getBranchStartQuestionId(topOne);
    const firstBranchQuestion = getBranchQuestionById(startBranchQuestionId);

    if (!firstBranchQuestion) {
      await handleSubmitQuiz(updatedSkor, topOne, []);
      return;
    }

    setPhase("branch");
    setBranchQuestionId(startBranchQuestionId);
    setBranchStep(0);
    setBranchTotalSteps(1);
  };

  // Handle jawaban kuis (Branch Level 2/3)
  const handleBranchAnswer = async (optionId: string) => {
    if (!branchQuestionId) return;

    const branchOption = getBranchOption(branchQuestionId, optionId);
    if (!branchOption) return;

    const mergedRecommendations = Array.from(
      new Set([...branchRecommendations, ...branchOption.recommendations]),
    );
    setBranchRecommendations(mergedRecommendations);

    if (branchOption.nextQuestionId) {
      setBranchTotalSteps(2);
      setBranchQuestionId(branchOption.nextQuestionId);
      setBranchStep((prev) => prev + 1);
      return;
    }

    await handleSubmitQuiz(skor, dominantCategory, mergedRecommendations);
  };

  const handleAnswer = async (optionId: string) => {
    if (phase === "level1") {
      await handleLevelOneAnswer(optionId);
      return;
    }

    await handleBranchAnswer(optionId);
  };

  // Loading state
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#081819]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
          <p className="text-white/80">Memuat kuis...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#081819] p-4">
        <div className="bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(13,77,77,0.2)] border-b-8 border-gray-200 p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Terjadi Kesalahan
          </h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/kuisioner/biodata");
            }}
            className="bg-[#0d4d4d] hover:bg-[#0a3a3a] text-white px-6 py-3 rounded-xl font-bold transition shadow-[0_4px_0_0_#052b2b]"
          >
            Kembali ke Awal
          </button>
        </div>
      </div>
    );
  }

  if (!biodata) {
    return null;
  }

  const currentQuestion: Question | null =
    phase === "level1"
      ? levelOneQuestions[currentQuestionIndex]
      : branchQuestionId
        ? getBranchQuestionById(branchQuestionId)
        : null;

  const totalQuestions =
    phase === "level1"
      ? levelOneQuestions.length
      : levelOneQuestions.length + branchTotalSteps;
  const currentProgressIndex =
    phase === "level1"
      ? currentQuestionIndex
      : levelOneQuestions.length + branchStep;

  return (
    <div className="relative min-h-screen px-4 py-8 text-white">

      <div className="mx-auto w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="relative z-10 mb-8 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <ProgressBar
            current={currentProgressIndex + 1}
            total={totalQuestions}
            showLabel={true}
          />
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <div className="relative z-10">
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              isLoading={isLoading}
              currentIndex={currentProgressIndex}
              totalQuestions={totalQuestions}
            />
          </div>
        )}

        <div className="relative z-10 mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <h3 className="mb-4 text-base font-semibold text-white/90">
            Poin Kategori Saat Ini
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {Object.entries(skor).map(([kategori, poin]) => (
              <div
                key={kategori}
                className="rounded-xl border border-white/10 bg-black/20 p-3 text-center"
              >
                <p className="text-xs font-medium text-zinc-300">{kategori}</p>
                <p className="text-2xl font-bold text-white">{poin}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-7 flex items-center justify-center">
          <p className="text-sm text-white/60">
            Jawab sesuai preferensi pribadimu
          </p>
        </div>
      </div>
    </div>
  );
}
