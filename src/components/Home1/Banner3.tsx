"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="banner-block style-one grid sm:grid-cols-3 gap-8 pb-10">
        <Link
          href={"/shop/breadcrumb-img"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <div className="banner-img">
            <Image
              src={"/images/banner/Sports-Bags.png"}
              width={2000}
              height={1300}
              alt="banner1"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end px-4 pb-6">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Sports Bags
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2 text-sm">
              Shop Now
            </div>
          </div>
        </Link>
        <Link
          href={"/shop/breadcrumb-img"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <div className="banner-img">
            <Image
              src={"/images/banner/Sports-Gloves.png"}
              width={2000}
              height={1300}
              alt="Sports gloves"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end px-4 pb-6">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Sports Gloves
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2 text-sm">
              Shop Now
            </div>
          </div>
        </Link>
        <Link
          href={"/shop/breadcrumb-img"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <div className="banner-img">
            <Image
              src={"/images/banner/sports-caps.png"}
              width={2000}
              height={1300}
              alt="banner3"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end px-4 pb-6">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Sports Caps
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2 text-sm">
              Shop Now
            </div>
          </div>
        </Link>
        {/* <Link
          href={"/shop/breadcrumb-img"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <div className="banner-img">
            <Image
              src={"/images/banner/Bike-Gear.png"}
              width={2000}
              height={1300}
              alt="banner4"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-start justify-end px-4 pb-6">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Bike Gear
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2 text-sm">
              Shop Now
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Banner;
