"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons

const Marketplace = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-green-300 min-h-screen px-4 md:px-8 pt-32 md:pt-40">
      <p className="text-center font-bold text-3xl sm:text-4xl md:text-6xl">
        Discover Unique Digital Assets
      </p>
      <p className="text-center font-bold text-3xl sm:text-4xl md:text-6xl">
        Linktree Marketplace
      </p>

      <p className="max-w-[90vw] md:w-[60vw] mx-auto my-4 font-medium text-sm sm:text-base md:text-lg text-slate-600 text-center">
        Explore exclusive digital products, templates, and tools designed for creators and businesses.
        Customize your Linktree experience with premium offerings from top sellers.
      </p>

      {/* Buttons & Images in a single row */}
      <section className="flex flex-col md:flex-row flex-wrap justify-center gap-9 p-6 mt-8">
        {/* Browse Categories */}
        <div className="flex flex-row justify-center md:justify-start gap-4">
          {[
            "Templates",
            "E-books",
           
            "Social Media Kits",
            "Graphics",
            "Marketing Tools",
            "Business Resources",
           
          ].map((category, index) => (
            <button
              key={index}
              className="py-2 px-4 w-48 text-center rounded-full font-medium bg-white hover:bg-slate-300 transition"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6">
          {["/M1.webp", "/M2.webp", "/M3.webp"].map((src, index) => (
            <img
              key={index}
              className="h-[35vh] sm:h-[50vh] md:h-[60vh] w-[80vw] sm:w-[50vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition object-cover"
              src={src}
              alt={`Digital Asset ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-500 text-white min-w-full py-4 px-4 text-center flex flex-col gap-1 items-center">
        <p className="font-semibold text-base md:text-lg">Linktree Marketplace</p>
        <p className="text-xs md:text-sm">
          Discover and customize your digital experience with premium assets.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-1">
          <a href="#" className="hover:text-gray-300 text-xs md:text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 text-xs md:text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 text-xs md:text-sm">
            Support
          </a>
        </div>
        <p className="text-[10px] md:text-xs mt-1">
          &copy; {new Date().getFullYear()} Linktree. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Marketplace;
