import Image from "next/image";
import React from "react";
import logo from "../asset/logo-icon.png";
import { Button } from "@heroui/react";
interface DataI {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const Header = async() => {
      const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  const datas:DataI[] = await res.json();
  const DateTime = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div>
        <div className="border border-gray-200">
        <div className="container mx-auto py-2 flex justify-between items-center ">
      <div className="flex gap-2 items-center">
        <div className="bg-green-400 px-3 py-2 rounded-xl">
          <Image src={logo} height={30} width={30} alt="This is a logo " />
        </div>
        <div>
          <h2 className="text-2xl font-bold">বাজার দর</h2>
          <p>{DateTime}</p>
        </div>
      </div>
      <Button> Profile</Button>
    </div>
    
     </div>
     <div className="border border-gray-100">
            <div className="container mx-auto flex gap-10 py-2">
      {datas.map((data, ind) => (
        <div key={ind}>
            {data.icon}
           <span>
              {data.nameBn}
           </span>
        </div>
      ))}
    </div>
     </div>
    </div>
  );
   
};

export default Header;
