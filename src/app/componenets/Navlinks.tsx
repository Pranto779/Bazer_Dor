
import Link from "next/link";
import { getCategories } from "../Allapi/Api";

const Navlinks = async () => {
  const datas = await getCategories();

  return (
    <div className="container mx-auto flex gap-4 sm:gap-6 md:gap-10 py-2 px-3 sm:px-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
      {datas.map((data, ind) => (
        <div key={ind} className="snap-start shrink-0">
          <Link
            href={`/category/${data.slug}`}
            className="text-black hover:text-green-600 transition-colors duration-200"
          >
            {data.icon}
            <span>{data.nameBn}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;

