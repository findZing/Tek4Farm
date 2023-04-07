import Image from "next/image";
import React from "react";

import durian from "../public/assets/images/durian.jpg";

import { AiOutlineHeart } from "react-icons/ai";
import ListGroup from "./ListGroup";

const ContentHome = () => {
  return (
    <div className="w-full h-full mx-auto flex flex-row gap-[10px] relative">
      <div className="flex flex-col gap-[20px]">
        <ListGroup title="Hoa quả" />
        <ListGroup title="Hoa quả" />
        <ListGroup title="Hoa quả" />
        <ListGroup title="Hoa quả" />
        <ListGroup title="Hoa quả" />
      </div>

      <div className="fixed top-[80px] right-0">
        <div className="flex-1 h-[500px] border border-black">
          <p>Bảng điều khiển</p>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
