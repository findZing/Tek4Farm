import { transitionLanguage } from '@/ulities/transitionLanguage'
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useSelector } from 'react-redux'

const ButtonDetails = () => {
    const {language} = useSelector(state => state.auth)

  return (
    <button className="bg-green w-[150px] h-[40px] rounded-[20px] flex flex-row items-center justify-center gap-[5px] px-[5px]">
      <p className="text-[14px] text-white font-[500]">{
        transitionLanguage({
            'vi': 'Thông tin chi tiết',
            'en': 'Details'
        }, language)
      }</p>
      <AiOutlineArrowRight color="white" size={20}/>
    </button>
  )
}

export default ButtonDetails