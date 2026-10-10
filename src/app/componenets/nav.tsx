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
        } px-3 font-bold  py-1 text-sm rounded-2xl text-black transition-colors duration-200 `}
>
{data.icon} <span>{data.nameBn}</span> </Link> </div>
);
};

export default Nav;
