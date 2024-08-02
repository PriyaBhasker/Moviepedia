import React from 'react'

const MainButton = ({buttonTittle}) => {
  return (
    <div>
      <button className='bg-red-700 px-5 py-[0.6rem] w-36 rounded text-xl'>{buttonTittle}</button>
    </div>
  )
}

export default MainButton;
