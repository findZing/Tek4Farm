import ButtonForm from "@/components/ButtonForm";
import Form from "@/components/Form";
import InputForm from "@/components/InputForm";
import More from "@/components/More";
import { useRouter } from "next/router";
import React, { useState } from "react";

import bg from "../../public/assets/images/bgLogin.jpg";

const SignupPage = () => {
  const router = useRouter();

  const [checkValue, setCheckValue] = useState("Farmer");

  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordAgainValue, setPasswordAgainValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [validateValue, setValidateValue] = useState("");

  const [stepValue, setStepValue] = useState(0);

  const handleClickBackStep = () => {
    setStepValue((index) => index - 1);
  };

  const handleClickNextStep = () => {
    setStepValue((index) => index + 1);
  };

  const handleClickToHome = () => {
    router.push("/");
  };

  const handleClickToLogin = () => {
    router.push('/login')
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex-1 w-screen h-screen flex justify-center items-center"
    >
      {stepValue === 0 && (
        <Form title="Đăng ký">
          {/* <InputForm placeholder="Tên đầy đủ" /> */}
          <InputForm
            placeholder="Tên người dùng"
            value={nameValue}
            setValue={setNameValue}
          />
          <InputForm
            placeholder="Số điện thoại"
            value={phoneValue}
            setValue={setPhoneValue}
          />
          <InputForm
            placeholder="Mật khẩu"
            value={passwordValue}
            setValue={setPasswordValue}
          />
          <InputForm
            placeholder="Nhập lại mật khẩu"
            value={passwordAgainValue}
            setValue={setPasswordAgainValue}
          />

          <div className="w-full flex flex-col items-start justify-center gap-[10px]">
            <span className="text-[16px] font-[600]">Bạn là:</span>
            <div className="flex flex-row items-center gap-[10px]">
              <input
                type="radio"
                name="Farmer"
                value="Farmer"
                checked={checkValue === "Farmer"}
                onChange={(e) => {
                  setCheckValue(e.target.value);
                  console.log("Farmer");
                }}
                className="w-[20px] h-[20px]"
              />
              <span>Nông dân</span>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <input
                type="radio"
                name="Business"
                value="Business"
                checked={checkValue === "Business"}
                onChange={(e) => {
                  setCheckValue(e.target.value);
                  console.log("Farmer");
                }}
                className="w-[20px] h-[20px]"
              />
              <span>Thương nhân</span>
            </div>
          </div>

          {checkValue === "Business" && (
            <div className="w-full">
              <InputForm
                placeholder="Địa chỉ email của công ty"
                value={emailValue}
                setValue={setEmailValue}
              />
            </div>
          )}
          <ButtonForm text="Đăng ký" handleClick={handleClickNextStep} />
          <More textMore="Bạn đã có tài khoản?" textBtnMore="Đăng nhập" handleClick={handleClickToLogin}/>
        </Form>
      )}

      {stepValue === 1 && (
        <Form
          title="Đăng ký"
          headerButton={true}
          handleClickHeaderButton={handleClickBackStep}
        >
          <InputForm
            placeholder="Nhập mã xác nhận"
            value={validateValue}
            setValue={setValidateValue}
          />

          <ButtonForm text="Đăng ký" handleClick={handleClickNextStep} />
        </Form>
      )}

      {stepValue === 2 && (
        <Form title="Đăng ký thành công">
          <p className="text-[14px]">Bạn đã đăng ký thành công</p>
          <p className="text-center text-[18px] font-[600]">
            Chúc bạn có thật nhiều thành công trong sự nghiệp !!!
          </p>

          <ButtonForm
            text="Quay về trang chủ"
            handleClick={handleClickToHome}
          />
        </Form>
      )}
    </div>
  );
};

export default SignupPage;
