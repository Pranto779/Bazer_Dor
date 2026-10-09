"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-4 font-sans text-[#252b25] sm:px-5 sm:py-5">
      <div className="mx-auto w-full max-w-[424px]">
        {/* Header */}
        <header className="mb-4 text-center">
          <h1 className="text-[26px] font-bold leading-8">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="my-2 text-[13px] leading-5 text-[#777d77]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </header>

        {/* Signup Card */}
        <section className="rounded-[17px] border border-[#dfe8df] bg-[#fbfcfb] px-6 pb-4 pt-4">
          <form className="space-y-3">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-[14px] font-medium"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="যেমন: রাহিম উদ্দিন"
                autoComplete="name"
                required
                className="h-[38px] w-full rounded-[9px] border border-[#dfe4df] bg-transparent px-3 text-[14px] outline-none transition focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-[14px] font-medium"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="h-[38px] w-full rounded-[9px] border border-[#dfe4df] bg-transparent px-3 text-[14px] outline-none transition focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-[14px] font-medium"
              >
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="h-[38px] w-full rounded-[9px] border border-[#dfe4df] bg-transparent px-3 pr-10 text-[14px] outline-none transition focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777d77] hover:text-[#07883f]"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.58 10.59a2 2 0 002.83 2.83" />
                      <path d="M9.88 5.09A10.8 10.8 0 0112 4.9c5 0 8.27 4.11 9.5 7.1a10.9 10.9 0 01-3.02 4.12" />
                      <path d="M6.61 6.61A11.8 11.8 0 002.5 12c.72 1.73 2.15 3.66 4.23 5.03A9.8 9.8 0 0012 19.1c1.1 0 2.12-.18 3.07-.5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-[14px] font-medium"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="আবার লিখুন"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="h-[38px] w-full rounded-[9px] border border-[#dfe4df] bg-transparent px-3 pr-10 text-[14px] outline-none transition focus:border-[#07883f] focus:ring-2 focus:ring-[#07883f]/10"
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword
                      ? "নিশ্চিতকরণ পাসওয়ার্ড লুকান"
                      : "নিশ্চিতকরণ পাসওয়ার্ড দেখুন"
                  }
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#777d77] hover:text-[#07883f]"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.58 10.59a2 2 0 002.83 2.83" />
                      <path d="M9.88 5.09A10.8 10.8 0 0112 4.9c5 0 8.27 4.11 9.5 7.1a10.9 10.9 0 01-3.02 4.12" />
                      <path d="M6.61 6.61A11.8 11.8 0 002.5 12c.72 1.73 2.15 3.66 4.23 5.03A9.8 9.8 0 0012 19.1c1.1 0 2.12-.18 3.07-.5" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="h-[38px] w-full rounded-[9px] bg-[#07883f] text-[14px] font-semibold text-white shadow-[0_3px_4px_rgba(0,100,40,0.25)] transition hover:bg-[#067537] active:scale-[0.99]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-3 text-center text-[14px]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/api/sign-in"
              className="font-semibold text-[#07883f] hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </section>

        {/* Home Link */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-[14px] text-[#777d77] transition hover:text-[#07883f]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
}