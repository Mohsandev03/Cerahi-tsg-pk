"use client";
import React, { useState } from "react";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import TestimonialItem from "@/components/Testimonial/TestimonialItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";

import Instagram from "@/components/Home1/Instagram";
import Brand from "@/components/Home1/Brand";
import reviewData from "@/data/Testimonial.json";
import Collection from "@/components/Home1/Collection";
import Quote from "@/components/Home1/Quote";
import Newsletter from "@/components/Home1/Newsletter";

const CustomerFeedbacksPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />

      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="Customer Feedbacks"
          subHeading="Customer Feedbacks"
          backgroundImage="/images/banner/page-title-s2.jpg"
        />
      </div>

      <Quote />

      <div className="customer-feedbacks pt-10">
        <div className="container">
          <Collection />
        </div>
      </div>

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

      <Newsletter props="bg-green mb-10" />
      <Instagram />
      <Brand />
      <Footer />
    </>
  );
};

export default CustomerFeedbacksPage;
