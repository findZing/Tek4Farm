import React from 'react'

const More = ({textMore, textBtnMore, handleClick = () => {}}) => {
  return (
    <div className='flex flex-row items-center gap-[5px]'>
        <p className='text-[14px]'>{textMore}</p>
        <button onClick={handleClick}>
            <span className='text-[14px] font-[600]'>{textBtnMore}</span>
        </button>
    </div>
  )
}

export default More