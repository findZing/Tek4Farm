import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../public/assets/images/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { transitionLanguage } from "@/ulities/transitionLanguage";
import {AiOutlineSearch} from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "@/slices/authSlice";

const Navbar = () => {
  const [optionLanguage, setOptionLanguage] = useState();
  const {language} = useSelector(state => state.auth)
  const dispatch = useDispatch()

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
    <div className="fixed top-0 right-0 left-0 h-[88px] shadow-md bg-white z-20">
      <div className="max-w-window w-full h-full mx-auto flex flex-col">
      <div className="w-full h-navbar flex flex-row gap-[20px] items-center justify-between bg-white">
        <div className="w-[200px] flex flex-row items-center gap-[10px]">
          <Image src={logo} alt="logo" className="w-[40px] h-[40px] object-contain" />
          <div>
          <p className="w-[200px] text-[30px] font-[600] italic text-[#F7EC00] z-20">
            InfoFarmer
          </p>
          </div>
        </div>

        <div className="z-10 border border-black rounded-[10px] max-w-[800px] w-full h-[40px] flex items-center justify-between gap-[10px] py-[6px] pl-[20px]">
          <AiOutlineSearch size={20}/>
          <input
            className="flex-1 text-[14px] focus:outline-none"
            placeholder={transitionLanguage({
              'vi': "Tìm kiếm nông sản bạn cần",
              'en': 'Search the agricultural product that you need'
            }, language)}
          />
          <div className="w-[100px] h-full flex justify-center items-center border-l border-black">
            <p className="text-[18px] font-[500] text-[#4db849]">{transitionLanguage({
              'vi': 'Tìm kiếm',
              'en': 'Search'
            }, language)}</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-[20px]">
          <button className="w-[80px] h-[40px] px-[10px] py-[5px] border border-black rounded-[8px]" onClick={handleClickToNewsPage}>
            <p>
              {transitionLanguage({
                'vi': 'Tin tức',
                'en': 'News'
              }, language)}
            </p>
          </button>
          <select
            value={optionLanguage}
            onChange={(e) => {
              setOptionLanguage(e.target.value)
              dispatch(setLanguage({language: e.target.value}))
            }}
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
              <button onClick={handleToLogin} className="w-[80px]">
                <p>{transitionLanguage({
                  'vi': 'Đăng nhập',
                  'en': 'Login'
                }, language)}</p>
              </button>
              <div className="w-[1px] h-[20px] border-r border-black" />
              <button onClick={handleToSignup} className="w-[80px]">
              <p>{transitionLanguage({
                  'vi': 'Đăng ký',
                  'en': 'Signup'
                }, language)}</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-[10px]">
          <p className="text-[14px] text-[#808089]">Sầu riêng</p>
          <p className="text-[14px] text-[#808089]">Rau cải</p>
          <p className="text-[14px] text-[#808089]">Ớt</p>
          <p className="text-[14px] text-[#808089]">Nhân sâm</p>
          <p className="text-[14px] text-[#808089]">Cam</p>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
