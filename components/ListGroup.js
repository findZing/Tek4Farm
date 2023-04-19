import React from 'react'
import durian from "../public/assets/images/durian.jpg";
import {AiOutlineHeart} from 'react-icons/ai'
import Image from "next/image";
import Post from './Post';
import LighthightPost from './LighthightPost';

const ListGroup = ({title, content}) => {

  const showListHightLightPost = () => {
    return content.hightlight.map((item, index) => (<LighthightPost key={index} title={item.title} quantity={item.quantity} status={item.status} description={item.description} />))
  }

  const addList = (component) => {

    return (
      <div className='w-full flex flex-row justify-between'>
        {component}
      </div>
    )
  }
  const showListNormalPost = () => {
    const list = []
    let listSub = []
    for(let i = 0; i < content.normal.length; i++)
    {
      listSub.push(<Post key={index} title={content.normal[i].title} quantity={content.normal[i].quantity} status={content.normal[i].status} description={content.normal[i].description}/>)

      if(i%5 == 4 || i == content.normal.length - 1) {
        list.push(addList(listSub))
        listSub = []
      }
    }

    return list
  }

  return (
    <div className='w-[1250px] flex flex-col gap-[20px] bg-white px-[20px] py-[10px] rounded-[30px]'>
        <div className='flex flex-row items-center gap-[10px]'>
        <p className='text-[20px] font-bold'>{title}</p>
        {/* <div className='flex-1 h-[1px] border-t border-black'/> */}
        </div>
        <div className='w-full flex flex-row items-center justify-between gap-[20px]'>
        {showListHightLightPost()}
        </div>
        <div className="w-full flex flex-row flex-wrap gap-[20px]">
            {/* <div className='w-full flex flex-row justify-between'>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            <div className='w-full flex flex-row justify-between'>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </div> */}

            {showListNormalPost()}
        </div>
      </div>
  )
}

export default ListGroup