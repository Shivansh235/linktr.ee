import React from "react";
import {  FaTwitter, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const LearnPage = () => {
  const articles = [
    {
      title: "Maximizing Linktree for Your Brand",
      description: "Discover how to set up and optimize your Linktree for better engagement.",
      image: "/L1.webp",
    },
    {
      title: "Boosting Visibility with Linktree & SEO",
      description: "Best strategies to make your Linktree more visible and impactful.",
      image: "/L2.webp",
    },
    {
      title: "The Power of Linktree Analytics & Insights",
      description: "Understand how to analyze your audience and improve link performance.",
      image: "/L3.webp",
    },
  ];

  return (
    <div className="bg-indigo-900 min-h-screen pt-32 flex flex-col">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-white">Learn with Linktree</h1>
        <p className="text-gray-300 mt-2">
          Explore expert tips, resources, and insights to make the most of your Linktree.
        </p>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img src={article.image} alt={article.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">{article.title}</h2>
                <p className="text-gray-300 mt-2">{article.description}</p>
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-5 rounded-full font-semibold transform transition duration-300 hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-12 py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-bold mb-2">About Linktree</h3>
              <p>Linktree helps you share multiple links in one simple, customizable page.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-lg font-bold mb-2">Quick Links</h3>
              <ul>
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/Template" className="hover:text-white">Templates</Link></li>
                <li><Link href="/learn" className="hover:text-white">Learn</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-white text-lg font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-6 mt-2">
                <Link href="https://www.youtube.com/@SHIVANSHKASAUDHAN-i7k" className="text-gray-400 hover:text-white transition duration-300">
                  <FaYoutube size={20} />
                </Link>
                <Link href="https://x.com/SHIVANSHKAS2005" className="text-gray-400 hover:text-white transition duration-300">
                  <FaTwitter size={20} />
                </Link>
                <Link href="https://github.com/shivansh235" className="text-gray-400 hover:text-white transition duration-300">
                  <FaGithub size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/shivansh-kasaudhan-341596294/" className="text-gray-400 hover:text-white transition duration-300">
                  <FaLinkedinIn size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Linktree. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnPage;
