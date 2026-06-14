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
      {showLabel && (
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-base tracking-wide uppercase text-black">
            Kuisioner Minat & Bakat
          </span>
          <span className="text-sm font-semibold text-black px-4 py-1 rounded-full border border-black/15 shadow-sm backdrop-blur-sm">
            Soal {current} / {total}
          </span>
        </div>
      )}

      <div className="h-4 w-full bg-black/10 rounded-full overflow-hidden p-0.5 border border-black/20 shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#b7ced4] via-[#5aa0ac] to-[#84b9c5] rounded-full transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
