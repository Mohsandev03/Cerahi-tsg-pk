"use client";

import React from "react";
import Image from "next/image";

const NumbersSection: React.FC = () => {
  return (
    <section className="w-full  pt-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 🔹 Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-20">
          {/* Left: Heading */}
          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-orange-500 md:text-6xl lg:text-7xl">*</span> Numbers –
              <br />
              <span className="block text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">never ever lie</span>
            </h2>
          </div>

          {/* Right: Text + Image */}
          <div className="flex flex-col gap-6">
            <span className="text-gray-500 text-xl font-medium"> </span>
            <p className="text-gray-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            
          </div>
        </div>

        {/* 🔹 Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {/* 1 */}
          <div>
            <h3 className="text-7xl font-bold text-black">
              123<span className="text-orange-500 text-5xl px-2">K +</span>
            </h3>
            <p className="text-gray-800 mt-2">happy customers</p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-7xl font-bold text-black">
              15<span className="text-orange-500 text-5xl px-2">+</span>
            </h3>
            <p className="text-gray-800 mt-2 ">years experience</p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-7xl font-bold text-black">
              204<span className="text-orange-500 text-5xl px-2">+</span>
            </h3>
            <p className="text-gray-800 mt-2">exclusive brands</p>
          </div>
          <div className="overflow-hidden rounded-2xl w-full max-w-sm ml-auto">
              <Image
                src="/images/sample.jpg" // apni image ka path daalna
                alt="Numbers Section"
                width={600}
                height={200}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;
