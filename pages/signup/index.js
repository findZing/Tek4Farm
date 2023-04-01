import ButtonForm from "@/components/ButtonForm";
import Form from "@/components/Form";
import InputForm from "@/components/InputForm";
import More from "@/components/More";
import React from "react";

const SignupPage = () => {
  return (
    <div className="flex-1 w-screen h-screen flex justify-center items-center">
      <Form title="Đăng ký">
        {/* <InputForm placeholder="Tên đầy đủ" /> */}
        <InputForm placeholder="Tên người dùng" />
        <InputForm placeholder="Số điện thoại" />
        <InputForm placeholder="Mật khẩu" />
        <InputForm placeholder="Nhập lại mật khẩu" />

        <div className="w-full flex flex-col items-start justify-center">
          <div>
            <input type="radio" value="Nông dân" />
            <span>Nông dân</span>
          </div>
          <div>
            <input type="radio" value="Thương nhân" />
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
