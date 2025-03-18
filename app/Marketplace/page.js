import React from 'react'

const Marketplace = () => {
  return (
    <div className="bg-purple-400 min-h-[150vh] px-4 md:px-8">
      <p className='text-center font-bold flex pt-40 flex-col text-4xl md:text-6xl'>Discover Unique Digital Assets</p>
      <p className='text-center font-bold flex flex-col text-4xl md:text-6xl'>Linktree Marketplace</p>

      <p className='w-full md:w-[60vw] flex flex-col mx-auto my-4 font-medium text-sm md:text-base text-slate-600'>
        Explore exclusive digital products, templates, and tools designed for creators and businesses. 
        Customize your Linktree experience with premium offerings from top sellers.
      </p>

      <section className='grid grid-cols-1 md:grid-cols-2 min-h-[100vh] gap-8'>
        <div className="one">
          <h1 className='font-bold text-2xl md:text-3xl ml-6 md:ml-24 mt-10 md:mt-20'>Browse Categories</h1>
          <div className='buttons flex flex-col ml-6 md:ml-16 cursor-pointer w-full md:w-[20vw] justify-center gap-4 items-center mt-6 md:mt-10'>
            {['Templates', 'E-books', 'Plugins', 'Social Media Kits', 'Graphics', 'Marketing Tools', 'Business Resources', 'Exclusive Content'].map((category, index) => (
              <span key={index} className='py-2 hover:bg-slate-300 w-full md:w-56 text-center rounded-full font-medium bg-white'>
                <button>{category}</button>
              </span>
            ))}
          </div>
          <div className="img flex justify-center md:absolute md:top-[62vh] md:left-[29vw] mt-8 md:mt-0">
            <img className='h-[40vh] md:h-[80vh] w-[45vw] md:w-[20vw] rounded-2xl' src="/M1.webp" alt="Marketplace Item" />
          </div>
        </div>
        <div className="Two">
          <div className="imgs flex flex-col md:flex-row gap-8 justify-center md:absolute md:top-[62vh] ml-0 md:ml-7 mt-8 md:mt-0">
            <img className='h-[40vh] md:h-[80vh] w-[45vw] md:w-[20vw] rounded-2xl' src="/M2.webp" alt="Digital Asset 1" />
            <img className='h-[40vh] md:h-[80vh] w-[45vw] md:w-[20vw] rounded-2xl' src="/M3.webp" alt="Digital Asset 2" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-500  text-white mt-7 py-6 px-4 text-center flex flex-col gap-2 items-center">
        <p className="font-semibold text-lg">Linktree Marketplace</p>
        <p className="text-sm md:text-base">Discover and customize your digital experience with premium assets.</p>
        <div className="flex gap-6 mt-2">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
        <p className="text-xs mt-2">&copy; {new Date().getFullYear()} Linktree. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Marketplace
