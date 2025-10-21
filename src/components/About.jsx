import React from 'react'
import myImage from "../assets/profile.jpg"

const About = () => {
  return (
    <div className='md:w-[60%] m-auto p-8' >
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl font-bold mt-6'>About Me</h1>
        <div className="bg-blue-500 rounded h-1 w-[20%] m-auto"></div>
      </div>
      <div className=" md:flex items-center justify-between shadow-xl mt-3 p-8">
        <div className="flex items-center justify-center">
          <img className='rounded-full border-blue-500 border-4 w-[40%] md:w-[100%] mb-6 md:mb-0' src={myImage} alt="" />
        </div>
        <div className="">
          <p className='md:text-lg text-gray-700 ml-6 leading-relaxed tracking-wider'>Full-stack MERN + Next.js + Nest.js with 3+ years of experience designing, developing, and deploying scalable web applications using Node.js, React.js, Next.js, MongoDB, and Express.js. Proven ability to lead teams, mentor junior developers, and deliver high-performance solutions under Agile methodologies.</p>
        </div>
      </div>
    </div>
  )
}

export default About
