"use client";

import React, { useState } from "react";
import Image from "next/image";

const LooksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Active-wear"); // ✅ Fixed default key
  const [openItem, setOpenItem] = useState<number | null>(1);

  const tabs = ["Active-wear", "Outerwear", "Hoodies", "T-Shirt"];

  const products = {
    "Active-wear": [
      {
        id: 1,
        name: "01/ Shadow knit by noire",
        rating: "★★★★☆",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.",
        price: "$23.4 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 2,
        name: "02/ Eclipse wool",
        rating: "★★★☆☆",
        desc: "High quality wool product with modern design.",
        price: "$40.2 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 3,
        name: "03/ Noirloom crewneck",
        rating: "★★★★★",
        desc: "Best-selling crewneck with soft cotton.",
        price: "$30.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 4,
        name: "04/ Classic sweatshirt",
        rating: "★★★★☆",
        desc: "Everyday comfort wear with premium fabric.",
        price: "$28.5 USD",
        img: "/images/product1.jpg",
      },
    ],
    Outerwear: [
      {
        id: 1,
        name: "01/ Winter Coat",
        rating: "★★★★☆",
        desc: "Warm and stylish coat for winter season.",
        price: "$55.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 2,
        name: "02/ Leather Jacket",
        rating: "★★★★★",
        desc: "Premium leather jacket with modern cut.",
        price: "$120.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 3,
        name: "03/ Denim Jacket",
        rating: "★★★☆☆",
        desc: "Casual denim jacket, perfect for daily wear.",
        price: "$75.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 4,
        name: "04/ Bomber Jacket",
        rating: "★★★★☆",
        desc: "Trendy bomber jacket with lightweight material.",
        price: "$90.0 USD",
        img: "/images/product1.jpg",
      },
    ],
    Hoodies: [
      {
        id: 1,
        name: "01/ Street Hoodie",
        rating: "★★★★☆",
        desc: "Trendy street style hoodie with oversized fit.",
        price: "$45.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 2,
        name: "02/ Zip-up Hoodie",
        rating: "★★★☆☆",
        desc: "Comfortable everyday zip hoodie.",
        price: "$38.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 3,
        name: "03/ Graphic Hoodie",
        rating: "★★★★★",
        desc: "Fashion-forward hoodie with unique prints.",
        price: "$60.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 4,
        name: "04/ Classic Hoodie",
        rating: "★★★★☆",
        desc: "Soft cotton hoodie perfect for casual wear.",
        price: "$42.5 USD",
        img: "/images/product1.jpg",
      },
    ],
    "T-Shirt": [
      {
        id: 1,
        name: "01/ Basic Tee",
        rating: "★★★☆☆",
        desc: "Everyday essential T-shirt made with soft cotton.",
        price: "$15.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 2,
        name: "02/ Graphic Tee",
        rating: "★★★★★",
        desc: "Trendy T-shirt with bold graphics.",
        price: "$25.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 3,
        name: "03/ Oversized Tee",
        rating: "★★★★☆",
        desc: "Relaxed oversized fit for casual wear.",
        price: "$20.0 USD",
        img: "/images/product1.jpg",
      },
      {
        id: 4,
        name: "04/ V-neck Tee",
        rating: "★★★★☆",
        desc: "Classic V-neck style T-shirt with modern cut.",
        price: "$18.5 USD",
        img: "/images/product1.jpg",
      },
    ],
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 🔹 Top Heading Section (Same as Screenshot) */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
            <span className="text-gray-500 text-xl font-medium block mb-4">
              01 /
            </span>

            {/* Heading in flex row */}
            <h2 className="flex flex-wrap gap-12 items-center gap-3 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-7xl">the looks</span>
              <span className="text-orange-500 text-6xl px-10">*</span>
              <span className="text-6xl" >everyone&apos;s <br></br>talking about</span>
            </h2>

            <p className="text-gray-600 text-base max-w-2xl mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <a
            href="#"
            className="text-sm text-orange-500 font-medium hover:underline mt-6 lg:mt-0"
          >
            Read More →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image with Tags */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/look-model.png"
                alt="Model Look"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
            {/* Default Tag */}
            <div className="group absolute top-[51%] left-[45%]">
              <span className="w-6 h-6 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold cursor-pointer">
                +
              </span>
              <div className="flex items-center absolute left-full ml-2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-200 w-auto whitespace-nowrap">
                Fitness Gloves{" "}
              </div>
            </div>

            {/* Hover Tags */}
            <div className="group absolute top-[20%] left-[54%]">
              <span className="w-6 h-6 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold cursor-pointer">
                +
              </span>
              <div className="hidden group-hover:flex items-center absolute left-full ml-2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-200 w-auto whitespace-nowrap">
                Head Guard
              </div>
            </div>

            <div className="group absolute bottom-[8%] left-[45%]">
              <span className="w-6 h-6 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold cursor-pointer">
                +
              </span>
              <div className="hidden group-hover:flex items-center absolute left-full ml-2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-200 w-auto whitespace-nowrap">
                Black Shirt{" "}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="flex items-start justify-between">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                the looks <span className="text-orange-500">*</span> <br />
                <span className="block py-2">everyone talking about</span>
              </h2>
              <a
                href="#"
                className="text-sm text-orange-500 font-medium hover:underline mt-3"
              >
                Read More →
              </a>
            </div>

            <p className="text-gray-600 text-base max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            {/* Tabs */}
            <div className="flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenItem(1); // always open first product
                  }}
                  className={`px-4 py-1 rounded-full text-sm transition ${
                    activeTab === tab
                      ? "bg-orange-500 text-white"
                      : "border border-orange-500 text-orange-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product List */}
            <div className="space-y-4">
              {(products[activeTab as keyof typeof products] || []).map(
                (product) => (
                  <div
                    key={product.id}
                    className="border-t border-gray-200 pt-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setOpenItem(openItem === product.id ? null : product.id)
                      }
                    >
                      <p className="font-semibold text-lg">{product.name}</p>
                      <span
                        className={`text-3xl font-bold transition-transform duration-300 ${
                          openItem === product.id
                            ? "text-orange-500 rotate-45"
                            : "text-gray-400"
                        }`}
                      >
                        +
                      </span>
                    </div>

                    {/* Smooth Expand/Collapse */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openItem === product.id
                          ? "max-h-[500px] mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-opacity duration-500 ease-in-out">
                        <div>
                          <p className="text-gray-600 text-sm max-w-sm">
                            {product.desc}
                          </p>
                          <a
                            href="#"
                            className="mt-2 inline-block text-orange-500 text-sm font-medium hover:underline"
                          >
                            Check More →
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="text-orange-500 font-semibold">
                            {product.price}
                          </p>
                          <Image
                            src={product.img}
                            alt={product.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LooksSection;
