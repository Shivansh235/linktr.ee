"use client";
import React from 'react'
import { usePathname } from 'next/navigation';

const Footer = () => {
    
      const pathname = usePathname();
    const showFooter = ['/','/Template','/generate'].includes(pathname);
  return (
<> { showFooter &&
    <div className="footer bg-[#000000] pt-5">
    <div className='flex justify-evenly '>

      <img className='h-[12vh] rounded-lg w-[8vw]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/640px-Flag_of_Israel.svg.png" alt="Isreal flag" />

      <img className='h-[12vh] rounded-lg w-[8vw]' src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="Russian flag" />

      <img className='h-[12vh] rounded-lg w-[8vw]' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="Indian flag" />
      </div>
      <p className='flex flex-col text-center w-[50vw] mx-auto mt-7 text-white text-base'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>


    </div>}</>
  )
}

export default Footer
