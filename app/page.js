"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  const GetforFree = () => {
    router.push(`/generate`);
  };

  return (
    <main>
      <section className="bg-[#254f1a] text-white min-h-screen grid grid-cols-1 md:grid-cols-2 p-6  md:p-12">
        <div className="flex flex-col justify-center gap-4 pl-24 text-center md:text-left">
          <p className="text-yellow-300 text-4xl md:text-6xl font-bold mt-10 md:mt-24">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text-yellow-400 text-lg md:text-xl font-medium">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate, and sell from your social media profiles.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-3 mt-5">
            <input
              value={text || ""}
              onChange={(e) => setText(e.target.value)}
              className="p-4 rounded-lg placeholder-gray-500 text-black w-full md:w-auto"
              type="text"
              placeholder="Enter your handle"
            />
            <button
              onClick={createTree}
              className="bg-purple-200 py-4 px-5 rounded-full text-black text-base font-medium hover:bg-purple-300 mt-3 md:mt-0"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 md:mt-32">
          <Image
            height={288}
            width={288}
            src="https://techcrunch.com/wp-content/uploads/2024/03/Linktree-featured.jpeg?w=377"
            alt="homepage image"
            unoptimized
            className="w-60 md:w-72"
          />
        </div>
      </section>

      <section className="bg-red-500 min-h-screen text-white grid grid-cols-1 md:grid-cols-2 p-6 md:p-12">
        <div className="flex justify-center items-center mt-10 md:mt-40">
          <Image
            height={488}
            width={388}
            src="https://edge.website.production.linktr.ee/static/0cabaf49ec70921e31c45ca9e88f2ef9/9de2e/CreateCover.webp"
            alt="Free trial image"
            unoptimized
            className="w-60 md:w-96"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left gap-4">
          <p className="text-yellow-300 text-4xl md:text-6xl font-bold mt-10 md:mt-36">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-yellow-400 text-lg md:text-xl font-medium">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events, and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <div className="mt-6">
            <button
              onClick={GetforFree}
              className="bg-yellow-200 py-4 px-6 rounded-full text-black text-base font-medium hover:bg-yellow-100"
            >
              Get started for free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
