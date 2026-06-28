"use client";

import { HTMLAttributes } from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  /** Rounded-full for circles (e.g. avatars), default is rounded-sm */
  variant?: "default" | "circle" | "text";
  /** Width class (Tailwind) — e.g. "w-full", "w-32" */
  width?: string;
  /** Height class (Tailwind) — e.g. "h-4", "h-48" */
  height?: string;
};

/**
 * Reusable dark-themed skeleton loader with shimmer animation.
 *
 * Usage:
 *   <Skeleton width="w-full" height="h-48" />
 *   <Skeleton variant="circle" width="w-12" height="h-12" />
 *   <Skeleton variant="text" width="w-3/4" height="h-4" />
 */
export default function Skeleton({
  variant = "default",
  width = "w-full",
  height = "h-4",
  className = "",
  ...props
}: SkeletonProps) {
  const rounded =
    variant === "circle"
      ? "rounded-full"
      : variant === "text"
      ? "rounded"
      : "rounded-sm";

  return (
    <div
      aria-hidden="true"
      className={`${width} ${height} ${rounded} relative overflow-hidden bg-white/5 ${className}`}
      {...props}
    >
      {/* shimmer sweep */}
      <span
        className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/8 to-transparent"
      />
    </div>
  );
}

/**
 * Pre-composed skeleton for a Car Card.
 * Drop in where you render <CarCard /> to show loading state.
 */
export function CarCardSkeleton() {
  return (
    <div className="flex flex-col gap-0 bg-[#0a0a0a] border border-white/5 rounded-sm overflow-hidden">
      <Skeleton height="h-52" width="w-full" />
      <div className="p-5 space-y-3">
        <Skeleton variant="text" width="w-1/3" height="h-3" />
        <Skeleton variant="text" width="w-2/3" height="h-5" />
        <div className="flex gap-4 pt-1">
          <Skeleton variant="text" width="w-16" height="h-3" />
          <Skeleton variant="text" width="w-16" height="h-3" />
          <Skeleton variant="text" width="w-16" height="h-3" />
        </div>
        <div className="flex justify-between items-center pt-2">
          <Skeleton variant="text" width="w-24" height="h-5" />
          <Skeleton width="w-24" height="h-9" />
        </div>
      </div>
    </div>
  );
}

/**
 * Pre-composed skeleton for Testimonial slide.
 */
export function TestimonialSkeleton() {
  return (
    <div className="space-y-4 pl-12 border-l-2 border-white/5">
      <Skeleton variant="text" width="w-full" height="h-4" />
      <Skeleton variant="text" width="w-5/6" height="h-4" />
      <Skeleton variant="text" width="w-4/6" height="h-4" />
      <div className="flex items-center gap-4 pt-2">
        <Skeleton variant="circle" width="w-12" height="h-12" />
        <div className="space-y-2 flex-1">
          <Skeleton variant="text" width="w-32" height="h-4" />
          <Skeleton variant="text" width="w-24" height="h-3" />
        </div>
      </div>
    </div>
  );
}
