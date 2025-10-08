"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryBox: React.FC = () => {
  // ✅ Dummy Product Data (links added)
  const products = [
    {
      id: 1,
      name: "Boxing Focusing Pads",
      price: "$123,56 USD / Item",
      img: "/images/categories/BoxingFocusingPads.png",
      badge: "Uncategorized",
      badgeColor: "bg-orange-500",
      link: "/categories/boxing-focusing-pads",
    },
    {
      id: 2,
      name: "Boxing Uniform",
      price: "$123,56 USD / Item",
      img: "/images/categories/BoxingUniform.png",
      badge: "20% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/boxing-uniform",
    },
    {
      id: 3,
      name: "Caps",
      price: "$123,56 USD / Item",
      img: "/images/categories/Caps.png",
      badge: "70% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/caps",
    },
    {
      id: 4,
      name: "Champion Belts",
      price: "$123,56 USD / Item",
      img: "/images/categories/ChampionBelts.png",
      badge: "70% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/champion-belts",
    },
    {
      id: 5,
      name: "Chest Guard",
      price: "$123,56 USD / Item",
      img: "/images/categories/ChestGuard.png",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/chest-guard",
    },
    {
      id: 6,
      name: "Fitness Gloves",
      price: "$234,12 USD / Item",
      img: "/images/categories/FitnessGloves.png",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/fitness-gloves",
    },
    {
      id: 7,
      name: "Gardening Gloves",
      price: "$125,78 USD / Item",
      img: "/images/categories/GardeningGlove.jpg",
      badge: "70% Off,Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/gardening-gloves",
    },
    {
      id: 8,
      name: "Karate shoes",
      price: "$234,12 USD / Item",
      img: "/images/categories/KarateShoes.png",
      badge: "70% Off,Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/karate-shoes",
    },
      {
      id: 9,
      name: "Working Gloves",
      price: "$123,56 USD / Item",
      img: "/images/categories/WorkingGloves.png",
      badge: "Uncategorized",
      badgeColor: "bg-orange-500",
      link: "/categories/working-gloves",
    },
    {
      id: 10,
      name: "Police / Military gloves",
      price: "$123,56 USD / Item",
      img: "/images/categories/BoxingUniform.png",
      badge: "20% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/boxing-uniform",
    },
    {
      id: 11,
      name: "Shooting Gloves",
      price: "$123,56 USD / Item",
      img: "/images/categories/Caps.png",
      badge: "70% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/caps",
    },
    {
      id: 12,
      name: "Tactical Gloves",
      price: "$123,56 USD / Item",
      img: "/images/categories/TacticalGloves.png",
      badge: "70% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/tactical-gloves",
    },
    {
      id: 13,
      name: "Winter Gloves",
      price: "$123,56 USD / Item",
      img: "/images/categories/WinterGlove.png",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/wintergloves",
    },
    {
      id: 14,
      name: "Weight Lifting Gloves",
      price: "$234,12 USD / Item",
      img: "/images/categories/WeightLiftingGloves.png",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/Weight LiftingGloves",
    },
    {
      id: 15,
      name: "Punching paddle",
      price: "$125,78 USD / Item",
      img: "/images/categories/Punchingpaddle.jpg",
      badge: "70% Off,Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/punchingpaddle",
    },
    {
      id: 16,
      name: "Punching Bags",
      price: "$234,12 USD / Item",
      img: "/images/categories/PunchingBag.png",
      badge: "70% Off,Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/PunchingBag",
    },
      {
      id: 17,
      name: "Groin Guards",
      price: "$123,56 USD / Item",
      img: "/images/categories/GroinGuards.jpg",
      badge: "Uncategorized",
      badgeColor: "bg-orange-500",
      link: "/categories/groin-guards",
    },
    {
      id: 18,
      name: "Head Guards",
      price: "$123,56 USD / Item",
      img: "/images/categories/HeadGuards.png",
      badge: "20% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/head-guards",
    },
    {
      id: 19,
      name: "Hand Wraps",
      price: "$123,56 USD / Item",
      img: "/images/categories/HandWraps.png",
      badge: "70% Off",
      badgeColor: "bg-orange-500",
      link: "/categories/hand-wraps",
    },
 
    {
      id:21,
      name: "Taekwondo Uniform",
      price: "$123,56 USD / Item",
      img: "/images/categories/Taekwondouniform.png",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/taekwondo-uniform",
    },
    {
      id: 22,
      name: "Jui Jitsu uniform",
      price: "$234,12 USD / Item",
      img: "/images/categories/juijitsuUniform.jpg",
      badge: "Best Seller",
      badgeColor: "bg-orange-500",
      link: "/categories/juijitsu-uniform",
    },
   
  ];

  return (
    <section className="w-full py-5 bg-white pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* 🔹 Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-14 gap-10">
          {/* Left: Heading */}
          <div>
         
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              quiet luxury <br />
              <span className="block text-4xl md:text-7xl font-bold leading-tight py-4">
                collection
              </span>
            </h2>
          </div>

          {/* Right Side: Paragraph + Link */}
          <div className="flex flex-col lg:items-end lg:text-right max-w-xl pt-20">
            <p className="text-gray-600 text-base mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a
              href="#"
              className="text-sm text-orange-500 font-medium hover:underline mt-6 lg:mt-0"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* 🔹 Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Badge(s) */}
              {product.badge.split(",").map((badge, idx) => (
                <span
                  key={idx}
                  className={`absolute top-3 left-3 text-xs text-white px-2 py-1 rounded-full ${product.badgeColor}`}
                >
                  {badge.trim()}
                </span>
              ))}

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title with Link */}
              <Link href={product.link}>
                <h3 className="mt-3 text-gray-800 capitalize font-medium text-base truncate hover:text-orange-500 transition">
                  {product.name}
                </h3>
              </Link>

              {/* Price */}
              <p className="text-orange-500 text-sm font-semibold">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBox;
