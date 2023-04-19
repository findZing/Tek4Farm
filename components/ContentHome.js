import Image from "next/image";
import React from "react";


import { AiOutlineHeart } from "react-icons/ai";
import ListGroup from "./ListGroup";
import { DATA_LIST_GROUP } from "@/data";

const ContentHome = () => {

  const showListGroup = () => {
    return DATA_LIST_GROUP.map((item, index) => <ListGroup key={index} title={item.title} content={item.content}/>)
  }
  return (
    <div className="max-w-content w-full h-full mx-auto flex flex-row gap-[10px] relative">
      <div className="flex flex-col items-center gap-[50px] py-[20px]">
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
