import { IProduct } from "../Allts/Typescript";
import Link from "next/link";

interface Productsprops {
  product: IProduct;
}

const ProductDatails = ({ product }: Productsprops) => {
  return (
    <div className="w-full">
      <Link href={`./product/${product.id}`}>
        <div className="bg-white rounded-xl  border border-slate-200  sm:p-4 flex justify-between items-center gap-3 hover:border-slate-300 hover:translate-y-1 transition-all duration-200">

          <div className="flex gap-3 min-w-0">
            <div className="min-w-0 md:py-0 p-4">
              <div className="flex items-center  gap-2">

                <div className=" rounded-xl px-2 sm:px-3 py-2 shrink-0 text-lg  sm:text-xl">
                  {product.image}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-sm break-words">
                    {product.nameBn}
                  </h3>

                  <p className="text-xs text-gray-500">
                    প্রতি {product.unit}
                  </p>
                </div>

              </div>

              <p className="text-xs text-gray-400 mt-2">
                আজকের দাম
              </p>

              <p className="font-bold text-base sm:text-lg">
                {product.today} টাকা
              </p>
            </div>
          </div>

          <span
            className={`text-xs px-2 py-1 rounded-full shrink-0 ${
              product.change.dir === "up"
                ? "bg-red-50 text-red-500"
                : product.change.dir === "down"
                  ? "bg-green-50 text-green-500"
                  : "bg-gray-50 text-black"
            }`}
          >
            {product.change.dir === "up"
              ? "▲ "
              : product.change.dir === "down"
                ? "▼ "
                : "--"}

            {Math.abs(product.change.pct)}%
          </span>

        </div>
      </Link>
    </div>
  );
};

export default ProductDatails;