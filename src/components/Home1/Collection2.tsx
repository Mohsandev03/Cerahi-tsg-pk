"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import { useRouter } from "next/navigation";

const Collection = () => {
  const router = useRouter();

  const handleTypeClick = (type: string) => {
    router.push(`/shop/breadcrumb1?type=${type}`);
  };

  return (
    <>
      <div className="collection-block style-six pt-5">
        <div className="container  mx-auto px-4 md:px-8">
          <div className="heading flex items-center justify-between gap-4 gap-y-2 flex-wrap">
            <div className="heading3">Explore Collections</div>
            <Link
              href={"/shop/collection"}
              className="text-button pb-1 border-b-2 border-black"
            >
              View All Collection
            </Link>
          </div>
          <div className="list-collection md:mt-10 mt-6">
            <Swiper
              spaceBetween={12}
              slidesPerView={2}
              loop={true}
              scrollbar={{
                hide: false,
              }}
              modules={[Navigation, Autoplay, Scrollbar]}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              className="h-full pb-6"
            >
              <SwiperSlide>
                <div
                  className="collection-item block relative overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Boxing")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/boxing.png"}
                      width={1000}
                      height={600}
                      alt="Boxing"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5   duration-500">
                    Boxing
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Champion-Belts")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Champion-Belts.png"}
                      width={1000}
                      height={600}
                      alt="Champion-Belts"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5 duration-500">
                    Champion Belts
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative  overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Chest-Guard")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Chest-Guard.png"}
                      width={1000}
                      height={600}
                      alt="Chest-Guard"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5 duration-500">
                    Chest Guard
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative  overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Hand-Wraps")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Hand-Wraps.png"}
                      width={1000}
                      height={600}
                      alt="Hand-Wraps"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px]   py-1.5 duration-500">
                    Hand Wraps
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Groin-Guard")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Groin-Guard.png"}
                      width={1000}
                      height={600}
                      alt="Groin-Guard"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5 duration-500">
                    Groin Guard
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Jiu-Jitsu")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Jiu-Jitsu.png"}
                      width={1000}
                      height={600}
                      alt="Jiu-Jitsu"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5    duration-500">
                    Jiu Jitsu
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="collection-item block relative overflow-hidden cursor-pointer"
                  onClick={() => handleTypeClick("Punching-Bags")}
                >
                  <div className="bg-img">
                    <Image
                      src={"/images/collection/Punching-Bags.png"}
                      width={1000}
                      height={600}
                      alt="Punching-Bags"
                    />
                  </div>
                  <div className="collection-name heading5 sm:bottom-8 bottom-4 lg:w-[200px] md:w-[160px] w-[100px] py-1.5 duration-500">
                    Punching Bags
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
