import React from 'react'

const Languages = () => {
  return (
    <div className='w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-4xl font-bold mt-8'>Languages</h1>
        <div className="bg-blue-500 rounded h-1 w-[15%] m-auto"></div>
      </div>
      <div className="flex gap-8 items-center justify-center">
        <div className="flex justify-center items-center gap-2 flex-col shadow-xl p-8 w-[100%]">
            <h1 className='font-bold text-2xl'>US/UK</h1>
            <p className='font-semibold text-gray-600 text-xl'>English</p>
            <p className='text-gray-600'>Fluent (Professional Working)</p>
        </div>
        <div className="flex justify-center items-center gap-2 flex-col shadow-xl p-8 w-[100%]">
            <h1 className='font-bold text-2xl'>PK</h1>
            <p className='font-semibold text-gray-600 text-xl'>Urdu</p>
            <p className='text-gray-600'>Native</p>
        </div>
        <div className="flex justify-center items-center gap-2 flex-col shadow-xl p-8 w-[100%]">
            <h1 className='font-bold text-2xl'>PK</h1>
            <p className='font-semibold text-gray-600 text-xl'>Pashto</p>
            <p className='text-gray-600'>Native</p>
        </div>
      </div>
    </div>
  )
}

export default Languages
