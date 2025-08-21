import React from "react";

export default function RatingStars({ value }: { value: number }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`rating ${value} / 5`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f-${i}`} className="text-yellow-400">
          ★
        </span>
      ))}
      {half && <span className="text-yellow-400">☆</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e-${i}`} className="text-gray-300">
          ★
        </span>
      ))}
      <span className="text-xs text-gray-500 mr-1">({value.toFixed(1)})</span>
    </div>
  );
}
