"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  showLabel?: boolean;
}

export function ProgressBar({
  current,
  total,
  showLabel = true,
}: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      {/* Labels */}
      {showLabel && (
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-base tracking-wide uppercase text-white/80">
            Kuisioner Minat & Bakat
          </span>
          <span className="text-sm font-semibold text-white bg-black/30 px-4 py-1 rounded-full border border-white/15 shadow-sm backdrop-blur-sm">
            Soal {current} / {total}
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="h-4 w-full bg-black/25 rounded-full overflow-hidden p-0.5 border border-white/20 shadow-inner">
        <div
          className="h-full bg-linear-to-r from-[#b7ced4] via-white to-[#84b9c5] rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
