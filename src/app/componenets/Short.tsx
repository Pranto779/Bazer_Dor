"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Sort = () => {
const router = useRouter();
const searchParams = useSearchParams();

const handleChange = (value: string) => {
const params = new URLSearchParams(searchParams.toString());

if (value) {
  params.set("sort", value);
} else {
  params.delete("sort");
}

router.push(`?${params.toString()}`);

};

return (
<div className="container mx-auto my-4 flex w-full items-center justify-end gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 sm:my-5 sm:px-5 sm:mx-2">
<div className="shrink-0 text-xs text-gray-500 sm:text-sm">
সাজান
</div>

  <select
    value={searchParams.get("sort") || ""}
    onChange={(e) => handleChange(e.target.value)}
    className="h-9 max-w-full min-w-0 rounded-lg border border-gray-200 bg-white px-2 text-xs text-gray-700 outline-none cursor-pointer sm:px-3 sm:text-sm"
  >
    <option value="">ডিফল্ট</option>
    <option value="low">দাম: কম থেকে বেশি</option>
    <option value="high">দাম: বেশি থেকে কম</option>
  </select>
</div>

);
};

export default Sort;