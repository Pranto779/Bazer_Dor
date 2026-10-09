import React from "react";
import Marquee from "react-fast-marquee";
import { IProduct } from "../Allts/Typescript";
import { getProducts } from "../Allapi/Api";

const Marque = async () => {
  const datas = await getProducts();

  return (
    <Marquee
      speed={100}
      gradient={false}
      className=" bg-white  text-xl py-2 sm:text-sm sm:py-3"
    >
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
        {datas.map((product: IProduct) => (
          <div
            key={product.id}
            className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-sm"
          >
            {product.image}

            <span className="font-medium text-gray-800 text-xs sm:text-sm">
              {product.nameBn}
            </span>

            <span className="text-gray-700 text-xs sm:text-sm">
              {product.today} টাকা/{product.unit}
            </span>

            <span
              className={`flex items-center gap-1 font-semibold ${
                product.change.dir === "up"
                  ? "text-red-500"
                  : product.change.dir === "down"
                    ? "text-green-600"
                    : "text-gray-500"
              }`}
            >
              {product.change.dir === "up" && "▲"}
              {product.change.dir === "down" && "▼"}
              {product.change.dir === "flat" && "●"}
              {product.change.pct}%
            </span>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Marque;