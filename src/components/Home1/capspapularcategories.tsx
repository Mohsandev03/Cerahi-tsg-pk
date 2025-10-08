"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: 1, name: "Boxing Focusing Pads", image: "/images/categories/BoxingFocusingPads.png" },
  { id: 2, name: "Boxing Uniform", image: "/images/categories/BoxingUniform.png" },
  { id: 3, name: "Caps", image: "/images/categories/Caps.png" },
  { id: 4, name: "ChampionBelts", image: "/images/categories/ChampionBelts.png" },
  { id: 5, name: "ChestGuard", image: "/images/categories/ChestGuard.png" },
  { id: 6, name: "Fitness Gloves", image: "/images/categories/FitnessGloves.png" },
  { id: 7, name: "Gardening Gloves", image: "/images/categories/GardeningGlove.jpg" },
  { id: 8, name: "Groin Guards", image: "/images/categories/GroinGuards.jpg" },
  { id: 9, name: "Hand Wraps", image: "/images/categories/HandWraps.png" },
  { id: 11, name: "Head Guards", image: "/images/categories/HeadGuards.png" },
  { id: 12, name: "jiu jitsu Uniform", image: "/images/categories/juijitsuUniform.jpg" },
  { id: 13, name: "Karate shoes", image: "/images/categories/Karateshoes.png" },
  { id: 14, name: "Punching Bag", image: "/images/categories/PunchingBag.png" },
  { id: 15, name: "ChestGuard", image: "/images/categories/Punchingpaddle.jpg" },
  { id: 16, name: "Tactical Gloves", image: "/images/categories/TacticalGloves.png" },
  { id: 17, name: "Gardening Gloves", image: "/images/categories/GardeningGlove.jpg" },
  { id: 18, name: "Taekwondo Uniform", image: "/images/categories/Taekwondouniform.png" },
  { id: 19, name: "Weight Lifting Gloves", image: "/images/categories/WeightLiftingGloves.png" },
  { id: 20, name: "Winter Gloves", image: "/images/categories/WinterGlove.png" },
  { id: 21, name: "Pillowcase", image: "/images/categories/pillow.webp" },
  { id: 22, name: "Working Gloves", image: "/images/categories/WorkingGloves.png" },
];

const PopularCategories: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1350px] mx-auto px-2 relative">
        {/* Heading */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] md:text-[26px] font-semibold">
            <span className="text-[#39b4ac] mr-1 text-3xl">Popular</span> Categories
          </h2>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-1 rounded-full border border-gray-300 text-gray-700 hover:bg-[#39b4ac] hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1 rounded-full border border-gray-300 text-gray-700 hover:bg-[#39b4ac] hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Category Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-5"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="min-w-[260px] md:min-w-[260px] bg-white rounded-[20px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all flex flex-col items-center justify-center py-3 cursor-pointer scroll-snap-align-start"
            >
              <div className="w-[220px] h-[220px] flex items-center justify-center rounded-[12px] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={420}
                  height={420}
                  className="object-cover rounded-[16px] transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-gray-800 font-medium mt-3 text-lg text-center">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar for all browsers */}
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
      `}</style>
    </section>
  );
};

export default PopularCategories;
