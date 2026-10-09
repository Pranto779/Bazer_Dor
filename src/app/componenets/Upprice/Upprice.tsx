import { getProducts } from "@/app/Allapi/Api";
import Link from "next/link";

const Upprice = async () => {
  const products = await getProducts();

  const increasedProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div className="bg-[#f5f6f4] p-3 sm:p-4 rounded-xl container mx-auto">

      <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
        <span className="text-red-500">▲</span>
        আজ দাম বেড়েছে
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

        {increasedProducts.map((product) => (

         <Link  key={product.id}  href={`./category/product/${product.id}`}>
          <div
           
            className="bg-white  border border-slate-200 rounded-xl p-4 flex justify-between items-center gap-3 hover:border-slate-300 hover:translate-y-1 transition-all duration-200"
          >

            <div className="flex gap-3 min-w-0">

              <div className="min-w-0">

                <div className="flex items-center gap-2">

                  <div className="bg-slate-100 rounded-xl px-3 py-2 shrink-0">
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

                <p className="font-bold text-lg">
                  {product.today} টাকা
                </p>

              </div>

            </div>

            <span className="text-xs bg-red-50 text-red-500 px-2 py-1 rounded-full shrink-0">
              ▲ {product.change.pct}%
            </span>

          </div>
         </Link>

        ))}

      </div>
    </div>
  );
};

export default Upprice;