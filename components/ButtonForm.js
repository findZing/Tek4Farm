import React from 'react'

const ButtonForm = ({text='', handleClick=() => {}}) => {
  return (
    <button onClick={handleClick} className='px-[12px] py-[4px] border border-black rounded-[10px]'>
        <span className='text-[16px]'>{text}</span>
    </button>
  )
}

export default ButtonForm