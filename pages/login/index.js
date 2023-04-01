import ButtonForm from '@/components/ButtonForm'
import Form from '@/components/Form'
import InputForm from '@/components/InputForm'
import More from '@/components/More'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex-1 w-screen h-screen flex justify-center items-center'>
        <Form title='Đăng nhập'>
            <InputForm placeholder='Số điện thoại'/>
            <InputForm placeholder='Mật khẩu'/>
            <div className='w-full flex flex-row justify-end'>
                <button>
                    <p className='italic text-[14px]'>Quên mật khẩu ?</p>
                </button>
            </div>
            <ButtonForm text='Đăng nhập'/>
            <More textMore='Bạn chưa có tài khoản?' textBtnMore='Đăng ký'/>
        </Form>
    </div>
  )
}

export default LoginPage