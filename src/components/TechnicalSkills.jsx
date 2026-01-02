import React from 'react'

const TechnicalSkills = () => {
  return (
    <div>
       <div className='w-[100%] shadow-xl p-8 flex flex-col justify-between gap-2'>
          <h1 className='text-2xl font-bold pt-4'>Languages</h1>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>JavaScript</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>95%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 w-[95%] rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>TypeScript</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>85%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 w-[85%] rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>SQL/NoSQL</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>80%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 w-[80%] rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>HTML/CSS</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>95%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 w-[95%] rounded-xl" ></div>
          </div>
        </div>
    </div>
  )
}

export default TechnicalSkills
