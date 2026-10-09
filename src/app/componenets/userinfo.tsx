"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, UserRound, LogOut } from "lucide-react";
import toast from "react-hot-toast";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    if (loading) return;

    setLoading(true);

    const toastId = toast.loading("লগআউট হচ্ছে!", {
      position: "top-center",
    });

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("লগআউট করা যায়নি! আবার চেষ্টা করুন!", {
          id: toastId,
          duration: 3000,
        });
        return;
      }

      setOpen(false);

      toast.success("সফলভাবে লগআউট হয়েছে!", {
        id: toastId,
        duration: 3000,
      });
    } catch (error) {
      console.error("Logout error:", error);

      toast.error("সমস্যা হয়েছে! আবার চেষ্টা করুন!", {
        id: toastId,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {user ? (
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg p-1 transition hover:bg-gray-100"
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-green-500 ring-offset-2">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-green-100 text-green-700">
                  <UserRound size={15} />
                </div>
              )}
            </div>

            <span className="max-w-28 truncate text-sm font-medium text-gray-800">
              {user.name}
            </span>

            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <>
              <button
                type="button"
                aria-label="Close dropdown"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setOpen(false)}
              />

              <div className="absolute right-0 top-full z-50 mt-3 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl">
                <div className="border-b border-gray-100 px-3 py-2">
                  <p className="truncate text-sm font-semibold text-gray-800">
                    {user.name}
                  </p>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                >
                  <UserRound size={16} />
                  প্রোফাইল
                </Link>

                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={loading}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <LogOut size={16} />
                  {loading ? "লগআউট হচ্ছে..." : "লগআউট"}
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Link href="/api/sign-in">
            <Button className="rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100">
              সাইন ইন
            </Button>
          </Link>

          <Link href="/api/sign-up">
            <Button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600">
              সাইন আপ
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
