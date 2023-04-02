import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

const InputForm = ({placeholder='', icon=null, value='', setValue=() => {}, type='text'}) => {
  const [showValue, setShowValue] = useState(false)

  const handleClickShow = () => {
    setShowValue(state => !state)
  }

  return (
    <div className='w-full h-[40px] border border-black rounded-full px-[20px] pr-[35px] flex flex-row items-center relative'>
        <input 
            className='flex-1 focus:outline-none text-[14px]'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            type={showValue ? 'text' : type}
        />
        {
        type === 'password' && 
        <div className='absolute right-[10px]'>
          {showValue ? <AiOutlineEye size={20} onClick={handleClickShow}/> : <AiOutlineEyeInvisible size={20} onClick={handleClickShow}/>}
        </div>
        }
    </div>
  )
}

export default InputForm