import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../public/assets/images/logo.png";

const Navbar = () => {
  const [optionLanguage, setOptionLanguage] = useState();

  const router = useRouter()

  const handleToLogin = () => {
    router.push('/login')
  }

  const handleToSignup = () => {
    router.push('/signup')
  }

  return (
    <div className="fixed top-0 right-0 left-0 h-[50px] shadow-md">
      <div className="max-w-window w-full h-navbar mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[10px]">
          <Image src={logo} className="w-[40px] h-[40px] object-contain" />
          <p className="text-[30px] font-[600] italic text-[#F7EC00]">
            InforFarmer
          </p>
        </div>

        <div className="border-b border-black w-[500px] h-[30px] flex items-center justify-center py-[5px]">
          <input
            className="flex-1 text-[14px] focus:outline-none"
            placeholder="Tìm kiếm nông sản bạn cần"
          />
        </div>

        <select value={optionLanguage} className='focus:outline-none'>
          <option value="vi">Tiếng Việt</option>
          <option value="en">English</option>
          <option value="cn"></option>
        </select>
        <div className="flex flex-row items-center gap-[10px]">
          <button onClick={handleToLogin}>
            <p>Đăng nhập</p>
          </button>
          <div className="w-[1px] h-[20px] border-r border-black" />
          <button onClick={handleToSignup}>
            <p>Đăng ký</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
