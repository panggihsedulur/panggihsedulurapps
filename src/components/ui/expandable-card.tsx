/* eslint-disable @next/next/no-img-element */

"use client";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { cn } from "@/lib/utils";

interface ExpandableCardProps {
  title: string;
  src: string;
  description: string;
  /** Optional small badge on the card image (top-left). */
  badgeLabel?: string;
  /** Optional logo image that overlaps the card image. Defaults to `src`. */
  logoSrc?: string;
  logoAlt?: string;
  /** Optional subtitle shown at top of modal body (e.g. category). */
  modalSubtitle?: string;
  /** Optional list of small badges shown at the bottom of the modal body. */
  badges?: string[];
  children?: React.ReactNode;
  className?: string;
  classNameExpanded?: string;
  /** Props forwarded to the expanded modal panel (div). */
  modalProps?: React.ComponentPropsWithoutRef<"div">;
}

export function ExpandableCard({
  title,
  src,
  description,
  badgeLabel,
  logoSrc,
  logoAlt,
  modalSubtitle,
  badges,
  children,
  className,
  classNameExpanded,
  modalProps,
}: ExpandableCardProps) {
  const [active, setActive] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const id = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Memoized callbacks untuk menghindari re-render
  const handleClose = React.useCallback(() => {
    setActive(false);
  }, []);

  const handleClickCard = React.useCallback(() => {
    setActive(true);
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, handleClose]);

  const resolvedLogoSrc = logoSrc || src;
  const resolvedLogoAlt = logoAlt || `${title} logo`;
  const safeBadges = (badges || []).filter(Boolean);
  const { className: modalClassName, ...restModalProps } = modalProps ?? {};

  const modalContent = active ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`expandable-card-title-${id}`}
        className={cn(
          "w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-950",
          classNameExpanded,
          modalClassName,
        )}
        onClick={(e) => e.stopPropagation()}
        {...restModalProps}
      >
        {/* Modal header image */}
        <div className="relative h-56 w-full bg-zinc-200 dark:bg-zinc-800">
          <img
            className="h-full w-full object-cover"
            src={src}
            alt={title}
            loading="eager"
          />
          <button
            type="button"
            onClick={handleClose}
            aria-label="Tutup"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-lg font-bold text-zinc-700 shadow transition hover:bg-white focus:outline-none dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            ×
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5">
          {modalSubtitle ? (
            <p className="mb-1 text-xs text-zinc-500 dark:text-zinc-400">
              {modalSubtitle}
            </p>
          ) : null}

          <h3
            id={`expandable-card-title-${id}`}
            className="mb-4 text-xl font-semibold leading-snug text-zinc-900 dark:text-zinc-50"
          >
            {title}
          </h3>

          <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {children}
          </div>

          {safeBadges.length ? (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {safeBadges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  {label}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Portal: render modal di document.body agar tidak terhalang z-index section */}
      {mounted && modalContent
        ? ReactDOM.createPortal(modalContent, document.body)
        : null}

      <button
        type="button"
        onClick={handleClickCard}
        className={cn(
          "group w-full max-w-[290px] lg:max-w-[280] cursor-pointer overflow-visible rounded-2xl border border-zinc-200/70 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none dark:border-zinc-800/70 dark:bg-zinc-950 dark:hover:shadow-none",
          className,
        )}
        aria-haspopup="dialog"
      >
        {/* Image wrapper */}
        <div className="relative h-42 w-full overflow-visible rounded-t-2xl bg-zinc-200 dark:bg-zinc-800">
          <div className="h-full w-full overflow-hidden rounded-t-2xl">
            <img
              className="block h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              src={src}
              alt={title}
              loading="lazy"
            />
          </div>

          {badgeLabel ? (
            <span className="absolute left-2.5 top-2.5 max-w-[70%] truncate rounded-full border border-zinc-200/70 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 dark:border-zinc-800/70 dark:bg-zinc-950 dark:text-zinc-100">
              {badgeLabel}
            </span>
          ) : null}

          {/* Logo (overlapping) */}
          <div className="absolute -bottom-10 left-3.5 z-10 h-20 w-20 overflow-hidden rounded-full border-[3px] border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800">
            <img
              className="h-full w-full object-cover"
              src={resolvedLogoSrc}
              alt={resolvedLogoAlt}
              loading="lazy"
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-3.5 pb-4 pt-12 text-left">
          <p className="mb-1.5 text-[15px] font-medium leading-snug text-zinc-900 dark:text-zinc-50">
            {title}
          </p>
          <p className="text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </button>
    </>
  );
}
