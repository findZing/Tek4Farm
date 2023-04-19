import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import durian from "../public/assets/images/durian.jpg";
import Image from "next/image";

const LighthightPost = ({image, title, quantity, status, description}) => {
  const [clickHeart, setClickHeart] = useState(false);

  const handleClickHeart = () => {
    setClickHeart(state => !state)
  }

  return (
    <div className="w-[50%] h-[250px] shadow-lg border border-black rounded-[20px] px-[20px] py-[10px] flex flex-row items-center justify-between gap-[10px] relative">
      <div className="w-[300px] h-[220px]">
      <Image 
        src={image} 
        alt={title}
        className="w-[300px] h-[220px] object-cover" 
      />
      </div>

      <div className="flex-1 h-full flex flex-col items-start gap-[10px]">
        <h1 className="text-[20px] font-bold w-full text-center">{title}</h1>
        <p>Sản lượng: {quantity}</p>
        <p>Trạng thái: {status}</p>
        <p>Mô tả: {description}</p>
      </div>

      <div className="absolute top-[10px] right-[10px]">
        {
          clickHeart ?
          <AiFillHeart className="cursor-pointer" size={30} onClick={handleClickHeart} color='red'/>
          :
          <AiOutlineHeart className="cursor-pointer" size={30} onClick={handleClickHeart}/>
        }
      </div>
    </div>
  );
};

export default LighthightPost;
