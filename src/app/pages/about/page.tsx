/* eslint-disable react/jsx-no-undef */
"use client";
import React from "react";
import Image from "next/image";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Benefit from "@/components/Home1/Benefit";
import Newsletter from "@/components/Home1/Newsletter";
import History from "@/components/Home1/History";
// import FreeShipping from "@/components/Home1/FreeShipping";
import AchievementsSection from "@/components/Home1/AchievementsSection";
 
// import Instagram from '@/components/Home6/Instagram'
import Brand from "@/components/Home1/Brand";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
 
const AboutUs = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="About Us"
          subHeading="About Us"
          backgroundImage={"/images/banner/page-title-s2.jpg"}
        />
      </div>
      <div className="about md:pt-20 pt-10">
        <div className="about-us-block">
          <div className="container">
            <div className="text flex items-center justify-center">
              <div className="content md:w-5/6 w-full">
                <div className="heading3 text-center">
                  Captivating Elegance, Timeless Style{" "}
                </div>
                <div className="body1 text-center md:mt-7 mt-5">
                  Our collection embodies grace and sophistication, perfect for
                  every occasion. Each piece is carefully crafted to offer
                  timeless style that never goes out of fashion. Experience the
                  ultimate in elegance and elevate your wardrobe with designs
                  that truly captivate.
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[30px] md:pt-20 pt-10 align-center m-10 mt-0">
              <div className="flex-1 text-section">
                <h2 className="text-2xl md:text-[39px] font-bold py-5 leading-[1.3]">
                  Simple & Minimalistic
                </h2>

                <h6 className="text-2xl ">Secure Checkout</h6>
                <p className="text-lg mt-4">
                  Excepteur sint occaecat cupidat non proident sunt in culpa qui
                  officia deserunt mollit anim est laborum.
                </p>
                <p className="text-lg mt-4">
                  accusan enim ipsam voluptam quia voluptas sit aspern odit aut.
                </p>
                <div className="btn text-left">
                  <Link href="./contact" className="button-main md:mt-8 ">
                    Contact us
                  </Link>
                </div>
              </div>

              <div className="flex-1 image-section">
                <Image
                  src={"/images/other/about-1.jpg"}
                  width={2000}
                  height={2000}
                  alt="bg-img"
                  className="w-full rounded-[30px]"
                />
              </div>

              <div className="flex-1 text-section">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="text-lg mt-4 py-5">
                  Excepteur sint occaecat cupidat non proident sunt in culpa qui
                  officia deserunt mollit anim est laborum.accusan enim ipsam
                  voluptam quia voluptas sit aspern odit aut.
                </p>
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-lg mt-4">
                  Excepteur sint occaecat cupidat non proident sunt in culpa qui
                  officia deserunt mollit anim est laborum.accusan enim ipsam
                  voluptam quia voluptas sit aspern odit aut. Sed quia
                  consequunturmagni dolores eos qui ratione voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" achivment pt-10">
      <AchievementsSection />
      </div>
 
      <History />
      {/* <FreeShipping /> */}
      <Newsletter props="bg-green  mt-10" />
      <div className="benefit">
        <Benefit props=" md:pt-20" />
      </div>
       <div className="brand py-5">
       </div>
       <Footer />
    </>
  );
};

export default AboutUs;
