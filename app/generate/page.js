"use client";
import React, { useState, Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const GeneratePage = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linkText: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle") || "");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const addLink = () => {
    setLinks([...links, { link: "", linkText: "" }]);
  };

  const handleChange = (index, link, linkText) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link, linkText } : item
      )
    );
  };

  const onSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ links, handle, pic, desc });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch("/api/generate", requestOptions);
    const result = await response.json();

    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linkText: "" }]);
      setHandle("");
      setPic("");
      setDesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#225abf] text-white min-h-screen grid grid-cols-1 md:grid-cols-2 p-5">
      <div className="flex flex-col justify-center items-center mt-32 md:mt-32">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Create your Bittree</h1>
        <div className="flex flex-col justify-center items-center gap-5 w-full max-w-md">
          <h2 className="font-semibold text-xl md:text-2xl mt-5 text-center">Step 1: Claim your Handle</h2>
          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="px-4 py-2 text-black rounded-3xl w-full focus:outline-blue-700"
            type="text"
            placeholder="Choose a Handle"
          />

          <h2 className="font-semibold text-xl md:text-2xl text-center">Step 2: Add Links</h2>
          {links.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full gap-4">
              <input
                value={item.link}
                onChange={(e) => handleChange(index, e.target.value, item.linkText)}
                className="px-4 py-2 text-black rounded-3xl w-full md:w-1/2 focus:outline-blue-700"
                type="text"
                placeholder="Enter link"
              />
              <input
                value={item.linkText}
                onChange={(e) => handleChange(index, item.link, e.target.value)}
                className="px-4 py-2 text-black rounded-3xl w-full md:w-1/2 focus:outline-blue-700"
                type="text"
                placeholder="Enter link text"
              />
            </div>
          ))}

          <button
            onClick={addLink}
            className="p-2 md:p-3 font-bold bg-blue-950 text-white rounded-3xl hover:bg-slate-900 w-full"
          >
            Add link
          </button>

          <h2 className="font-semibold text-xl md:text-2xl text-center">Step 3: Add Picture and Description</h2>

          <input
            value={pic}
            onChange={(e) => setPic(e.target.value)}
            className="px-4 py-2 text-black rounded-3xl w-full focus:outline-blue-700"
            type="text"
            placeholder="Enter link to your picture"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="px-4 py-2 text-black rounded-3xl w-full focus:outline-blue-700"
            type="text"
            placeholder="Enter description to your picture"
          />

          <button
            onClick={onSubmit}
            disabled={!pic || !handle || !links[0]?.linkText}
            className="disabled:bg-slate-600 p-2 md:p-3 font-bold bg-blue-950 text-white rounded-3xl hover:bg-slate-900 w-full"
          >
            Create your bitlink
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full mt-14 pr-20 h-screen">
        <img
          className="h-full w-full object-cover"
          src="https://assets.production.linktr.ee/auth/2387/media/banner-login-desktop.5084c2cf19da310f7e78.png"
          alt="homepage image"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

const Generate = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <GeneratePage />
  </Suspense>
);

export default Generate;
