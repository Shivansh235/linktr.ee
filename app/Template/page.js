import React from 'react'

const Template = () => {
  return (
    <div className= "bg-slate-300 min-h-[150vh]" >
        <p className='text-center font-bold flex pt-40 flex-col text-6xl'>Influencer And Creator</p>
        <p className='text-center font-bold flex flex-col text-6xl'>Link In Bio Templates</p>

        <p className='w-[60vw] flex flex-col mx-auto my-4 font-medium text-base text-slate-500'>Explore these curated link in bio templates that are perfect for influencers and creators. You can easily customize any Linktree templates then link in bio to share your stunning new influencer and creator Linktree with your entire audience.

</p>

    <section className='grid grid-cols-2 min-h-[100vh]'>
        <div className="one ">

            <h1 className='font-bold text-3xl ml-24 mt-20'>Browse by</h1>

        <div className='buttons flex flex-col ml-16 cursor-pointer w-[20vw] justify-center gap-4 items-center mt-10'>
            <span className='py-2  hover:bg-slate-300  w-56 text-center rounded-full font-medium bg-white '>
            <button>Fashion</button>
            </span>
           <span className=' py-2 w-56  hover:bg-slate-300 text-center rounded-full font-medium bg-white'>
            <button>Health & Fitness</button></span>
            <span className=' py-2  hover:bg-slate-300  w-56 text-center rounded-full font-medium bg-white'><button>Influencer & creator</button></span>
            <span className=' py-2 w-56  hover:bg-slate-300 text-center  rounded-full font-medium bg-white'>
            <button>marketing</button></span>
            <span className=' py-2 w-56  hover:bg-slate-300 text-center rounded-full font-medium bg-white'> <button>Music</button></span>

            <span className=' py-2 w-56  hover:bg-slate-300 text-center rounded-full font-medium bg-white'> <button>Small bussiness</button></span>

            <span className=' py-2 w-56  hover:bg-slate-300 text-center rounded-full font-medium bg-white'> <button>Social Media</button></span>

            <span className=' py-2 w-56  hover:bg-slate-300 text-center rounded-full font-medium bg-white'> <button>Sports</button></span>
            </div>
           
           <span className="img flex flex-row absolute top-[62vh] left-[29vw]">
            <img className='h-[80vh] hover:bg-slate-200 w-[20vw] rounded-2xl  ' src="https://linktr.ee/_gatsby/image/1ba0ec7bdec12ff9d809880e18bb56fe/75b9fc6270068599aadfb3f334c36499/star.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Fstar.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=4e942a7098e65aab0114f983b66cd278" alt="" />
           </span>

        </div>
        <div className="Two">
            <div className="imgs gap-8 flex flex-row absolute top-[62vh] ml-7">
                <img className='hover:bg-slate-200 h-[80vh]  w-[20vw] rounded-2xl' src="https://linktr.ee/_gatsby/image/874cd1d47a98668e9bfad65f0aaa287a/75b9fc6270068599aadfb3f334c36499/smythe.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Fsmythe.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=b69ee014e2b7ffba70de507e9184c9ed" alt="" />

                <img className='hover:bg-slate-200 h-[80vh]  w-[20vw]  rounded-2xl' src="https://linktr.ee/_gatsby/image/e810bae28dd65a80543e5fbcea004752/75b9fc6270068599aadfb3f334c36499/russell.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F12%2Frussell.png&a=w%3D786%26h%3D1704%26fm%3Davif%26q%3D75&cd=0eb059f64b69ad7cdc9273696cfc0670" alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Template
