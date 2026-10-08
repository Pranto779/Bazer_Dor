import { IProduct } from "@/app/Allts/Typescript";
import ProductDatails from "@/app/componenets/ProductDatails";
import Sort from "@/app/componenets/Short";
import { Button } from "@heroui/react";
import Link from "next/link";

import React from "react";

interface ParamsPoos {
  params: Promise<{
    NavDatails: string[];
  }>;
  searchParams: Promise<{
    sort?: string;
  }>;
}

const Page = async ({ params, searchParams }: ParamsPoos) => {
  const { NavDatails } = await params;
  const { sort } = await searchParams;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${NavDatails}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  let datas: IProduct[] = await res.json();

  // Low price
  if (sort === "low") {
    datas = [...datas].sort(
      (a, b) => Number(a.today) - Number(b.today)
    );
  }

  // High price
  if (sort === "high") {
    datas = [...datas].sort(
      (a, b) => Number(b.today) - Number(a.today)
    );
  }

  const data = datas[0];

  return (
    <div className="mt-4 sm:mt-6 md:mt-8">

    <Link href="/" className="pl-3 sm:pl-6 md:pl-10 lg:pl-28">
  <Button className="bg-green-400 rounded-xl my-2">
    Back
  </Button>
</Link>

      {/* Category + Sort */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-2xl bg-white border">
 
        <div className="flex gap-2 sm:gap-3 items-center py-1 sm:py-2">
          <div className="text-xl sm:text-2xl">
            {data.image}
          </div>

          <p className="text-sm sm:text-base">
            {data.nameBn}
          </p>
        </div>

        <p className="text-xs sm:text-sm">
          মোট {datas.length}টি পণ্য দেখানো হচ্ছে
        </p>

      </div>

      <div className="mt-3 sm:mt-4">
        <Sort></Sort>
      </div>

      <div className="container mx-auto px-3 ">
        <p className="text-2xl sm:text-sm">
          মোট {datas.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>

      {/* Products */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 sm:gap-4 md:gap-5 sm:my-8 px-3 sm:px-4 ">

        {datas.map((data) => (
          <ProductDatails
            key={data.id}
            product={data}
          />
        ))}

      </div>

    </div>
  );
};

export default Page;