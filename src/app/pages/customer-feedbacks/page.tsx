"use client";
import React, { useState } from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import LookBook from "@/components/Home1/LookBook";
import TestimonialItem from "@/components/Testimonial/TestimonialItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

import { TestimonialType } from "@/type/TestimonialType";
import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import reviewData from "@/data/Testimonial.json";
import Collection from "@/components/Home1/Collection";
import Quote from "@/components/Home1/Quote";
import Newsletter from "@/components/Home1/Newsletter";

interface Props {
  data?: Array<TestimonialType>;
  limit?: number;
}

const Testimonial: React.FC<Props> = ({ data = [], limit = 3 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      {/* ✅ Top Navbar */}
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />

      {/* ✅ Header */}
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="Customer Feedbacks"
          subHeading="Customer Feedbacks"
          backgroundImage="/images/banner/page-title-s2.jpg"
        />
      </div>

      {/* ✅ Quote Section */}
      <Quote />

      {/* ✅ Collection Section */}
      <div className="customer-feedbacks pt-10">
        <div className="container">
          <Collection />
        </div>
      </div>

      {/* ✅ Testimonials Swiper */}
      <div className="customer-feedbacks pb-10">
        <div className="heading3 text-center">What People Are Saying</div>
        <div className="container pagination-mt40 md:mt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination]}
            className="list-review"
            onSlideChange={handleSlideChange}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {reviewData.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialItem data={item} type="style-one" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ✅ Lookbook Section (optional, currently empty) */}
      <div className="py-10">
        {/* <LookBook data={[]} start={0} limit={0} /> */}
      </div>

      {/* ✅ Newsletter */}
      <Newsletter props="bg-green mb-10" />

      {/* ✅ Instagram & Brands */}
      <Instagram />
      <Brand />

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default Testimonial;
