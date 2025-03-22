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

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-12 items-start">
        {/* Left Section */}
        <div className="one flex flex-col items-center md:items-start">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
            Browse Categories
          </h1>

          {/* Hamburger for small screens */}
          <div className="md:hidden flex justify-center mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="font-medium">Categories</span>
            </button>
          </div>

          {/* Category Buttons (Responsive) */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } md:flex flex-col w-full sm:w-[70%] md:w-[20vw] justify-center gap-4 items-center mt-6 md:mt-10`}
          >
            {[
              "Templates",
              "E-books",
              "Plugins",
              "Social Media Kits",
              "Graphics",
              "Marketing Tools",
              "Business Resources",
              "Exclusive Content",
            ].map((category, index) => (
              <button
                key={index}
                className="py-2 w-full sm:w-56 md:w-56 text-center rounded-full font-medium bg-white hover:bg-slate-300 transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Single Image (Aligned with Template Button) */}
          <div className="flex justify-center mt-6 md:mt-10">
            <img
              className="h-[35vh] sm:h-[50vh] md:h-[60vh] w-[80vw] sm:w-[50vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
              src="/M1.webp"
              alt="Marketplace Item"
            />
          </div>
        </div>

        {/* Right Section (Images Aligned with Left Content) */}
        <div className="Two flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 mt-6 md:mt-16 mb-7">
          <img
            className="h-[35vh] sm:h-[50vh] md:h-[60vh] w-[80vw] sm:w-[50vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="/M2.webp"
            alt="Digital Asset 1"
          />
          <img
            className="h-[35vh] sm:h-[50vh] md:h-[60vh] w-[80vw] sm:w-[50vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="/M3.webp"
            alt="Digital Asset 2"
          />
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
