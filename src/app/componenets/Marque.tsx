import React from "react";
import Marquee from "react-fast-marquee";
export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: "kg" | "litre" | "dozen" | "piece";
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;

  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };

  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  };
}
const Marque = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const datas: IProduct[] = await res.json();

  return (
    <Marquee
      pauseOnHover
      speed={50}
      gradient={false}
      className="border-y bg-white py-1 text-sm"
    
    >
      <div className="flex items-center gap-12">
        {datas.map((product: IProduct) => (
          <div
            key={product.id}
            className="flex items-center gap-2 whitespace-nowrap text-sm"
          >
            {product.image}

            <span className="font-medium text-gray-800 text-sm">{product.nameBn}</span>

            <span className="text-gray-700 text-sm">
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
