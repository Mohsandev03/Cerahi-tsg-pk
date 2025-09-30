"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderOne = () => {
  return (
    <>
      <div className="slider-block style-one mt-20 ">
        <div className="slider-main h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                {/* Banner Image with Increased Height */}
                <div className="sub-img h-[400px] md:h-[450px] lg:h-[450px]">
                  <Image
                    src={"/images/slider/2ndbanner.png"}
                    width={2000}
                    height={2000}
                    alt="bg1-3"
                    priority={true}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 bg-black bg-opacity-50">
                  <h1 className="text-4xl  md:text-6xl font-bold mb-4">
                  Shop the Latest Trends
                  </h1>
                  <div className="heading5 text-center">
                    Your Style, Delivered Right to Your Doorstep
                  </div>
                  <p className="text-lg md:text-2xl mb-6 pt-5 mr-40 ml-40">
                  Explore our top-rated fashion, accessories, and essentials. New arrivals weekly, offering style, quality, and comfort at unbeatable prices. 
                  </p>
                  <a
                    href="/shop"
                    className="px-6 py-3 bg-yellow-500 text-black font-semibold text-white rounded-lg shadow-lg border-b-2 border-white hover:bg-[#81defb] transition-all duration-300"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SliderOne;
