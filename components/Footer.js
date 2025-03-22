"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const showFooter = ["/", "/Template", "/generate"].includes(pathname);

  return (
    <>
      {showFooter && (
        <div className="footer bg-black pt-5 pb-6">
          <div className="flex justify-evenly px-4 sm:px-0">
            <img
              className="h-[10vh] w-[15vw] sm:h-[12vh] sm:w-[8vw] rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png"
              alt="Israel flag"
            />
            <img
              className="h-[10vh] w-[15vw] sm:h-[12vh] sm:w-[8vw] rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"
              alt="Russian flag"
            />
            <img
              className="h-[10vh] w-[15vw] sm:h-[12vh] sm:w-[8vw] rounded-lg object-cover"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="Indian flag"
            />
          </div>

          <p className="text-center w-[90vw] sm:w-[50vw] mx-auto mt-7 text-white text-sm sm:text-base px-4 sm:px-0">
            We acknowledge the Traditional Custodians of the land on which our office stands, 
            The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present, and emerging. 
            Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066.
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
