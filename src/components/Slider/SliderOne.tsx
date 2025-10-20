"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

const SliderOne = () => {
  const slides = [
    {
      img: "/images/banner/slider1.jpg",
      title: "Innovate Your World",
      desc: "Empower your business with cutting-edge digital experiences.",
      btn: "Explore Now",
    },
    {
      img: "/images/banner/home2.jpg",
      title: "Design That Inspires",
      desc: "Creativity meets technology to shape your brand’s future.",
      btn: "Learn More",
    },
    {
      img: "/images/banner/home3.jpg",
      title: "Build Beyond Limits",
      desc: "We transform ideas into powerful realities.",
      btn: "Get Started",
    },
    {
      img: "/images/banner/home14.jpg",
      title: "Digital Excellence",
      desc: "Crafting meaningful experiences that connect people.",
      btn: "Discover",
    },
        {
      img: "/images/banner/slider5.jpg",
      title: "Build Beyond Limits",
      desc: "We transform ideas into powerful realities.",
      btn: "Get Started",
    },
    {
      img: "/images/banner/home6.jpg",
      title: "Digital Excellence",
      desc: "Crafting meaningful experiences that connect people.",
      btn: "Discover",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="h-full w-full text-slider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={600}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Background image must be in a relative parent */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.img}
                  alt={`slide-${index}`}
                  fill
                  priority
                  className="object-fill"
                />
              </div>

              {/* Overlay for dark contrast */}
              <div className="absolute inset-0 bg-black/40 z-[1]" />

              {/* Text Content */}
              <div className="absolute left-[8%] bottom-[10%] z-[2] text-white max-w-[600px]">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 slide-text">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90 slide-text">
                  {slide.desc}
                </p>
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all slide-btn">
                  {slide.btn}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text animation */}
      <style jsx global>{`
        .text-slider .slide-text,
        .text-slider .slide-btn {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }

        .text-slider .swiper-slide-active .slide-text,
        .text-slider .swiper-slide-active .slide-btn {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.3s;
        }

        .text-slider .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
        }

        .text-slider .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}</style>
    </section>
  );
};

export default SliderOne;
