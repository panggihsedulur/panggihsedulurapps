"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@/components/quiz/ProgressBar";
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
  const [branchCategories, setBranchCategories] = useState<Kategori[]>([]);
  const [branchCategoryIndex, setBranchCategoryIndex] = useState(0);
  const [branchRecommendations, setBranchRecommendations] = useState<string[]>(
    [],
  );
  const [dominantCategory, setDominantCategory] = useState<Kategori | null>(
    null,
  );
  const [skor, setSkor] = useState<Record<Kategori, number>>(initializeSkor());
  const [finalSkorForSubmit, setFinalSkorForSubmit] = useState<Record<
    Kategori,
    number
  > | null>(null);
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
        setBranchCategories([]);
        setBranchCategoryIndex(0);
        setBranchRecommendations([]);
        setDominantCategory(null);
        setFinalSkorForSubmit(null);
        setIsInitializing(false);
      } catch (err) {
        console.error("Error parsing biodata:", err);
        setError("Gagal memuat data biodata. Silakan mulai kembali.");
        setIsInitializing(false);
      }
    });
  }, [router]);

  const startBranchForCategory = (kategori: Kategori): boolean => {
    const startBranchQuestionId = getBranchStartQuestionId(kategori);
    const firstBranchQuestion = getBranchQuestionById(startBranchQuestionId);

    if (!firstBranchQuestion) {
      return false;
    }

    setPhase("branch");
    setBranchQuestionId(startBranchQuestionId);
    setBranchStep(0);
    setBranchTotalSteps(1);
    return true;
  };

  const proceedToNextBranchOrSubmit = async (
    mergedRecommendations: string[],
  ) => {
    const categories = branchCategories;
    for (let i = branchCategoryIndex + 1; i < categories.length; i += 1) {
      if (startBranchForCategory(categories[i])) {
        setBranchCategoryIndex(i);
        return;
      }
    }

    const skorToSubmit = finalSkorForSubmit ?? skor;
    const dominant = categories[0] ?? dominantCategory;
    await handleSubmitQuiz(skorToSubmit, dominant, mergedRecommendations);
  };

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
        biodata.asal_daerah,
        selectedBranchRecommendations,
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

    const computedTopKategori = getTopKategori(updatedSkor, 2);
    const topKategori = computedTopKategori as Kategori[];
    const topOne = topKategori[0];

    if (!topOne) {
      await handleSubmitQuiz(updatedSkor, null, []);
      return;
    }

    setDominantCategory(topOne);
    setFinalSkorForSubmit(updatedSkor);
    setBranchCategories(topKategori);
    setBranchCategoryIndex(0);
    setBranchRecommendations([]);

    let startedBranch = false;
    for (let i = 0; i < topKategori.length; i += 1) {
      if (startBranchForCategory(topKategori[i])) {
        setBranchCategoryIndex(i);
        startedBranch = true;
        break;
      }
    }

    if (!startedBranch) {
      await handleSubmitQuiz(updatedSkor, topOne, []);
    }
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

    await proceedToNextBranchOrSubmit(mergedRecommendations);
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
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
          <p className="text-black/80">Memuat kuis...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent p-4">
        <div className="bg-white rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] border-b-8 border-gray-200 p-8 max-w-md text-center border border-black/10">
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
    <div className="relative min-h-screen px-4 py-8 text-black">
      <div className="mx-auto w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="relative z-10 mb-8 rounded-3xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur-xl">
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

        {/* <div className="relative z-10 mt-8 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
          <h3 className="mb-4 text-base font-semibold text-black/90">
            Poin Kategori Saat Ini
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {Object.entries(skor).map(([kategori, poin]) => (
              <div
                key={kategori}
                className="rounded-xl border border-black/10 bg-black/5 p-3 text-center"
              >
                <p className="text-xs font-medium text-slate-600">{kategori}</p>
                <p className="text-2xl font-bold text-black">{poin}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="relative z-10 mt-7 flex items-center justify-center">
          <p className="text-sm text-black/60">
            Jawab sesuai preferensi pribadimu
          </p>
        </div>
      </div>
    </div>
  );
}
