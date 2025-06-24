import React from 'react'

function Button({title}) {
  return (
    <div className=' xl:block bg-[#F4AF01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-lg items-center justify-center text-center'>
        {title}
    </div>
  )
}

export default Button
