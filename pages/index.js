import ContentHome from "@/components/ContentHome";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

import banner from "../public/assets/images/banner.jpg";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-content w-full mx-auto flex flex-row justify-between gap-[20px] pt-[20px]">
        <Image src={banner} className="w-[70%] h-[300px] object-cover rounded-[12px]" />
        <Image src={banner} className="w-[30%] h-[300px] object-cover rounded-[12px]" />
      </div>
      <ContentHome />
    </Layout>
  );
}
