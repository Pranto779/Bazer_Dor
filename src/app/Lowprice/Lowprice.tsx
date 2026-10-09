import { getProducts } from "@/app/Allapi/Api";
import Link from "next/link";

const Lowprice = async () => {
  const products = await getProducts();

  const decreasedProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <div className="bg-[#f5f6f4] p-4 rounded-xl container mx-auto">
      <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
        <span className="text-green-500">▼</span>
        আজ দাম কমেছে
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {decreasedProducts.map((product) => (
            <Link  key={product.id}  href={`./category/product/${product.id}`}>
   <div
            
            className="bg-white  border border-slate-200 rounded-xl p-4 flex justify-between items-center hover:border-slate-300 hover:translate-1 all duration-200 "
          >
            <div className="flex gap-3 ">
              <div>
                <div className="flex items-center gap-2">
                  <div className="bg-slate-100 rounded-xl px-3 py-2" >
                    {product.image}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
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

            <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full">
              ▼ {Math.abs(product.change.pct)}%
            </span>
          </div>

            </Link>
        ))}
      </div>
    </div>
  );
};

export default Lowprice;