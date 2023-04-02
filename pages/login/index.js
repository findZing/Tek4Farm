import ButtonForm from '@/components/ButtonForm'
import Form from '@/components/Form'
import InputForm from '@/components/InputForm'
import More from '@/components/More'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import bg from '../../public/assets/images/bgLogin.jpg'

const LoginPage = () => {
  const router = useRouter()
  
  const [phoneValue, setPhoneValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const handleClickToHome = () => {
    router.push('/')
  }

  const handleClickToSignup = () => {
    router.push('/signup')
  }

  return (
    <div 
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className='flex-1 w-screen h-screen flex justify-center items-center'
    >
        <Form title='Đăng nhập'>
            <InputForm placeholder='Số điện thoại' value={phoneValue} setValue={setPhoneValue} />
            <InputForm placeholder='Mật khẩu' type='password' value={passwordValue} setValue={setPasswordValue} />
            <div className='w-full flex flex-row justify-end'>
                <button>
                    <p className='italic text-[14px]'>Quên mật khẩu ?</p>
                </button>
            </div>
            <ButtonForm text='Đăng nhập' handleClick={handleClickToHome}/>
            <More textMore='Bạn chưa có tài khoản?' textBtnMore='Đăng ký' handleClick={handleClickToSignup}/>
        </Form>
    </div>
  )
}

export default LoginPage