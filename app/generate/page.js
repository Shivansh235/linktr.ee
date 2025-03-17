"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const Generate = () => {  // Capitalized function name

  const searchParams = useSearchParams()
  const [links, setLinks] = useState([{ link: "", linkText: "" }]);
  const [handle, setHandle] = useState(searchParams.get("handle"));
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");

  const addLink = () => {
    setLinks(links.concat({ link: "", linkText: "" }));
  };

  const handlechange = (index, link, linkText) => {
    setLinks((initialLinks) =>
      initialLinks.map((item, i) =>
        i === index ? { link: link, linkText: linkText } : item
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

    const response = await fetch("http://localhost:3000/api/generate", requestOptions);
    const result = await response.json();

    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linkText: "" }]); // Reset links properly
      setHandle("");
      setPic("");
      setDesc("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#225abf] text-white min-h-[120vh] grid grid-cols-2">
      <div className="col1 flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl font-bold">Create your Bittree</h1>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="font-semibold text-2xl mt-5">Step 1: Claim your Handle</h2>
          <div className="mx-4">
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="px-4 py-2 text-black rounded-3xl w-72 focus:outline-blue-700"
              type="text"
              placeholder="Choose a Handle"
            />
          </div>

          <h2 className="font-semibold text-2xl">Step 2: Add Links</h2>
          {links.map((item, index) => (
            <div key={index} className="flex flex-row w-[30vw]">
              <div className="">
                <input
                  value={item.link}
                  onChange={(e) => handlechange(index, e.target.value, item.linkText)}
                  className="px-4 py-2 text-black rounded-3xl w-56 focus:outline-blue-700"
                  type="text"
                  placeholder="Enter link"
                />
              </div>

              <div className="item flex justify-center items-center ml-32 gap-4">
                <input
                  value={item.linkText}
                  onChange={(e) => handlechange(index, item.link, e.target.value)}
                  className="px-4 py-2 text-black rounded-3xl w-56 absolute left-30 space-x-3 focus:outline-blue-700"
                  type="text"
                  placeholder="Enter link text"
                />
              </div>
            </div>
          ))}

          <button
            onClick={addLink}
            className="p-5 py-2 font-bold bg-blue-950 text-white rounded-3xl hover:bg-slate-900"
          >
            Add link
          </button>

          <h2 className="font-semibold text-2xl flex justify-center items-center">
            Step 3: Add Picture and Description
          </h2>

          <div className="flex flex-col mx-4 gap-4 w-fit">
            <input
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              className="px-4 py-2 text-black rounded-3xl w-72 focus:outline-blue-700"
              type="text"
              placeholder="Enter link to your picture"
            />

            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="px-4 py-2 text-black rounded-3xl w-72 focus:outline-blue-700"
              type="text"
              placeholder="Enter description to your picture"
            />

            <button
              onClick={onSubmit}
              disabled={!pic || !handle || !links[0]?.linkText}
              className="disabled:bg-slate-600 p-5 py-2 font-bold bg-blue-950 text-white rounded-3xl mb-3 hover:bg-slate-900"
            >
              Create your bitlink
            </button>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen flex">
        <img
          className="h-full object-contain"
          src="https://assets.production.linktr.ee/auth/2387/media/banner-login-desktop.5084c2cf19da310f7e78.png"
          alt="homepage image"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Generate; // Capitalized component name
