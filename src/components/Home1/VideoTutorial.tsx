"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const VideoTutorial = () => {
  const [activeVideo, setActiveVideo] = useState<string>("1");
  const [openVideo, setOpenVideo] = useState<boolean>(false);

  const handleActiveVideo = (item: string) => {
    setActiveVideo(item);
  };

  return (
    <>
      <div className="video-tutorial-block md:mt-20 mt-14 bg-linear relative max-sm:flex max-sm:flex-col-reverse">
        <div className="container">
          <div className="list-category w-fit lg:py-[100px] sm:py-20 py-10 ml-5">
            <div
              onClick={() => handleActiveVideo("1")}
              className={`item flex items-center gap-3 cursor-pointer ${
                activeVideo === "1" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 inline-block">
                Crafting Exceptional Products
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("2")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "2" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 inline-block">
                The Making of Our Products
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("3")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "3" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 inline-block">
                How We Create Your Perfect Order
              </div>
            </div>
            <div
              onClick={() => handleActiveVideo("4")}
              className={`item flex items-center gap-3 cursor-pointer sm:mt-7 mt-4 ${
                activeVideo === "4" ? "active" : ""
              }`}
            >
              <Icon.CaretDoubleRight size={24} />
              <div className="heading4 inline-block">Our Product Process</div>
            </div>
          </div>
        </div>
        <div className="list-video sm:absolute max-sm:relative top-0 right-0 bottom-0 w-1/2 max-sm:w-full">
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "1" ? "active" : ""
            }`}
            data-item="1"
          >
            <div className="bg-img w-full h-full">
              <Image
                src={"/images/banner/demo.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              <Icon.Play size={30} weight="fill" />
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "2" ? "active" : ""
            }`}
            data-item="2"
          >
            <div className="bg-img w-full h-full">
              <Image
                src={"/images/banner/demo.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              <Icon.Play size={30} weight="fill" />
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "3" ? "active" : ""
            }`}
            data-item="3"
          >
            <div className="bg-img w-full h-full">
              <Image
                src={"/images/banner/demo.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              <Icon.Play size={30} weight="fill" />
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "4" ? "active" : ""
            }`}
            data-item="4"
          >
            <div className="bg-img w-full h-full">
              <Image
                src={"/images/banner/demo.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              <Icon.Play size={30} weight="fill" />
            </div>
          </div>
          <div
            className={`bg-video w-full h-full ${
              activeVideo === "5" ? "active" : ""
            }`}
            data-item="5"
          >
            <div className="bg-img w-full h-full">
              <Image
                src={"/images/banner/demo.jpg"}
                width={3000}
                height={3000}
                alt="bg-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="btn-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white sm:w-20 w-16 sm:h-20 h-16 rounded-full flex items-center justify-center duration-500 hover:bg-black hover:text-white"
              onClick={() => setOpenVideo(true)}
            >
              <Icon.Play size={30} weight="fill" />
            </div>
          </div>
        </div>
        <div
          className={`modal-video-block`}
          onClick={() => setOpenVideo(false)}
        >
          <div
            className={`modal-video-main ${openVideo ? "open" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/CxZI6R1VKJY?si=VB9g1QxpuTyoYFls"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTutorial;
