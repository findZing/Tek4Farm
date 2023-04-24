import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineArrowRight,
} from "react-icons/ai";
// import durian from "../public/assets/images/durian.jpg";
import Image from "next/image";
import ButtonDetails from "./ButtonDetails";

const LighthightPost = ({ image, title, quantity, status, description }) => {
  const [clickHeart, setClickHeart] = useState(false);

  const handleClickHeart = () => {
    setClickHeart((state) => !state);
  };

  return (
    <div className="w-[50%] h-[250px] shadow-lg border-[2px] border-yellow border-black rounded-[20px] px-[20px] py-[10px] flex flex-row items-center justify-between gap-[10px] relative">
      <div className="w-[300px] h-[220px]">
        <Image
          src={image}
          alt={title}
          className="w-[300px] h-[220px] object-cover rounded-[15px]"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-between pb-[5px]">
        <div className="w-full h-full flex flex-col items-start gap-[10px]">
          <h1 className="text-[20px] font-bold w-full text-center">{title}</h1>
          <p>Sản lượng: {quantity}</p>
          <p>Trạng thái: {status}</p>
          <p>Mô tả: {description}</p>
        </div>
        {/* <button className="bg-green w-[150px] h-[40px] rounded-[20px] flex flex-row items-center justify-center gap-[5px] px-[5px]">
      <p className="text-[14px] text-white font-[500]">Thông tin chi tiết</p>
      <AiOutlineArrowRight color="white" size={20}/>
    </button> */}
        <ButtonDetails />
      </div>

      <div className="absolute top-[10px] right-[10px]">
        {clickHeart ? (
          <AiFillHeart
            className="cursor-pointer"
            size={30}
            onClick={handleClickHeart}
            color="red"
          />
        ) : (
          <AiOutlineHeart
            className="cursor-pointer"
            size={30}
            onClick={handleClickHeart}
          />
        )}
      </div>
    </div>
  );
};

export default LighthightPost;
