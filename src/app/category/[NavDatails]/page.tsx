import { IProduct } from "@/app/Allts/Typescript";
import ProductDatails from "@/app/componenets/ProductDatails";
import Sort from "@/app/componenets/Short";

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
    },
  );

  let datas: IProduct[] = await res.json();

  if (sort === "low") {
    datas = [...datas].sort((a, b) => Number(a.today) - Number(b.today));
  }

  if (sort === "high") {
    datas = [...datas].sort((a, b) => Number(b.today) - Number(a.today));
  }

  const data = datas[0];

  return (
    <div className="mt-4 sm:mt-6 md:mt-8 ">
      <div className="container mx-2 my-3 w-auto rounded-2xl border border-slate-200 bg-white px-3 py-3 sm:mx-auto sm:my-4 sm:w-full sm:px-5 sm:py-4 md:px-6">
        <div className="flex items-center gap-2 py-1 sm:gap-3 sm:py-2">
          <div className="shrink-0 text-xl sm:text-2xl">
            {data?.categoryIcon}
          </div>

          <p className="min-w-0 break-words text-sm sm:text-base">
            {data?.categoryNameBn}
          </p>
        </div>

        <p className="text-xs sm:text-sm">
          মোট {datas.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
   
      <div className="mt-3 sm:mt-4 ">
        <Sort></Sort>
      </div>
      <div className="container mx-auto px-3 ">
        <p className="text-2xl sm:text-sm">
          মোট {datas.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 sm:gap-4 md:gap-5 sm:my-8 px-3 sm:px-4 ">
        {datas.map((data) => (
          <ProductDatails key={data.id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default Page;
