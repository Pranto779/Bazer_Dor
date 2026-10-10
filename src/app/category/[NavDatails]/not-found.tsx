
"use client";

import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-100 px-4">
      <div className="w-full max-w-sm text-center">
        {/* 404 Illustration */}
        <div className="relative inline-block">
          <h1 className="select-none text-8xl font-black leading-none tracking-tight text-emerald-600 drop-shadow-sm sm:text-9xl">
            404
          </h1>

          <AlertTriangle
            size={26}
            className="absolute -right-2 top-2 animate-bounce text-amber-500"
          />

          <div className="absolute -bottom-2 left-1/2 h-1.5 w-3/4 -translate-x-1/2 rounded-full bg-emerald-900/10 blur-md" />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-xl font-bold text-gray-800 sm:text-2xl">
          পৃষ্ঠা খুঁজে পাওয়া যায়নি!
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-600">
          দুঃখিত! আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।
          পৃষ্ঠাটি সরিয়ে ফেলা হয়ে থাকতে পারে অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 active:translate-y-0"
          >
            <Home size={17} />
            হোম পেজে ফিরে যান
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-7">
          <div className="mx-auto mb-3 h-px w-16 bg-emerald-200" />

          <p className="text-xs leading-5 text-gray-500">
            সমস্যাটি আবার হলে পরে চেষ্টা করুন।
          </p>

          <p className="mt-2 text-[10px] font-medium tracking-wider text-emerald-700/70">
            ERROR CODE: 404
          </p>
        </div>
      </div>
    </main>
  );
}
