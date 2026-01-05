import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degreeTitle: 'BS Software Engineering',
    instituteName: 'Islamia College Peshawar',
    date: '2020 - 2024',
    degreeName: "Bachelor's Degree",
  },
  {
    degreeTitle: 'Certified MERN Stack Developer',
    instituteName: 'Tech Pioneers Institute',
    date: '2021',
    degreeName: "Professional Certificate",
  },
]


const Education = () => {
  return (
    <div className='w-[90%] lg:w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl font-bold mt-8'>Education</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
            <div className="md:grid grid-cols-2 gap-8">
                {
                  education.map((edu)=>{
                    return(
                      <div className="shadow p-4 md:p-8 mb-10 md:mb-0 flex flex-col justify-center gap-2 w-[100%]">
                    <h1 className='flex items-center justify-between gap-2 font-bold text-xl'>{edu.degreeTitle} <span className='bg-blue-200 text-xl p-3 text-blue-600 rounded-2xl'><FaGraduationCap/></span></h1>
                    <p className='text-gray-600 font-semibold'>{edu.instituteName}</p>
                    <p className='text-blue-600 font-semibold'>{edu.date}</p>
                    <p className='p-2 bg-blue-100 text-blue-600 rounded w-fit'>{edu.degreeName}</p>
                </div>
                    )
                  })
                }
            </div>
    </div>
  )
}

export default Education
