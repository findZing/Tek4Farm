import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../public/assets/images/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { transitionLanguage } from "@/ulities/transitionLanguage";

const Navbar = () => {
  const [optionLanguage, setOptionLanguage] = useState();
  const language = 'en'

  const router = useRouter();
  const userLogin = false;

  const handleToLogin = () => {
    router.push("/login");
  };

  const handleToSignup = () => {
    router.push("/signup");
  };

  const handleClickToNewsPage = () => {
    router.push('/news')
  }

  return (
    <div className="fixed top-0 right-0 left-0 h-[50px] shadow-md bg-white z-20">
      <div className="max-w-window w-full h-navbar mx-auto flex flex-row items-center justify-between bg-white">
        <div className="flex flex-row items-center gap-[10px]">
          <Image src={logo} className="w-[40px] h-[40px] object-contain" />
          <p className="text-[30px] font-[600] italic text-[#F7EC00]">
            InfoFarmer
          </p>
        </div>

        <div className="border-b border-black w-[500px] h-[30px] flex items-center justify-center py-[5px]">
          <input
            className="flex-1 text-[14px] focus:outline-none"
            placeholder="Tìm kiếm nông sản bạn cần"
          />
        </div>

        <div className="flex flex-row items-center gap-[20px]">
          <button className="px-[10px] py-[5px] border border-black rounded-[8px]" onClick={handleClickToNewsPage}>
            <p>
              {transitionLanguage({
                'vi': 'Tin tức',
                'en': 'News'
              }, language)}
            </p>
          </button>
          <select
            value={optionLanguage}
            className="focus:outline-none text-[16px] cursor-pointer"
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
            <option value="cn">中国</option>
          </select>
          {userLogin ? (
            <div>
              <HiOutlineUserCircle size={25} />
            </div>
          ) : (
            <div className="flex flex-row items-center gap-[10px]">
              <button onClick={handleToLogin}>
                <p>{transitionLanguage({
                  'vi': 'Đăng nhập',
                  'en': 'Login'
                }, language)}</p>
              </button>
              <div className="w-[1px] h-[20px] border-r border-black" />
              <button onClick={handleToSignup}>
              <p>{transitionLanguage({
                  'vi': 'Đăng ký',
                  'en': 'Signup'
                }, language)}</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
