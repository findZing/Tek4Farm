import React from 'react'
import durian from "../public/assets/images/durian.jpg";
import {AiOutlineHeart} from 'react-icons/ai'
import Image from "next/image";
import Post from './Post';
import LighthightPost from './LighthightPost';

const ListGroup = ({title}) => {
  return (
    <div className='w-[800px] flex flex-col gap-[20px]'>
        <div className='flex flex-row items-center gap-[10px]'>
        <p className='text-[20px] font-bold'>{title}</p>
        <div className='flex-1 h-[1px] border-t border-black'/>
        </div>
        <LighthightPost />
        <div className="w-full flex flex-row flex-wrap justify-between gap-[20px]">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </div>
  )
}

export default ListGroup