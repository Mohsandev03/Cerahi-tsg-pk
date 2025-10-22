"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ShopBannerOnly: React.FC = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    {
      id: 0,
      title: ["Fluid Movement, Total Focus.", "Official Boxing Uniforms of Champions"],
      subtitle: "Engineered with lightweight, moisture-wicking fabric for peak agility and comfort throughout every round.",
      buttonText: "Shop Pro Uniforms",
      image: "/images/slider/2-1.png",
    },
    {
      id: 1,
      title: ["Your Brand, Your Ring.", "Custom Forged Boxing Apparel"],
      subtitle: "Utilize our OEM expertise to design and manufacture custom uniforms with flawless embroidery and fit.",
      buttonText: "Design Custom Kits",
      image: "/images/slider/2-3.png",
    },
    {
      id: 2,
      title: [" Woven for War.", "Tournament Ready Uniform Quality"],
      subtitle: "Durable stitching and resilient material stand up to the most rigorous training and competition cycles.",
      buttonText: "Explore Durability",
      image: "/images/slider/2-2.png",
    },
  ];

  const handleNext = () => setActiveBanner((prev) => (prev + 1) % banners.length);
  const handlePrev = () => setActiveBanner((prev) => (prev - 1 + banners.length) % banners.length);

  const currentBanner = banners[activeBanner];

  return (
    <div className="w-full">
      <div className="container max-w-7xl mx-auto mt-20 px-4  relative overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#39b4ac] text-gray-800 rounded-full p-3 shadow-md transition-all z-10"
          aria-label="Previous banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-[#39b4ac] text-gray-800 rounded-full p-3 shadow-md transition-all z-10"
          aria-label="Next banner"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Animated Banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-2xl bg-transparent overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">
              {/* Left Text Content */}
              <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 mb-2">{currentBanner.title[0]}</h1>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                  {currentBanner.title[1]}
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold text-[#39b4ac] mb-4">
                  {currentBanner.title[2]}
                </h1>
                <p className="text-sm md:text-xl text-gray-600 mb-6">
                  {currentBanner.subtitle}
                </p>
                <button className="bg-[#39b4ac] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#2e9189] transition-all">
                  {currentBanner.buttonText}
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex justify-center">
                <Image
                  src={currentBanner.image}
                  alt={currentBanner.title[1]}
                  width={500}
                  height={350}
                  className="object-contain transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShopBannerOnly;
