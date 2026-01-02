import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='border-2 p-2 md:p-3 rounded-2xl text-[10px] md:text-lg border-blue-500 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-white cursor-pointer transition-all duration-100'>
        {title}
      </button>
    </div>
  )
}

export default Button
