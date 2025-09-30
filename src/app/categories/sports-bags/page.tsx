"use client";

import React from "react";
// import TopNavThree from "@/components/Header/TopNav/TopNavThree";
//  import SliderThree from "@/components/Slider/SliderThree";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
// import TrendingProduct from "@/components/Home1/TrendingProduct";
import productData from "@/data/Product.json";
// import Collection from '@/components/Home1/Collection'
// import SliderToysKid from "@/components/Slider/SliderToysKid";
// import TrendingNow from '@/components/Home11/TrendingNow'
import Instagram from "@/components/Home1/Instagram";

import Benefit from "@/components/Home1/Benefit";
// import FlashSale from "@/components/Home1/FlashSale";
// import blogData from "@/data/Blog.json";
// import NewsInsight from "@/components/Home1/NewsInsight";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import ModalNewsletter from "@/components/Modal/ModalNewsletter";
export default function HomeThree() {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        {/* <Breadcrumb heading='' subHeading='About Us' /> */}

        {/* <TopNavThree props="style-three bg-white" /> */}

        {/* <MenuTwo /> */}
        {/* <BannerTop props="bg-black py-3" textColor='text-white' bgLine='bg-white' /> */}

        {/* <SliderThree /> */}
      </div>
      {/* <SliderToysKid /> */}
      {/* <TrendingNow   /> */}
      {/* <TrendingProduct data={productData} start={10} limit={18} /> */}
      {/* <Collection props="md:pt-20 pt-10" /> */}
      {/* <FlashSale /> */}
      {/* <NewsInsight data={blogData} start={0} limit={3} /> */}
      <Benefit props="md:mt-20 mt-10 py-10 px-2.5 bg-surface rounded-3xl" />
      <Instagram />
      <Brand />
      <Footer   />
      <ModalNewsletter />
    </>
  );
}
