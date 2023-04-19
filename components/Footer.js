import Image from 'next/image'
import React from 'react'

import nhattin from '../public/assets/images/nhattin.jpg'
import vnpost from '../public/assets/images/vnpost.jpg'
import logo_master from '../public/assets/images/logo-master.png'
import logo_visa from '../public/assets/images/logo-visa.png'
import logo_bct from '../public/assets/images/logo-bct.png'

const Footer = () => {
  return (
    <div className='w-full flex flex-col py-[20px] items-center gap-[30px] bg-[#00483d] text-white text-[14px] font-[400]'>
        <div className='max-w-content w-full mx-auto flex flex-row justify-between'> 
          <div className='flex flex-col gap-[10px] justify-start'>
            <h1 className='text-[18px] font-bold'>Hỗ trợ - Dịch vụ</h1>
            <p>Hướng dẫn đăng ký</p>
            <p>Hướng dẫn đăng bài</p>
            <p>Hướng dẫn mua bán sản phẩm và thanh toán</p>
            <p>Các câu hỏi thường gặp</p>
          </div>
          
          <div className='flex flex-col gap-[10px] justify-start'>
          <h1 className='text-[18px] font-bold'>Thông tin liên hệ</h1>
            <p>Chăm sóc khách hàng</p>
            <p>Hỗ trợ kỹ thuật</p>
            <p>Liên hệ khối văn phòng</p>
          </div>

          <div className='flex flex-col gap-[10px] justify-start'>
          <h1 className='text-[18px] font-bold'>Hình thức thanh toán</h1>
            <div className='flex flex-row items-center justify-between gap-[10px]'>
              <Image src={logo_visa} alt='visa' className='w-[77px] h-[38px[ object-contain'/>
              <Image src={logo_master} alt='master' className='w-[77px] h-[38px[ object-contain'/>
            </div>            
          </div>
          <div className='flex flex-col gap-[10px] justify-start'>
          <h1 className='text-[18px] font-bold'>Hình thức vận chuyển</h1>
            <div className='flex flex-row items-center justify-between gap-[10px]'>
              <Image src={nhattin} alt='nhattin' className='w-[77px] h-[38px[ object-contain'/>
              <Image src={vnpost} alt='vnpost' className='w-[77px] h-[38px[ object-contain'/>
            </div>
            <Image src={logo_bct} alt='logo_bct' className='w-[160px] h-[60px[ object-contain'/>
            
          </div>
        </div>
        <p className='text-[20px] font-bold'>Copyright @ by Tek4Farm</p>
        <p className='text-[16px] italic'>Version 1.0</p>
    </div>
  )
}

export default Footer