"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  [key: string]: any;
}

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const id = React.useId();

  // Memoized callbacks untuk menghindari re-render
  const handleClose = React.useCallback(() => {
    setActive(false);
  }, []);

  const handleClickCard = React.useCallback(() => {
    setActive(true);
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    // Debounce event listeners dengan useEffect cleanup
    const timeoutId = setTimeout(() => {
      window.addEventListener("keydown", onKeyDown, { passive: true });
      document.addEventListener("mousedown", handleClickOutside, {
        passive: true,
      });
      document.addEventListener("touchstart", handleClickOutside, {
        passive: true,
      });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [active, handleClose]);

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <>
            {/* Backdrop dengan blur yang lebih ringan */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-10 h-full w-full bg-white/40 backdrop-blur-sm dark:bg-black/40"
              style={{ willChange: "opacity" }}
            />
            {/* Modal container */}
            <div
              key="modal"
              className={cn(
                "fixed inset-0 z-[100] grid place-items-center before:pointer-events-none sm:mt-16",
              )}
            >
              <motion.div
                layoutId={`card-${title}-${id}`}
                ref={cardRef}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "relative flex h-full w-full max-w-[850px] flex-col overflow-auto bg-zinc-50 shadow-sm [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:rounded-t-3xl dark:bg-zinc-950 dark:shadow-none",
                  classNameExpanded,
                )}
                style={{ willChange: "transform, opacity" }}
                {...props}
              >
                <motion.div layoutId={`image-${title}-${id}`}>
                  <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-zinc-50 dark:before:from-zinc-950">
                    <img
                      src={src}
                      alt={title}
                      className="h-80 w-full object-cover object-center"
                      loading="eager"
                      style={{ willChange: "contents" }}
                    />
                  </div>
                </motion.div>
                <div className="relative h-full before:fixed before:inset-x-0 before:bottom-0 before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-zinc-50 dark:before:from-zinc-950">
                  <div className="flex h-auto items-start justify-between p-8">
                    <div>
                      <motion.p className="text-lg text-zinc-500 dark:text-zinc-400">
                        {description}
                      </motion.p>
                      {/* Ketika Sudah Expand */}
                      <motion.h3 className="mt-0.5 text-4xl font-semibold text-black sm:text-4xl dark:text-white text-gradient-2">
                        {title}
                      </motion.h3>
                    </div>
                    <motion.button
                      aria-label="Close card"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-zinc-50 text-neutral-700 transition-colors duration-300 hover:border-gray-300/90 hover:bg-neutral-50 hover:text-black focus:outline-none dark:border-zinc-900 dark:bg-zinc-950 dark:text-white/70 dark:hover:border-zinc-800 dark:hover:bg-neutral-950 dark:hover:text-white"
                      onClick={handleClose}
                    >
                      <motion.div
                        animate={{ rotate: active ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        key="close-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </motion.div>
                    </motion.button>
                  </div>
                  <div className="relative px-6 sm:px-8">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-start gap-4 overflow-auto pb-10 text-base text-zinc-500 dark:text-zinc-400"
                      style={{ willChange: "opacity" }}
                    >
                      {children}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        role="dialog"
        aria-labelledby={`card-title-${id}`}
        aria-modal="true"
        layoutId={`card-${title}-${id}`}
        onClick={handleClickCard}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-between rounded-2xl border border-gray-200/70 bg-zinc-50 p-3 shadow-sm dark:border-zinc-900 dark:bg-zinc-950 dark:shadow-none",
          className,
        )}
        style={{ willChange: "transform" }}
      >
        <div className="flex flex-col gap-4">
          <motion.div layoutId={`image-${title}-${id}`}>
            <img
              src={src}
              alt={title}
              className="h-56 w-64 rounded-lg object-cover object-center"
              loading="lazy"
            />
          </motion.div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <motion.p className="text-sm font-medium text-zinc-500 md:text-left dark:text-zinc-400">
                {description}
              </motion.p>
              {/* Ketika belum di expand */}
              <motion.h3 className="font-semibold text-black md:text-left dark:text-white text-gradient-2">
                {title}
              </motion.h3>
            </div>
            <motion.button
              aria-label="Open card"
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200/90 bg-zinc-50 text-neutral-700 transition-colors duration-300 hover:border-gray-300/90 hover:bg-neutral-50 hover:text-black focus:outline-none dark:border-zinc-900 dark:bg-zinc-950 dark:text-white/70 dark:hover:border-zinc-800 dark:hover:bg-neutral-950 dark:hover:text-white",
                className,
              )}
            >
              <motion.div
                animate={{ rotate: active ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                key="open-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
