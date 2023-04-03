import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[200px] border-t border-black flex flex-row py-[20px] justify-center gap-[30px]'>
        <p>Copyright @ by Tek4Farm</p>

        <div className='flex flex-col items-center gap-[10px]'>
          <span>Liên hệ với chúng tôi tại:</span>
          <span>InforFarmer@InforFarmer.com</span>
        </div>
    </div>
  )
}

export default Footer