"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {LogOut } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user?.name) setName(user.name);
  }, [user?.name]);
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("নাম লিখুন");
      return;
    }
    try {
      setLoading(true);
      const { error } = await authClient.updateUser({ name: name.trim() });
      if (error) {
        toast.error("আপডেট করা যায়নি!");
        return;
      }
      toast.success("প্রোফাইল আপডেট হয়েছে!");
    } catch {
      toast.error("আপডেট করা যায়নি!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f5f8f4] py-10">
      {" "}
      <div className="mx-auto max-w-3xl px-4">
        {" "}
        <h1 className="mb-2 text-3xl font-bold text-gray-800 px-4">
          {" "}
          আমার প্রোফাইল{" "}
        </h1>{" "}
        <p className="my-2 px-4 text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        <div className="mb-6 flex items-center justify-between rounded-3xl  bg-white p-6 shadow-sm">
          {" "}
          <div className="flex items-center gap-4">
            {" "}
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-green-100">
              {" "}
              {user?.image ? (
                <Image
                  src={user.image}
                  alt="প্রোফাইল"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xl font-bold text-green-700">
                  {" "}
                  {user?.name?.charAt(0) || "U"}{" "}
                </div>
              )}{" "}
            </div>{" "}
            <div>
              {" "}
              <h2 className="text-xl font-semibold text-gray-800">
                {" "}
                {user?.name}{" "}
              </h2>{" "}
              <p className="text-sm text-gray-500">{user?.email}</p>{" "}
            </div>{" "}
          </div>{" "}
         <Button
  onClick={async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সফলভাবে সাইন আউট হয়েছে!");
            window.location.href = "/";
          },
          onError: () => {
            toast.error("সাইন আউট করা যায়নি!");
          },
        },
      });
    } catch {
      toast.error("সাইন আউট করা যায়নি!");
    }
  }}
  className="rounded-xl text-red-500 border bg-transparent border-red-500 px-5 py-3 text-sm font-medium transition"
>
  <LogOut size={16} />সাইন আউট
</Button>
        </div>{" "}
        <div className="rounded-3xl  bg-white p-6 shadow-sm">
          {" "}
          <h3 className="mb-5 text-xl font-semibold text-gray-800">
            {" "}
             তথ্য{" "}
          </h3>{" "}
          <form onSubmit={handleUpdate}>
            {" "}
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {" "}
             নাম{" "}
            </label>{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="আপনার নাম লিখুন"
              className="mb-5 h-12 w-full rounded-xl border border-slate-200  px-4 outline-none focus:border-green-600"
            />{" "}
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-green-600 font-medium text-white hover:bg-green-700 disabled:opacity-60"
            >
              {" "}
              {loading ? "আপডেট হচ্ছে..." : "আপডেট"}{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
