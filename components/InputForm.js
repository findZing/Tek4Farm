import React from 'react'

const InputForm = ({placeholder='', icon=null, value='', setValue=() => {}}) => {
  return (
    <div className='w-full h-[40px] border border-black rounded-full px-[20px] flex flex-row items-center'>
        <input 
            className='flex-1 focus:outline-none text-[14px]'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
        />
    </div>
  )
}

export default InputForm