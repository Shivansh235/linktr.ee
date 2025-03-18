import React from "react";
import Link from "next/link";
import { FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="bg-orange-400 w-screen fixed bottom-0 left-0 flex flex-col items-center justify-center text-white py-3">
      <div className="flex space-x-6 text-2xl">
        <Link href="https://github.com/shivansh235" target="_blank">
          <FaGithub className="hover:text-gray-200 transition duration-300" />
        </Link>
        <Link href="https://www.youtube.com/@codewithharry" target="_blank">
          <FaYoutube className="hover:text-gray-200 transition duration-300" />
        </Link>
        <Link href="https://x.com/SHIVANSHKAS2005" target="_blank">
          <FaTwitter className="hover:text-gray-200 transition duration-300" />
        </Link>
      </div>
      <p className="text-sm mt-2 text-center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer2;

