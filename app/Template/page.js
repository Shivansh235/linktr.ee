import React from "react";

const Template = () => {
  return (
    <div className="bg-slate-300 min-h-screen p-4 pt-32 md:pt-40">
      <p className="text-center font-bold text-4xl md:text-6xl">
        Influencer And Creator
      </p>
      <p className="text-center font-bold text-4xl md:text-6xl">
        Link In Bio Templates
      </p>

      <p className="w-[90%] md:w-[60vw] mx-auto my-6 font-medium text-base text-slate-500 text-center">
        Explore these curated link in bio templates that are perfect for influencers and creators. You can easily customize any Linktree templates then link in bio to share your stunning new influencer and creator Linktree with your entire audience.
      </p>

      

      {/* Buttons and Images in a single row */}
      <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 p-6 mt-12">
        {/* Browse By Buttons */}

      

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {[
            "Fashion",
            "Health & Fitness",
            "Influencer & Creator",
            "Marketing",
         
            "Small Business",
            "Social Media",
          
          ].map((category, index) => (
            <button
              key={index}
              className="py-2 px-4 w-48 text-center rounded-full font-medium bg-white hover:bg-slate-300 transition"
            >
              {category}
            </button>
          ))}
        </div>

    

        {/* Images in a row */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "https://linktr.ee/_gatsby/image/1ba0ec7bdec12ff9d809880e18bb56fe/75b9fc6270068599aadfb3f334c36499/star.avif",
            "https://linktr.ee/_gatsby/image/874cd1d47a98668e9bfad65f0aaa287a/75b9fc6270068599aadfb3f334c36499/smythe.avif",
            "https://linktr.ee/_gatsby/image/e810bae28dd65a80543e5fbcea004752/75b9fc6270068599aadfb3f334c36499/russell.avif",
          ].map((src, index) => (
            <img
              key={index}
              className="h-[50vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition object-cover"
              src={src}
              alt={`Template ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Template;
