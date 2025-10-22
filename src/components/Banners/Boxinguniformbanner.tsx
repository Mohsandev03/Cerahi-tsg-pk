"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative container h-[300px] mt-20 flex items-center overflow-hidden rounded-[20px]">
      {/* 🔹 Background Image */}
      <Image
        src="/images/banner/2-1.png" // 👉 Replace with your background image
        alt="Apple Service Background"
        fill
        priority
        className="object-cover object-center rounded-[20px]"
      />

      {/* 🔹 Optional overlay (you can add bg-black/30 if needed) */}
      <div className="absolute inset-0 rounded-[20px]"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center h-full">
          {/* Left Side - Text */}
          <div className="max-w-xl text-white">
            <p className="text-teal-300 text-lg font-medium mb-2">
              Repair Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4 text-black">
              We’re an Apple <br /> Authorised Service Provider
            </h2>
            <Link
              href="/repair-services"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-1  rounded-[122px] text-lg font-medium transition-all"
            >
              Learn More →
            </Link>
          </div>

          {/* Right Side - Empty */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
