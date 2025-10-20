import React from 'react'
import { BsEnvelopeAt, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin, FaGithub  } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-4xl font-bold mt-8'>Get In Touch</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
      <p className='text-gray-600 w-[70%] text-center m-auto text-lg mt-4 mb-12'>I'm actively seeking new opportunities in Pakistan or remote positions. Let's discuss how I can contribute to your next project!</p>
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="flex gap-4 items-center p-8 shadow">
          <div className="">
            <p className='bg-blue-200 text-2xl rounded text-blue-600 p-2'><BsEnvelopeAt /></p>
          </div>
          <div className="">
            <h1 className='font-bold text-xl'>Email</h1>
            <p className='text-gray-600'>mbilal45422@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-4 items-center p-8 shadow">
          <div className="">
            <p className='bg-blue-200 text-2xl rounded text-blue-600 p-2'><BsWhatsapp /></p>
          </div>
          <div className="">
            <h1 className='font-bold text-xl'>WhatsApp</h1>
            <p className='text-gray-600'>+92 3101096610</p>
          </div>
        </div>
        <div className="flex gap-4 items-center p-8 shadow">
          <div className="">
            <p className='bg-blue-200 text-2xl rounded text-blue-600 p-2'><FaLinkedin /></p>
          </div>
          <div className="">
            <h1 className='font-bold text-xl'>LinkedIn</h1>
            <a href='https://www.linkedin.com/in/muhammad-bilal-b8b410329/' className='text-gray-600'>linkedin.com/in/muhammad-bilal</a>
          </div>
        </div>
        <div className="flex gap-4 items-center p-8 shadow">
          <div className="">
            <p className='bg-blue-200 text-2xl rounded text-blue-600 p-2'><FaGithub  /></p>
          </div>
          <div className="">
            <h1 className='font-bold text-xl'>Github</h1>
            <a href='https://github.com/Bilal4542' className='text-gray-600'>github.com/Bilal4542</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
