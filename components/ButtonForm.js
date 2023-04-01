import React from 'react'

const ButtonForm = ({text='', handleClick=() => {}}) => {
  return (
    <button onClick={handleClick} className='h-[40px] w-[100px] border border-black rounded-[10px]'>
        <span>{text}</span>
    </button>
  )
}

export default ButtonForm