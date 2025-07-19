"use client";

import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";

export default function HomePage() {
  return (
    <div>
      <SpinLoader className="bg-slate-50" />
    </div>
  );
}
