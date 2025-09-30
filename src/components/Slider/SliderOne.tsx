"use client";

import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderOne = () => {
  return (
    <>
      <div className="slider-block style-one  xl:h-[720px] lg:h-[680px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
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
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
             
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item h-full w-full relative">
                <div className=" items-center relative">
                 
                  <div className="sub-img ">
                    <Image
                      src={"/images/slider/spo.jpg"}
                      width={2000}
                      height={2000}
                      alt="bg1-3"
                      priority={true}
                    />
                  </div>
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
