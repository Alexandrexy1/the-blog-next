"use client";

import clsx from "clsx";

export default function HomePage() {
  return (
    <div
      className={clsx(
        "text-6xl",
        "font-bold",
        "text-blue-500",
        "hover:text-blue-50",
        "hover:bg-blue-500",
        "transition",
        "duration-300"
      )}
    >
      <h1 onClick={() => alert(123)}>Oi</h1>
    </div>
  );
}
