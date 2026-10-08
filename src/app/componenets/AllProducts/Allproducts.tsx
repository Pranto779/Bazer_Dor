import { getProducts } from "@/app/Allapi/Api";
import Link from "next/link";

const AllProduct = async () => {
  const products = await getProducts();

  return (
    <div className="bg-[#f5f6f4] p-4 rounded-xl container mx-auto" id="product">

      <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
        সব পণ্য
      </h2>

      <p className="text-sm text-gray-600">
        মোট {products.length}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

        {products.map((product) => (
   <Link key={product.id} href={`./category/product/${product.id}`}>
          <div
          
            className="bg-white border rounded-xl p-4 flex justify-between items-center hover:border-slate-300 hover:translate-y-1 transition-all duration-200"
          >
         

            <div className="flex gap-3">

              <div>

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
        ))}

      </div>
    </div>
  );
};

export default AllProduct;