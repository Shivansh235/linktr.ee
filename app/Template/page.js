import React from 'react';

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

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh] gap-10 p-6 mt-12">
        <div className="one">
          <h1 className="font-bold text-2xl md:text-3xl text-center md:text-left md:ml-24 mt-10 md:mt-20">
            Browse by
          </h1>

          <div className="buttons flex flex-col mx-auto md:ml-16 w-full md:w-[20vw] justify-center gap-4 items-center mt-6 md:mt-10">
            {[
              'Fashion',
              'Health & Fitness',
              'Influencer & Creator',
              'Marketing',
              'Music',
              'Small Business',
              'Social Media',
              'Sports'
            ].map((category, index) => (
              <button
                key={index}
                className="py-2 w-56 text-center rounded-full font-medium bg-white hover:bg-slate-300 transition"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex justify-center md:justify-start mt-16 ">
            <img
              className="h-[50vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
              src="https://linktr.ee/_gatsby/image/1ba0ec7bdec12ff9d809880e18bb56fe/75b9fc6270068599aadfb3f334c36499/star.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Fstar.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=4e942a7098e65aab0114f983b66cd278"
              alt="Template"
            />
          </div>
        </div>

        <div className="Two flex flex-col md:flex-row gap-8 justify-center items-center mt-16">
          <img
            className="h-[50vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="https://linktr.ee/_gatsby/image/874cd1d47a98668e9bfad65f0aaa287a/75b9fc6270068599aadfb3f334c36499/smythe.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Fsmythe.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=b69ee014e2b7ffba70de507e9184c9ed"
            alt="Template 2"
          />
          <img
            className="h-[50vh] md:h-[80vh] w-[70vw] md:w-[20vw] rounded-2xl hover:bg-slate-200 transition"
            src="https://linktr.ee/_gatsby/image/e810bae28dd65a80543e5fbcea004752/75b9fc6270068599aadfb3f334c36499/russell.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Frussell.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=0eb059f64b69ad7cdc9273696cfc0670"
            alt="Template 3"
          />
        </div>
      </section>
    </div>
  );
};

export default Template;
