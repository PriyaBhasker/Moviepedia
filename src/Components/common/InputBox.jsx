import React from 'react'

const InputBox = ({text , placeholder} ) => {
  return (
   <input type={text} placeholder={placeholder} className='bg-blue-300 px-3 py-[0.5rem] w-[18rem] rounded outline-none border text-xl font-bold text-white' />
  )
}

export default InputBox;
