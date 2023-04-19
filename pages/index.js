import ContentHome from "@/components/ContentHome";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

import banner from "../public/assets/images/banner.jpg";
import Head from "next/head";
import {FaCarrot, FaAppleAlt} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {IoMdHelpCircle} from 'react-icons/io'
import {GiTreeRoots} from 'react-icons/gi'

export default function Home() {
  const iconProp = {
    size: 30,
    color: 'white'
  }
  return (
    <Layout>
      <Head>
        <title>Trang chủ</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />

      </Head>
      <div className="max-w-content w-full mx-auto flex justify-center items-center pt-[20px]">
        <div className="h-[60px] flex flex-row items-center justify-center gap-[20px] bg-green px-[20px] py-[10px] rounded-[20px]">
          <FaAppleAlt {...iconProp} color='#F7EC00'/>
          <FaCarrot {...iconProp}/>
          <GiTreeRoots {...iconProp}/>
          <AiFillInfoCircle {...iconProp}/>
          <AiFillSetting {...iconProp}/>
          <IoMdHelpCircle {...iconProp}/>
        </div>
      </div>
      <div className="max-w-content w-full mx-auto flex flex-row justify-between gap-[20px] pt-[20px]">
        <div className="relative w-[70%]">
          <Image src={banner} alt="banner" className="w-full h-[300px] object-cover rounded-[12px]" />
          <div className="w-full flex flex-row items-center justify-center gap-[10px] absolute left-0 right-0 bottom-[10px]">
            <div className="w-[8px] h-[8px] rounded-full bg-white shadow-sm"/>
            <div className="w-[8px] h-[8px] rounded-full bg-white shadow-sm"/>
            <div className="w-[8px] h-[8px] rounded-full bg-white shadow-sm"/>
            <div className="w-[8px] h-[8px] rounded-full bg-white shadow-sm"/>
            <div className="w-[8px] h-[8px] rounded-full bg-white shadow-sm"/>
          </div>
        </div>
        <Image src={banner} alt="banner" className="w-[30%] h-[300px] object-cover rounded-[12px]" />
      </div>
      <ContentHome />
    </Layout>
  );
}
