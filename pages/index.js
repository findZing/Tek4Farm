import ContentHome from "@/components/ContentHome";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

import banner from "../public/assets/images/banner.jpg";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Trang chủ</title>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />

      </Head>
      <div className="max-w-content w-full mx-auto flex flex-row justify-between gap-[20px] pt-[20px]">
        <Image src={banner} className="w-[70%] h-[300px] object-cover rounded-[12px]" />
        <Image src={banner} className="w-[30%] h-[300px] object-cover rounded-[12px]" />
      </div>
      <ContentHome />
    </Layout>
  );
}
