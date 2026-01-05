import React from 'react'
import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Button from './layouts/Button';


const experiences = [
  {
    heading: 'Team Lead/Full Stack Developer',
    date: 'January 2025 - Present',
    dateIcon: <FaRegCalendar/>,
    institute: 'Tech Pioneers',
    instituteAddress: 'Onsite, Peshawar, Pakistan',
    addressIcon: <LuMapPin/>,
    roleDesc: 'Led team, designed architecture, mentored juniors, delivered scalable applications using MERN stack and modern development practices.',
    },
  {
    heading: 'Junior MERN Stack Developer',
    date: ' September 2023 - December 2024',
    dateIcon: <FaRegCalendar/>,
    institute: 'Bright Code Lab',
    instituteAddress: 'Onsite, Peshawar, Pakistan',
    addressIcon: <LuMapPin/>,
    roleDesc: 'At Bride Code Lab, I worked as a Junior MERN Stack Developer, where I contributed to building and maintaining web applications using MongoDB, Express.js, React.js, and Node.js.',
    },
  {
    heading: 'React Developer',
    date: 'August 2022 - August 2023',
    dateIcon: <FaRegCalendar/>,
    institute: 'Bingtechs Soultion',
    instituteAddress: 'Onsite, Peshawar, Pakistan',
    addressIcon: <LuMapPin/>,
    roleDesc: 'At Bingtechs Solutions, I worked as a React Developer, where I focused on building dynamic and user-friendly web applications..',
    },
]

const Experience = () => {
  return (
    <div className='w-[90%] md:w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl  font-bold mt-8'>Experience</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
      {
        experiences.map((experience)=>{
          return(
               <div className="lg:w-[80%] m-auto p-8 mt-6 md:flex flex-col justify-center gap-4 shadow">
        <div className="flex md:items-center md:justify-between gap-3 flex-col md:flex-row">
          <h1 className='text-xl md:text-2xl font-semibold'>{experience.heading}</h1>
          <p className='text-blue-400 font-semibold flex items-center gap-1 text-sm'>{experience.dateIcon} {experience.date}</p>
        </div>
        <p className='flex items-center text-gray-500 mt-2 mb-2 md:mt-0 md:mb-0 text-[13px] md:text-[15px]'><span className='font-semibold mr-1 md:mr-2'>{experience.institute} </span> <span className='hidden md:flex items-center gap-1'>{experience.addressIcon}</span> {experience.instituteAddress}</p>
        <p className='text-gray-500'>{experience.roleDesc}</p>
        <div className="flex gap-1 md:gap-4 mt-2 md:mt-0">
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-[12px]  md:text-sm'>React</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-[12px] md:text-sm'>NodeJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-[12px] md:text-sm'>NextJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-[12px] md:text-sm'>ExpressJS</span>
          <span className='p-2 bg-blue-200 text-blue-600 rounded-4xl text-[12px] md:text-sm hidden md:block'>MongoDB</span>
        </div>
      </div>
          )
        })
      }
    </div>
  )
}

export default Experience
