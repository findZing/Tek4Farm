import React from 'react'

const Form = ({children, title}) => {
  return (
    <div className='w-[400px] border border-black rounded-[20px] flex flex-col items-center px-[20px] py-[10px] gap-[10px]'>
        <h1 className='text-[20px] font-bold'>{title}</h1>
        {children}
    </div>
  )
}

export default Form