import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import sau_rieng from "../../public/assets/images/sau_rieng.jpg";

const NewsPost = () => {
  return (
    <div className="w-full h-[100px] flex flex-row items-center gap-[15px]">
      <Image src={image} className="w-[100px] h-[100px] object-cover" />
      <div className="h-full flex flex-col items-start justify-between">
        <h1 className="text-[20px] font-bold">
          Sầu riêng đang trở thành món đặc sản của Việt Nam
        </h1>
        <p className="text-[12px] italic">Ngày: 10/10/2020</p>
        <p className="text-[16px]">fjlsahgiarhgoviawenbuipsflvnbsaihboaib ....</p>
      </div>
    </div>
  );
};

const NewsPostGroup = ({title}) => {

    return (
        <div className="w-[60%] flex flex-col gap-[20px]">
          <div className="flex flex-row items-center gap-[10px]">
            <h1 className="text-[20px] font-bold">{title}</h1>
            <div className="h-[1px] flex-1 border-t border-black" />
          </div>

          <NewsPost />
          <NewsPost />
          <NewsPost />
          <NewsPost />
          <NewsPost />
          <NewsPost />
        </div>
    )
}
const NewsPage = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-[20px]">
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
        <NewsPostGroup title='Về nông nghiệp'/>
      </div>
    </Layout>
  );
};

export default NewsPage;
