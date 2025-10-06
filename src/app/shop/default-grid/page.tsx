"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import ShopBreadCrumb1 from "@/components/Shop/ShopBreadCrumb1";
 import Footer from "@/components/Footer/Footer";
import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import LooksSection from "@/components/Home1/LooksSection";
import CategoryBox from "@/components/Home1/categorybox";
import NumbersSection from "@/components/Home1/NumbersSection";
import LooksSection2 from "@/components/Home1/LooksSection2";

export default function DefaultGrid() {
  return (
    <>
      <TopNavOne
        props="style-one  bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
      </div>
      <ShopBreadCrumb1 />
      <LooksSection />
      <CategoryBox />
      <NumbersSection />
      <LooksSection2 />
      <Instagram />
      <Brand />
      <Footer />
    </>
  );
}
