import Image from "next/image";
import React from "react";

import durian from "../public/assets/images/durian.jpg";

import { AiOutlineHeart } from "react-icons/ai";
import ListGroup from "./ListGroup";

const DATA_LIST_GROUP = [
  {
    title: 'Rau củ',
  },
  {
    title: 'Hoa quả',
  },
  {
    title: 'Thảo dược'
  }
]
const ContentHome = () => {

  const showListGroup = () => {
    return DATA_LIST_GROUP.map((item, index) => <ListGroup index={index} title={item.title}/>)
  }
  return (
    <div className="max-w-content w-full h-full mx-auto flex flex-row gap-[10px] relative">
      <div className="flex flex-col gap-[20px] py-[20px]">
        {
          showListGroup()
        }
      </div>

      {/* <div className="fixed top-[80px] right-0">
        <div className="flex-1 h-[500px] border border-black">
          <p>Bảng điều khiển</p>
        </div>
      </div> */}
    </div>
  );
};

export default ContentHome;
