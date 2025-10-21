/* eslint-disable react/jsx-no-undef */
import React from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import productData from "@/data/Product.json";
import Collection2 from "@/components/Home1/Collection2";
import TabFeatures from "@/components/Home1/TabFeatures";
import Banner from "@/components/Home1/Banner";
import Benefit from "@/components/Home1/Benefit";
import testimonialData from "@/data/Testimonial.json";
import Testimonial from "@/components/Home1/Testimonial";
import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import Categories from "@/components/Home1/Categories";
import Eslider from "@/components/Home1/E-slider";
import Cslider from "@/components/Home1/C-slider";
// import TabFeatures2 from "@/components/Home1/TabFeatures2";
import SliderSix from "@/components/Slider/SliderSix";
import Banner3 from "@/components/Home1/Banner3";
import Banner4 from "@/components/Home1/banner4";
import WhyChooseUs from "@/components/Home1/WhyChooseUs";

// import ModalNewsletter from '@/components/Modal/ModalNewsletter'

export default function Home() {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <SliderOne />
        <Eslider />
        <Cslider />
          {/* <Banner /> */}
       </div>
      {/* <Collection2 /> */}
      {/* <div className="pt-10">
        <Banner4 />
      </div> */}

      {/* <Categories data={undefined} /> */}
      {/* <LookBook  /> */}
      {/* <div className="py-10">
        <TabFeatures data={productData} start={0} limit={3} />
      </div> */}
      <div></div>
      <div className="py-10">
        {/* <Banner3 /> */}
      </div>
      {/* <TabFeatures2 data={productData} start={0} limit={6} /> */}
      {/* <WhyChooseUs /> */}
      {/* <Testimonial data={testimonialData} limit={6} /> */}
      {/* <Benefit props="md:py-20 " /> */}
      {/* <Instagram /> */}
      {/* <Brand /> */}
      <Footer />
      {/* <ModalNewsletter /> */}
    </>
  );
}
