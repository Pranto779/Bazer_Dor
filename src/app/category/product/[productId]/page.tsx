import { IProduct } from "@/app/Allts/Typescript";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

interface ParamType {
  params: Promise<{
    productId: string;
  }>;
}

const Page = async ({ params }: ParamType) => {
  const { productId } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${productId}`
  );

  if (!res.ok) {
    throw new Error("Product data fetch failed");
  }

  const data: IProduct = await res.json();

  const minPrice = Math.min(
    ...data.markets.map((item) => item.min)
  );

  const maxPrice = Math.max(
    ...data.markets.map((item) => item.max)
  );

  const averagePrice =
    data.markets.reduce(
      (total, item) => total + (item.min + item.max) / 2,
      0
    ) / data.markets.length;

  return (
    <div className="min-h-screen bg-[#f5f8f5] p-3 sm:p-4 md:p-6 mb-20">
   
    <Link href="/" className="pl-3 sm:pl-6 md:pl-10 lg:pl-22">
  <Button className="bg-green-400 rounded-xl my-2">
    Back
  </Button>
</Link>
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">

        {/* Top Card */}
        <div className="bg-white rounded-2xl border border-green-100 p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">

          {/* Product Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 w-full sm:w-auto">

            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-green-50 border flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">
                {data.image}
              </span>
            </div>

            <div className="min-w-0">

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
                {data.nameBn}
              </h2>

              <p className="text-gray-500 text-xs sm:text-sm">
                প্রতি {data.unit} · খুচরা
              </p>

              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                গড়পড়তা মূল্য এখন প্রায়
                <span className="font-semibold text-black">
                  {" "}
                  {averagePrice.toFixed(2)} টাকা
                </span>
              </p>

            </div>
          </div>

          {/* Today's Price */}
          <div className="bg-green-50 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 text-center w-full sm:w-auto shrink-0">

            <p className="text-xs text-gray-500">
              আজকের বাজার মূল্য
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {data.today}
            </h1>

            <p className="text-sm text-gray-500">
              টাকা/{data.unit}
            </p>

            <p
              className={`text-sm font-medium mt-1 ${
                data.change.dir === "up"
                  ? "text-green-600"
                  : data.change.dir === "down"
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
            >
              {data.change.dir === "up" && "▲"}
              {data.change.dir === "down" && "▼"}
              {data.change.dir === "flat" && "—"}{" "}
              {data.change.pct}%
            </p>

          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl border border-green-100 p-4 sm:p-5 md:p-6">

          <h2 className="font-bold text-lg sm:text-xl mb-4">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">

            <div className="bg-green-50 rounded-xl border border-green-100 p-4">
              <p className="text-sm text-gray-500">
                সর্বনিম্ন দাম
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-green-600">
                {minPrice} টাকা
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                সবজায়গার মধ্যে সর্বনিম্ন
              </p>
            </div>

            <div className="bg-red-50 rounded-xl border border-red-100 p-4">
              <p className="text-sm text-gray-500">
                সর্বোচ্চ দাম
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-red-600">
                {maxPrice} টাকা
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                সবজায়গার মধ্যে সর্বোচ্চ
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border p-4">
              <p className="text-sm text-gray-500">
                গড় দাম
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-700">
                {averagePrice.toFixed(2)} টাকা
              </h3>

              <p className="text-xs text-gray-400 mt-1">
                প্রতি {data.unit} এর গড়
              </p>
            </div>

          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-green-100 p-3 sm:p-5 md:p-6">

          <h2 className="font-bold text-lg sm:text-xl mb-4">
            বাজারভিত্তিক আজকের দাম
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px]">

              <thead>
                <tr className="bg-green-50 text-left">

                  <th className="p-3 text-sm sm:text-base">
                    বাজার
                  </th>

                  <th className="p-3 text-sm sm:text-base">
                    বিভাগ
                  </th>

                  <th className="p-3 text-sm sm:text-base">
                    সর্বনিম্ন
                  </th>

                  <th className="p-3 text-sm sm:text-base">
                    সর্বোচ্চ
                  </th>

                  <th className="p-3 text-sm sm:text-base">
                    গড়
                  </th>

                </tr>
              </thead>

              <tbody>

                {data.markets.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-3 text-sm">
                      {item.market}
                    </td>

                    <td className="p-3 text-sm">
                      {item.division}
                    </td>

                    <td className="p-3 text-sm">
                      {item.min} টাকা
                    </td>

                    <td className="p-3 text-sm">
                      {item.max} টাকা
                    </td>

                    <td className="p-3 text-sm font-medium">
                      {((item.min + item.max) / 2).toFixed(2)} টাকা
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;