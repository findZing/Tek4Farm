import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import durian from "../public/assets/images/durian.jpg";
import Image from "next/image";

const LighthightPost = () => {
  const [clickHeart, setClickHeart] = useState(false);

  const handleClickHeart = () => {
    setClickHeart(state => !state)
  }

  return (
    <div className="w-full h-[250px] border border-black rounded-[20px] px-[20px] py-[10px] flex flex-row items-center justify-between gap-[10px] relative">
      <Image src={durian} className="w-[220] h-[220px] object-cover" />

      <div className="flex-1 h-full flex flex-col items-start gap-[10px]">
        <h1>Tên sản phẩm: Sầu riêng</h1>
        <p>Số lượng: 100 kg</p>
        <p>Trạng thái: Đang thu hoạch</p>
        <p>Mô tả: Đây là đặc sản của Việt Nam ...</p>
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
