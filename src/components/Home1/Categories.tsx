"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  data: any;
}

const CombinedComponent: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Sports Wear"); // Default tab is 'Sports Wear'

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/shop/breadcrumb1?category=${category}`);
  };

  return (
    <>
      <div className="tabs-container pt-10">
        <div className="heading3 text-center pb-10">Explore our Categories</div>

        {/* Tabs for switching between categories and products */}
        <div className="menu-tab-container mt-4   bg-surface rounded-3xl overflow-x-auto w-full max-w-[780px] mx-auto">
          <div className="menu-tab flex gap-2 justify-start flex-nowrap py-2">
            {[
              "Sports Wear",
              "Fitness Wear",
              "Leather Jacket",
              "Sports Bags",
              "Hunting Gear",
            ].map((tab) => (
              <div
                key={tab}
                className={`tab-item relative text-secondary text-button-uppercase text-center py-2 px-3 cursor-pointer duration-500 hover:text-black min-w-[120px] flex-shrink-0 ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-2xl bg-white"
                  ></motion.div>
                )}
                <span className="relative text-button-uppercase z-[1]">
                  {tab}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        {activeTab === "Sports Wear" && (
          <div className="collection-block cosmetic md:pt-10 ">
            <div className="container">
              <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                <div className="left">
                  <div
                    className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick("fashion")}
                  >
                    <div className="bg-img h-full w-full aspect-square">
                      <Image
                        src={"/images/collection/activewear.png"}
                        width={1000}
                        height={1000}
                        alt="body"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                      Active Wear
                    </div>
                  </div>
                </div>
                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                  <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/runninggear.png"}
                          width={1000}
                          height={1000}
                          alt="skin"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Running Gear
                      </div>
                    </div>
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/workouttops.png"}
                          width={1000}
                          height={1000}
                          alt="hair"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Workout Tops
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/outdoorwear.png"}
                          width={1000}
                          height={1000}
                          alt="accessories-cos"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Outdoor Gear
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Duplicate Products Section for the Second Tab */}
        {activeTab === "Fitness Wear" && (
          <div className="collection-block cosmetic md:pt-10">
            <div className="container">
              <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                <div className="left">
                  <div
                    className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick("fashion")}
                  >
                    <div className="bg-img h-full w-full aspect-square">
                      <Image
                        src={"/images/collection/gym.png"}
                        width={1000}
                        height={1000}
                        alt="body"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                      Gym Wear
                    </div>
                  </div>
                </div>
                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                  <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Leggings.png"}
                          width={1000}
                          height={1000}
                          alt="skin"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Leggings
                      </div>
                    </div>
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/SportsBras.png"}
                          width={1000}
                          height={1000}
                          alt="hair"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Sports Bras
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/BreathableTops.png"}
                          width={1000}
                          height={1000}
                          alt="accessories-cos"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Breathable Tops
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Duplicate Products Section for the Second Tab */}
        {activeTab === "Leather Jacket" && (
          <div className="collection-block cosmetic md:pt-10">
            <div className="container">
              <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                <div className="left">
                  <div
                    className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick("fashion")}
                  >
                    <div className="bg-img h-full w-full aspect-square">
                      <Image
                        src={"/images/collection/caualleather.png"}
                        width={1000}
                        height={1000}
                        alt="body"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                      Casual
                    </div>
                  </div>
                </div>
                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                  <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Formal.png"}
                          width={1000}
                          height={1000}
                          alt="skin"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Formal
                      </div>
                    </div>
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Biker.png"}
                          width={1000}
                          height={1000}
                          alt="hair"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Biker
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/winter.png"}
                          width={1000}
                          height={1000}
                          alt="accessories-cos"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Winter
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Duplicate Products Section for the Second Tab */}
        {activeTab === "Sports Bags" && (
          <div className="collection-block cosmetic md:pt-10">
            <div className="container">
              <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                <div className="left">
                  <div
                    className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick("fashion")}
                  >
                    <div className="bg-img h-full w-full aspect-square">
                      <Image
                        src={"/images/collection/DuffelBags.png"}
                        width={1000}
                        height={1000}
                        alt="body"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                      Duffel Bags
                    </div>
                  </div>
                </div>
                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                  <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Backpacks.png"}
                          width={1000}
                          height={1000}
                          alt="skin"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Backpacks
                      </div>
                    </div>
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/ShoeBags.png"}
                          width={1000}
                          height={1000}
                          alt="hair"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Shoe Bags
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/GymBags.png"}
                          width={1000}
                          height={1000}
                          alt="accessories-cos"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Gym Bags
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Duplicate Products Section for the Second Tab */}
        {activeTab === "Hunting Gear" && (
          <div className="collection-block cosmetic md:pt-10">
            <div className="container">
              <div className="grid sm:grid-cols-2 md:gap-[30px] gap-[16px]">
                <div className="left">
                  <div
                    className="collection-item block h-full relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                    onClick={() => handleCategoryClick("fashion")}
                  >
                    <div className="bg-img h-full w-full aspect-square">
                      <Image
                        src={"/images/collection/hunting.png"}
                        width={1000}
                        height={1000}
                        alt="body"
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                      Clothing
                    </div>
                  </div>
                </div>
                <div className="right grid grid-rows-2 md:gap-[30px] gap-[16px]">
                  <div className="top grid grid-cols-2 md:gap-[30px] gap-[16px]">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/tools.png"}
                          width={1000}
                          height={1000}
                          alt="skin"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Knives & Tools
                      </div>
                    </div>
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Biker.png"}
                          width={1000}
                          height={1000}
                          alt="hair"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Optics & Scopes
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div
                      className="collection-item block relative md:rounded-[20px] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => handleCategoryClick("fashion")}
                    >
                      <div className="bg-img h-full">
                        <Image
                          src={"/images/collection/Rifles.png"}
                          width={1000}
                          height={1000}
                          alt="accessories-cos"
                          className="h-full object-cover"
                        />
                      </div>
                      <div className="collection-name heading6 text-center sm:bottom-[30px] bottom-4 lg:w-[200px] md:w-auto max-lg:px-5 lg:py-3 py-1.5 bg-white rounded-xl duration-500">
                        Rifles & Shotguns
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CombinedComponent;
