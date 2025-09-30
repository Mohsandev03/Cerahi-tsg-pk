import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="banner-block style-one grid sm:grid-cols-3 gap-5 pb-10">
        <Link
          href={"/shop/breadcrumb-img"}
          className="banner-item relative block overflow-hidden duration-500"
        >
          <div className="banner-img">
            <Image
              src={"/images/banner/BestSellers.png"}
              width={2000}
              height={1300}
              alt="Sports Wear"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Sports Wear
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
              src={"/images/banner/jacket.jpg"}
              width={2000}
              height={1300}
              alt="Leather Jackets"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Leather Jackets
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
              src={"/images/banner/huntinggear.jpg"}
              width={2000}
              height={1300}
              alt="Hunting Gear"
              priority={true}
              className="duration-1000"
            />
          </div>
          <div className="banner-content absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="heading2 text-white text-[30px] leading-[32px] font-semibold capitalize">
              Hunting Gear
            </div>
            <div className="text-button text-white relative inline-block pb-1 border-b-2 border-white duration-500 mt-2 text-sm">
              Shop Now
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
