"use client";
import React from "react";
import Image from "next/image";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Benefit from "@/components/Home1/Benefit";
import Newsletter from "@/components/Home1/Newsletter";
import OurProduction from "@/components/Home1/OurProduction";
import VideoTutorial from "@/components/Home1/VideoTutorial";

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
          heading="Our Production Process"
          subHeading="Our Production Process"
          backgroundImage={"/images/banner/page-title-s2.jpg"}
        />
      </div>

      <section className="page-section">
        <div className="container mx-auto mt-20 ml-5">
          <div className="flex flex-wrap">
            {/* Images Column */}
            <div className="w-full sm:w-1/2 md:w-1/3 mb-8 sm:mb-0">
              <div className="relative flex">
                <div className="call-action-4-image-1 ">
                  <Image
                    src="/images/other/about-1.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    src="/images/other/about-1.jpg"
                    alt="Image description"
                    width={500}
                    height={692}
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            {/* Text Content Column */}
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-2/5 lg:ml-4 m-4 ">
              <div className="wow linesAnimIn" data-splitting="lines">
                <h3 className="h5 text-xl font-semibold text-gray-800 mb-4">
                  Creative Excellence
                </h3>

                <p className="text-gray-600 mb-6">
                  Resonance is an innovative and dynamic full-service creative
                  studio that is passionate about crafting exceptional digital
                  experiences and products. We specialize in branding, design,
                  and engineering, and we are committed to producing work that
                  not only looks amazing but also functions seamlessly.
                </p>

                <h3 className="h5 text-xl font-semibold text-gray-800 mb-4">
                  Seamless Production
                </h3>

                <p className="text-gray-600 mb-0">
                  We work closely with our clients to develop websites, apps,
                  and other digital products that are not only visually stunning
                  but also intuitive and user-friendly. We always strive to
                  ensure that our clients are completely satisfied with the
                  final product.
                </p>
              </div>
            </div>

            {/* Additional Image Column (hidden on small screens) */}
            <div className="hidden lg:block w-full lg:w-1/4 xl:w-1/5 lg:ml-4 mt-4 lg:mt-0">
              <div className="overflow-hidden">
                <Image
                  src="/images/other/about-1.jpg"
                  alt="Image description"
                  width={330}
                  height={894}
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurProduction />
      <div className="video ">
        <VideoTutorial />
      </div>

      <Newsletter props="bg-green md:mt-20 mt-10" />
      <div className="benefit py-10">
        {" "}
        <Benefit props="py-10" />
      </div>
      {/* <Instagram /> */}
      <Brand />
      <Footer />
    </>
  );
};

export default AboutUs;
