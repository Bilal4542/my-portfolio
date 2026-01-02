import React from 'react'
import { FiLinkedin, FiGithub, FiPhone   } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-scroll'
import Button from './layouts/Button';

const Home = ({name, address, skill}) => {
  return (
    <div className='flex justify-center items-center w-[90%] m-auto  h-screen'>
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold md:mt-20 text-center'>{name}</h1>
        <p className='text-gray-600 text-center'>{address}</p>
        <p className='font-semibold text-gray-700 text-sm text-center md:text-md'>{skill}</p>
        <div className='flex items-center justify-center gap-4 md:text-lg font-semibold'>
          <Link to='experience' spy={true} smooth={true} duration={500}><Button title={'Experience'}/></Link>
          <a href="https://wa.me/923101096610" target='_blank'><Button title={'Contact'}/></a>
          <Link to='projects' spy={true} smooth={true} duration={500}><Button title={'View Projects'}/></Link>
        </div>
        <div className="flex items-center justify-center gap-7 p-4">
          <a href="https://github.com/Bilal4542" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiGithub /></span></a>
          <a href="https://www.linkedin.com/in/muhammad-bilal-b8b410329/" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiLinkedin/></span></a>
          <a href="mailto:mbilal45422@gmail.com" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FaRegEnvelope /></span></a>
          <a href="https://wa.me/923101096610" target='_blank' className='text-2xl bg-white shadow-xl p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-200 hover:scale-125'><span className=''><FiPhone  /></span></a>
        </div>
      </div>
    </div>
  )
}

export default Home



