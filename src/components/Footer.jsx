import React from 'react'
import { FaCanadianMapleLeaf } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-400 p-8'>
      <div className="flex items-center justify-center text-white gap-3 flex-col">
        <div className="flex items-center justify-center gap-3">
        <span className='text-2xl'><FaCanadianMapleLeaf/></span>
        <h1 className='font-bold text-2xl leading-relaxed'>Thanks for visiting my portfolio</h1>
        <span className='text-2xl'><FaCanadianMapleLeaf/></span>
        </div>
        <p>Ready to build something amazing together? Let's connect!</p>
        <p>Made with ❤️ by Muhammad Bilal</p>
       <div className="h-[0.5px] bg-white w-[80%] rounded"></div>
        <p>© 2025 Muhammad Bilal. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
