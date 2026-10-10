import React from "react";

const Footer = () => {
return (
<footer className="mt-auto border border-slate-100 bg-white px-4 py-3 sm:px-6 md:px-10 lg:px-20">
<div className="flex flex-col justify-between gap-2 text-center md:flex-row md:gap-4 md:text-left">
<p className="text-xs sm:text-sm">
বাজার দর - বাজারদরের থেকে বেশি দাম রাখা
</p>

    <p className="text-xs sm:text-sm">
      সকল বাজার দরদাতা। বাজারের একটি নির্দিষ্ট মূল্য প্রতিফলিত করে না।
    </p>
  </div>
</footer>

);
};

export default Footer;