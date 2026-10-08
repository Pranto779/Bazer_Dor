import React from "react";

const Footer = () => {
  return (
    <div className="border bg-white border-slate-100 py-3 px-4 sm:px-6 md:px-10 lg:px-20 fixed bottom-0 right-0 left-0 mt-10 z-50">
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4 text-center md:text-left">

        <p className="text-xs sm:text-sm">
          বাজার দর - বাজারদরের থেকে বেশি দাম রাখা
        </p>

        <p className="text-xs sm:text-sm">
          সকল বাজার দরদাতা। বাজারের একটি নির্দিষ্ট মূল্য প্রতিফলিত করে না।
        </p>

      </div>
    </div>
  );
};

export default Footer;