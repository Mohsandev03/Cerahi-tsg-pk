"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import CategoryBreadCrumb1 from "@/components/Shop/PoliceMilitaryGlovesBreadcrumb";
import productData from "@/data/Product.json";
import Footer from "@/components/Footer/Footer";
import ActiveWearBanner from "@/components/Home1/activewearbanner";
import Testimonial from "@/components/Home1/Testimonial";
import testimonialData from "@/data/Testimonial.json";
import Banner3 from "@/components/Home1/Banner3";
import CapsPopularCategories from "@/components/Home1/capspapularcategories";
import Capsbanner from "@/components/Home1/capsbanner";
import Brand from "@/components/Home1/Brand";
import Instagram from "@/components/Home1/Instagram";

export default function DefaultGrid() {
  const searchParams = useSearchParams();
  let type = searchParams.get("type");
  let gender = searchParams.get("gender");
  let category = searchParams.get("category");

  return (
    <>
      <TopNavOne
        props="style-one  bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
      </div>
      <ActiveWearBanner />
      <CategoryBreadCrumb1
        data={productData.map((item: any) => ({
          tabs: [],
          ...item,
        }))}
        productPerPage={9}
        dataType={type}
        gender={gender}
        category={category}
      />
      <Capsbanner />

      <CapsPopularCategories />

      <Banner3 />
      <Testimonial data={testimonialData} limit={6} />
      <Instagram />
      <Brand />

 
      <Footer />
    </>
  );
}
