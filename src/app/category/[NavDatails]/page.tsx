import { DataI, IProduct } from "@/app/Allts/Typescript";
import ProductDatails from "@/app/componenets/ProductDatails";
import React from "react";

interface ParamsPoos {
  params: Promise<{
    NavDatails: string[];
  }>;
}

const Page = async ({ params }: ParamsPoos) => {
  const { NavDatails } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${NavDatails}`
  );

  const datas: IProduct[] = await res.json();
  const data = datas[0];

  return (
    <div className="mt-6 sm:mt-8 md:mt-10">
      <div className="flex gap-2 container mx-auto py-3 px-3 sm:px-4 md:px-6">
        <div>
          {data.image}
        </div>

        <p className="text-sm sm:text-base">
          {data.categoryNameBn}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-6">
        {datas.map((data, ind) => (
          <ProductDatails
            product={data}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;