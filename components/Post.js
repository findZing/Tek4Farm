import React, { useState } from "react";
import Image from "next/image";
// import durian from "../public/assets/images/durian.jpg";
import {AiOutlineHeart} from 'react-icons/ai'
import { AiFillHeart } from "react-icons/ai";
import {AiOutlineArrowRight} from 'react-icons/ai'
import ButtonDetails from "./ButtonDetails";

const Post = ({image, title, quantity, status, description}) => {
  const [clickHeart, setClickHeart] = useState(false)

  const handleClickHeart = () => {
    setClickHeart(state => !state)
  }

  return (
    <div className="max-w-[220px] w-full shadow-lg border-[2px] border-yellow rounded-[10px] flex flex-col items-center gap-[10px] px-[10px] py-[10px] relative z-10">
      <Image src={image} alt={title} className="w-[220] h-[220px] object-cover rounded-[10px]" />

      <div className="flex-1 h-full flex flex-col items-start gap-[10px]">
        <h1 className="text-[20px] font-bold text-center w-full">{title}</h1>
        <p className="text-[16px]">Sản lượng: {quantity}</p>
        <p>Trạng thái: {status}</p>
        <p>Mô tả: {description}</p>
      </div>

      <div className="w-[30px] h-[30px] bg-white rounded-[10px] shadow-lg flex items-center justify-center absolute top-[10px] right-[10px]">
        {
        clickHeart ? 
        <AiFillHeart size={20} onClick={handleClickHeart} color='red' className="cursor-pointer"/> 
        : 
        <AiOutlineHeart size={20} onClick={handleClickHeart} className='cursor-pointer'/>
        }
      </div>

    {/* <button className="bg-green w-[150px] h-[40px] rounded-[20px] flex flex-row items-center justify-center gap-[5px] px-[5px]">
      <p className="text-[14px] text-white font-[500]">Thông tin chi tiết</p>
      <AiOutlineArrowRight color="white" size={20}/>
    </button> */}
    <ButtonDetails />
    </div>
  );
};

export default Post;
