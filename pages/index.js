import ContentHome from "@/components/ContentHome";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

import banner from '../public/assets/images/banner.jpg'

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex flex-row justify-center bg-black">
      <Image 
        src={banner}
        className="w-full h-[500px] container"
      />
      </div>
      <ContentHome />

    </Layout>
  );
}
