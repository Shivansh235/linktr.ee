import React from 'react';

const Marketplace = () => {
  return (
    <div className="bg-purple-400 min-h-screen px-4 md:px-8 pt-32 md:pt-40">
      <p className="text-center font-bold text-4xl md:text-6xl">
        Discover Unique Digital Assets
      </p>
      <p className="text-center font-bold text-4xl md:text-6xl">
        Linktree Marketplace
      </p>

      <p className="max-w-[90vw] md:w-[60vw] mx-auto my-4 font-medium text-sm md:text-base text-slate-600 text-center">
        Explore exclusive digital products, templates, and tools designed for creators and businesses. 
        Customize your Linktree experience with premium offerings from top sellers.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-12">
        {/* Left Section */}
        <div className="one flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left">
            Browse Categories
          </h1>
          <div className="buttons flex flex-col w-full md:w-[20vw] justify-center gap-4 items-center mt-6 md:mt-10">
            {[
              'Templates',
              'E-books',
              'Plugins',
              'Social Media Kits',
              'Graphics',
              'Marketing Tools',
              'Business Resources',
              'Exclusive Content'
            ].map((category, index) => (
              <button
                key={index}
                className="py-2 w-full md:w-56 text-center rounded-full font-medium bg-white hover:bg-slate-300 transition"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Single Image */}
          <div className="flex justify-center mt-8 md:mt-12">
            <img
              className="h-[40vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
              src="/M1.webp"
              alt="Marketplace Item"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="Two flex flex-col md:flex-row justify-center items-center gap-8 mt-8 md:mt-12">
          <img
            className="h-[40vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="/M2.webp"
            alt="Digital Asset 1"
          />
          <img
            className="h-[40vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="/M3.webp"
            alt="Digital Asset 2"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-500 text-white mt-12 py-6 px-4 text-center flex flex-col gap-2 items-center">
        <p className="font-semibold text-lg">Linktree Marketplace</p>
        <p className="text-sm md:text-base">
          Discover and customize your digital experience with premium assets.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Linktree. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Marketplace;
