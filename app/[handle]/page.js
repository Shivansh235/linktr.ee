import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Footer2 from "@/components/Footer2"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise; // Fix variable name
    const db = client.db("BitTree");
    const collection = db.collection("links");
    const item = await collection.findOne({handle})// from database fetch the content and store it!
    if(!item){
      return notFound();
    }
    const item2 = { // for a sample take from database if you wanna remove then remove it!
    
      "_id": {
        "$oid": "67cfff6f47bb23d3aa288bdc"
      },
      "links": [
        {
          "link": "https://github.com/mde/ejs/wiki/Using-EJS-with-Express",
          "linkText": "Github"
        },
        {
          "link": "https://www.youtube.com/watch?v=izwkombjECA",
          "linkText": "Youtube"
        },
        {
          "link": "https://x.com/SHIVANSHKAS2005",
          "linkText": "X.com"
        }
      ],
      "handle": "Shivansh",
      "pic": "https://avatars.githubusercontent.com/u/186024054?s=400&u=c193c37b37eba9999a43efbb9cfb208d41377a5c&v=4"
    }
  
    return <div className="flex min-h-[120vh] bg-orange-300 justify-center 
    items-center">
        <div className="photo flex flex-col justify-center items-center">
       <img className="rounded-full w-28 top-10 absolute" src={item.pic} alt="your profile pic"/>
            <span className="font-bold text-xl absolute top-40">@{item.handle}</span>
            {item.desc && (<span className="absolute top-48 text-sm font-medium flex flex-col justify-center items-center w-72 ">{item.desc}</span>)}
            <div className="links absolute top-60 ">
              {item.links.map((item,index)=>{
                 return <Link href={item.link} key={index}><div className="py-3 px-28 hover:bg-orange-50 flex justify-center font-semibold text-lg bg-orange-100 rounded-lg my-4 mb-4" >
                     {item.linkText}
                 </div></Link> 
              })}
            </div>
        </div>
        <Footer2/>
    </div>
  }