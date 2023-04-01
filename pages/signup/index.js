import ButtonForm from "@/components/ButtonForm";
import Form from "@/components/Form";
import InputForm from "@/components/InputForm";
import More from "@/components/More";
import React, {useState} from "react";

const SignupPage = () => {
    const [checkValue, setCheckValue] = useState('Farmer')

    const [nameValue, setNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordAgainValue, setPasswordAgainValue] = useState('')

  return (
    <div className="flex-1 w-screen h-screen flex justify-center items-center">
      <Form title="Đăng ký">
        {/* <InputForm placeholder="Tên đầy đủ" /> */}
        <InputForm placeholder="Tên người dùng" value={nameValue} setValue={setNameValue}/>
        <InputForm placeholder="Số điện thoại" value={phoneValue} setValue={setPhoneValue}/>
        <InputForm placeholder="Mật khẩu" value={passwordValue} setValue={setPasswordValue}/>
        <InputForm placeholder="Nhập lại mật khẩu" value={passwordAgainValue} setValue={setPasswordAgainValue}/>

        <div className="w-full flex flex-col items-start justify-center gap-[10px]">
          <span className="text-[16px] font-[600]">Bạn là:</span>
          <div className="flex flex-row items-center gap-[10px]">
            <input
              type="radio"
              name="Farmer"
              value='Farmer'
              checked={checkValue === 'Farmer'}
              onChange={(e) => {setCheckValue(e.target.value); console.log('Farmer')}}
              className="w-[20px] h-[20px]"
            />
            <span>Nông dân</span>
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <input
              type="radio"
              name="Business"
              value='Business'
              checked={checkValue === 'Business'}
              onChange={(e) => {setCheckValue(e.target.value); console.log('Farmer')}}
              className="w-[20px] h-[20px]"
            />
            <span>Thương nhân</span>
          </div>
        </div>
        <ButtonForm text="Đăng ký" />
        <More textMore="Bạn đã có tài khoản?" textBtnMore="Đăng nhập" />
      </Form>
    </div>
  );
};

export default SignupPage;
