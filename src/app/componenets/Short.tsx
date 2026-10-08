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
    <div className="flex justify-end items-center container mx-auto my-5 rounded-2xl bg-white  border py-3 px-5  gap-2">
      <div className="text-sm text-gray-500">
        সাজানো
      </div>

      <select
        defaultValue={searchParams.get("sort") || ""}
        onChange={(e) => handleChange(e.target.value)}
        className="
          h-9
          rounded-lg
          border
          border-gray-200
          bg-white
          px-3
          text-sm
          text-gray-700
          outline-none
          cursor-pointer
        "
      >
        <option value="">ডিফল্ট</option>
        <option value="low">কম → বেশি</option>
        <option value="high">বেশি → কম</option>
      </select>
    </div>
  );
}
export default Sort