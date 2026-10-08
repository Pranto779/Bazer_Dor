import React, { Suspense } from "react";
import logo from "../asset/bazar-hero.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import DateTime from "./Time";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto px-3 sm:px-4 md:px-6 mt-6 sm:mt-8 md:mt-10">

      <div className="flex flex-col-reverse items-center justify-between gap-6 sm:gap-8 rounded-3xl bg-white p-4 sm:p-6 md:p-8 md:flex-row">

        {/* Left Content */}
        <div className="w-full max-w-2xl space-y-4">

          <div className="inline-flex rounded-full bg-green-100 border border-green-300 px-3 py-1 text-xs sm:text-sm font-medium text-green-700">

            <Suspense fallback={<p>Loading...</p>}>
              <DateTime />
            </Suspense>

          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-sm sm:text-md leading-relaxed text-gray-600">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম।
            বাজারভিত্তিক বিস্তারিত, গড় মূল্য, সর্বনিম্ন-সর্বাধিক দাম
            এবং দৈনিক পরিবর্তনের তথ্য এক জায়গায়।
          </p>

          <div className="flex gap-3">

           <Link href={'#product'}>
            <Button className="bg-green-600 rounded-xl w-full sm:w-auto">
              সব পণ্য দেখুন
            </Button></Link>

          </div>

        </div>

        {/* Right Image */}
        <div className="shrink-0">

          <Image
            src={logo}
            alt="image"
            height={300}
            width={300}
            className="w-48 sm:w-60 md:w-[300px] h-auto"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;