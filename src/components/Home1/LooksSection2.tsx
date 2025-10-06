"use client";

import React, { useState } from "react";
import Image from "next/image";

const LooksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Active-wear"); 
  const [openItem, setOpenItem] = useState<number | null>(1);

  const tabs = ["Active-wear", "Outerwear", "Hoodies", "T-Shirt"];

  const tabImages: Record<string, string> = {
    "Active-wear": "/images/look-model.png",
    Outerwear: "/images/outerwear-model.jpg",
    Hoodies: "/images/hoodie-model.png",
    "T-Shirt": "/images/tshirt-model.png",
  };

  const tabMarkers: Record<
    string,
    { top: string; left: string; label: string }[]
  > = {
    "Active-wear": [
      { top: "51%", left: "45%", label: "Fitness Gloves" },
      { top: "20%", left: "54%", label: "Head Guard" },
      { top: "80%", left: "45%", label: "Black Shirt" },
    ],
    Outerwear: [
      { top: "40%", left: "50%", label: "Winter Coat" },
      { top: "70%", left: "60%", label: "Leather Jacket" },
    ],
    Hoodies: [
      { top: "25%", left: "40%", label: "Street Hoodie" },
      { top: "60%", left: "55%", label: "Graphic Hoodie" },
      { top: "85%", left: "48%", label: "Zip-up Hoodie" },
    ],
    "T-Shirt": [
      { top: "42%", left: "42%", label: "Basic Tee" },
      { top: "60%", left: "68%", label: "Graphic Tee" },
    ],
  };

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
    <section className="w-full pt-20 pb-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 🔹 Top Heading Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div>
         

            <h2 className="flex flex-wrap items-center gap-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight -mt-8 ">
              <span className="text-7xl ">the looks</span>
              <span className="text-orange-500 text-6xl px-6">*</span>
              <span className="text-7xl pt-12">
                everyone&apos;s <br /> talking about
              </span>
            </h2>

            <p className="text-gray-600 text-base max-w-2xl -mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <a
            href="#"
            className="text-sm text-orange-500 font-medium hover:underline mt-6 lg:mt-0"
          >
            Read More →
          </a>
        </div>

        {/* 🔹 REVERSED SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* ✅ Left: Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-start justify-between">
              <h2 className="text-4xl md:text-7xl font-bold leading-tight">
                the looks <span className="text-orange-500">*</span> <br />
                <span className="block py-2">everyone talking about</span>
              </h2>
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
                    setOpenItem(1);
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

                    {/* Expand/Collapse */}
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

          {/* ✅ Right: Image with Markers */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={tabImages[activeTab]}
                alt="Model Look"
                width={600}
                height={600}
                className="rounded-2xl transition-all duration-500 ease-in-out"
              />
            </div>

            {/* Dynamic Markers */}
            {(tabMarkers[activeTab] || []).map((marker, index) => (
              <div
                key={index}
                className="group absolute"
                style={{ top: marker.top, left: marker.left }}
              >
                <span className="w-6 h-6 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold cursor-pointer">
                  +
                </span>
                <div className="hidden group-hover:flex items-center absolute left-full ml-2 bg-white px-3 py-1 rounded-full shadow-lg border border-gray-200 whitespace-nowrap">
                  {marker.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LooksSection;
