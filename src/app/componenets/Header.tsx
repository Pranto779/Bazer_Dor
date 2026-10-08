import Image from "next/image";
import logo from "../asset/logo-icon.png";
import { Button } from "@heroui/react";
import Navlinks from "./Navlinks";
import DateTime from "./Time";
import Link from "next/link";

const Header = async () => {
  return (
    <div className="bg-white">

      <div className="border border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2 flex justify-between items-center gap-3">

          <div className="flex gap-2 items-center min-w-0">

            <div className="bg-green-400 px-2 sm:px-3 py-2 rounded-xl shrink-0">
              <Image
                src={logo}
                height={30}
                width={30}
                alt="This is a logo"
              />
            </div>

            <div className="min-w-0">

              <Link href="/">
                <h2 className="text-xl sm:text-2xl font-bold">
                  বাজার দর
                </h2>
              </Link>

              <p className="text-xs sm:text-sm">
                <DateTime />
              </p>

            </div>

          </div>

          <Button
            size="sm"
            className="shrink-0"
          >
            Profile
          </Button>

        </div>
      </div>

      <div className="border border-gray-100 overflow-x-auto">
        <Navlinks />
      </div>

    </div>
  );
};

export default Header;