import React from 'react'
import { FaGraduationCap } from "react-icons/fa";


const Education = () => {
  return (
    <div className='w-[90%] lg:w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl font-bold mt-8'>Education</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
            <div className="md:grid grid-cols-2 gap-8">
                <div className="shadow-xl p-4 md:p-8 mb-10 md:mb-0 flex flex-col justify-center gap-2 w-[100%]">
                    <h1 className='flex items-center justify-between gap-2 font-bold text-xl'>BS Software Engineering <span className='bg-blue-200 text-xl p-3 text-blue-600 rounded-2xl'><FaGraduationCap/></span></h1>
                    <p className='text-gray-600 font-semibold'>Islamia College Peshawar</p>
                    <p className='text-blue-600 font-semibold'>2020 - 2024</p>
                    <p className='p-2 bg-blue-100 text-blue-600 rounded w-fit'>Bachelor's Degree</p>
                </div>
                <div className="shadow-xl p-4 md:p-8 mb-10 md:mb-0  flex flex-col justify-center gap-2 w-[100%]">
                    <h1 className='flex items-center justify-between gap-2 font-bold text-xl'>Certified MERN Stack Developer <span className='bg-blue-200 text-xl p-3 text-blue-600 rounded-2xl'><FaGraduationCap/></span></h1>
                    <p className='text-gray-600 font-semibold'>Tech Pioneers Institute</p>
                    <p className='text-blue-600 font-semibold'>2021</p>
                    <p className='p-2 bg-blue-100 text-blue-600 rounded w-fit'>Professional Certificate</p>
                </div>
                <div className="shadow-xl p-4 md:p-8 mb-10 md:mb-0  flex flex-col justify-center gap-2 w-[100%]">
                    <h1 className='flex items-center justify-between gap-2 font-bold text-xl'>FSC Pre-Engineering <span className='bg-blue-200 text-xl p-3 text-blue-600 rounded-2xl'><FaGraduationCap/></span></h1>
                    <p className='text-gray-600 font-semibold'>Hadaf College Peshawar</p>
                    <p className='text-blue-600 font-semibold'>2018 - 2020</p>
                    <p className='p-2 bg-blue-100 text-blue-600 rounded w-fit'>Higher Secondary Education</p>
                </div>
                <div className="shadow-xl p-4 md:p-8 mb-10 md:mb-0  flex flex-col justify-center gap-2 w-[100%]">
                    <h1 className='flex items-center justify-between gap-2 font-bold text-xl'>Matriculation In Science <span className='bg-blue-200 text-xl p-3 text-blue-600 rounded-2xl'><FaGraduationCap/></span></h1>
                    <p className='text-gray-600 font-semibold'>JIPHS</p>
                    <p className='text-blue-600 font-semibold'>2016 - 2018</p>
                    <p className='p-2 bg-blue-100 text-blue-600 rounded w-fit'>Secondary School Education</p>
                </div>
            </div>
    </div>
  )
}

export default Education
