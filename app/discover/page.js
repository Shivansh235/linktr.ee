import React from 'react';

const Discover = () => {
  const categories = [
    { name: 'Music', image: '/health.webp' },
    { name: 'Fashion', image: '/Art2.webp' },
    { name: 'Health & Fitness', image: '/fitness.webp' },
    { name: 'Travel', image: '/travel.webp' },
    { name: 'Technology', image: '/techno.webp' },
    { name: 'Food', image: '/food.webp' },
    { name: 'Art', image: '/Art.webp' },
    { name: 'Photography', image: '/photography.webp' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between pt-[80px] md:pt-[120px]">
      {/* Header Section */}
      <div className="py-12 px-4 md:px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Discover Amazing Content
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore a variety of curated categories to find content that resonates with you. Whether you are into music, fashion, fitness, or travel, we have got something for everyone!
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16 py-6">
        {categories.map((category, index) => (
          <div key={index} className="relative group">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-xl font-semibold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p className="text-lg font-semibold">Join the Discovery</p>
        <p className="text-sm mt-2">
          Stay updated with the latest trends and content across various categories.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Explore More
          </button>
        </div>
        <p className="text-xs mt-4">&copy; 2025 Discover. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Discover;
