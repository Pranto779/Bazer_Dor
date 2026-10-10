"use client";

import Link from "next/link";
import { DataI } from "../Allts/Typescript";
import { usePathname } from "next/navigation";

const Nav = ({
data,
activeCategory,
}: {
data: DataI;
activeCategory?: string;
}) => {
const path = usePathname();
const categoryPath = `/category/${data.slug}`;

const isActive =
path === categoryPath ||
path.startsWith(`${categoryPath}/`) ||
activeCategory === data.slug;

return ( <div className="snap-start shrink-0">
<Link
href={categoryPath}
className={`${
          isActive ? "bg-green-400 border text-white border-green-700" : ""
        } inline-flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 text-xs font-bold rounded-2xl transition-colors duration-200 sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2`}
>
{data.icon} <span>{data.nameBn}</span> </Link> </div>
);
};

export default Nav;
