import React, { useState } from "react";
import Image from "next/image";
import durian from "../public/assets/images/durian.jpg";
import {AiOutlineHeart} from 'react-icons/ai'
import { AiFillHeart } from "react-icons/ai";

const Post = ({title, quantity, status, description}) => {
  const [clickHeart, setClickHeart] = useState(false)

  const handleClickHeart = () => {
    setClickHeart(state => !state)
  }

  return (
    <div className="w-[220px] border border-black rounded-[10px] flex flex-col items-center gap-[10px] px-[10px] py-[10px] relative z-10">
      <Image src={durian} className="w-[220] h-[220px] object-cover rounded-[10px]" />

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
    </div>
  );
};

export default Post;
