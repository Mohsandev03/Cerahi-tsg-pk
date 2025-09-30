"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
 const ContactUs = () => {
  return (
    <>
      <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <Breadcrumb
          heading="Contact us"
          subHeading="Contact us"
          backgroundImage={"/images/banner/page-title-s2.jpg"}
        />
      </div>
      
      <div className="container mx-auto relative py-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h2 className="text-lg font-medium">
              Dont hesitate to reach out to us.
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              finibus urna, quis facilisis tortor. Sed imperdiet sed massa sed
              consequat. Vestibulum vehicula commodo nibh sit amet sodales. Nunc
              a neque rutrum mi convallis rhoncus sodales at augue. Donec
              egestas ultrices ullamcorper.
            </p>
          </div>
          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Contact Item */}
            <div className="flex flex-col items-start p-4 border-l-2 border-gray-300">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                </svg>
                <h4 className="font-semibold text-lg">Say hello</h4>
              </div>
              <div className="space-y-1 text-gray-600">
                <a
                  href="mailto:ibthemes21@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  cerahi-tsg-pk@gmail.com
                </a>
                <div>+1 837 652 8800</div>
              </div>
            </div>
            {/* Location Item */}
            <div className="flex flex-col items-start p-4 border-l-2 border-gray-300">
              <div className="flex items-center space-x-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                </svg>
                <h4 className="font-semibold text-lg">Location</h4>
              </div>
              <div className="text-gray-600">
                123 King Street, London W6 9JG, United Kingdom
              </div>
            </div>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-10">
          {/* Contact Form */}

          <form className="md:mt-6 mt-4">
            <div className="heading3 pb-10">Get in Touch</div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5">
              <div className="name ">
                <input
                  className="border-line px-4 py-3 w-full rounded-lg"
                  id="username"
                  type="text"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="email">
                <input
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  required
                />
              </div>
              <div className="message sm:col-span-2">
                <textarea
                  className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                  id="message"
                  rows={3}
                  placeholder="Your Message *"
                  required
                />
              </div>
            </div>
            <div className="block-button md:mt-6 mt-4">
              <button className="button-main">Send message</button>
            </div>
          </form>
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3071.5318265717196!2d-75.60465104752062!3d39.660249785873326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3cdadbfdb%3A0x80d20252268fc006!2zMjQ1IFF1aWdsZXkgQmx2ZCBzdGUgaywgTmV3IENhc3RsZSwgREUgMTk3MjAsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1662469609333!5m2!1suk!2sua"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>


        
      </div>




     




      <div className="store-list md:py-5 ">
        <div className="container">
          <div className="item bg-surface overflow-hidden rounded-[20px]">
            <div className="flex items-center lg:justify-end relative max-lg:flex-col">
              <Image
                src={"/images/other/about-1.jpg"}
                width={3000}
                height={2000}
                alt="bg-img"
                className="lg:absolute relative top-0 left-0 lg:bottom-0 lg:w-1/2 w-full h-full object-cover"
              />
              <div className="text-content lg:w-1/2 lg:pr-20 lg:pl-[100px] lg:py-14 sm:py-10 py-6 max-lg:px-6">
                <div className="heading3"> Office</div>
                <div className="list-featrue lg:mt-10 mt-6">
                  <div className="item flex lg:gap-10 gap-6">
                    <div className="w-1/2">
                      <div className="heading6">Address:</div>
                      <div className="text-secondary mt-2">
                        2163 Phillips Gap Rd West Jefferson, North Carolina
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="heading6">Opentime:</div>
                      <div className="text-secondary mt-2 whitespace-nowrap">
                        Monay - Friday:
                      </div>
                      <div className="text-title text-black whitespace-nowrap">
                        08:00 - 20:00
                      </div>
                      <div className="text-secondary whitespace-nowrap">
                        Saturday - Sunday:
                      </div>
                      <div className="text-title text-black whitespace-nowrap">
                        10:00 - 18:00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-featrue mt-5">
                  <div className="item flex lg:gap-10 gap-6">
                    <div className="w-1/2">
                      <div className="heading6">Infomation:</div>
                      <div className="text-secondary mt-2">
                        +1 666 234 8888
                        <br />
                        hi.avitex@gmail.com
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="heading6">Our social media:</div>
                      <div className="flex items-center sm:gap-4 gap-2 mt-2">
                        <Link
                          href={"https://www.facebook.com/"}
                          target="_blank"
                          className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300"
                        >
                          <div className="icon-facebook"></div>
                        </Link>
                        <Link
                          href={"https://www.instagram.com/"}
                          target="_blank"
                          className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300"
                        >
                          <div className="icon-instagram"></div>
                        </Link>
                        <Link
                          href={"https://www.youtube.com/"}
                          target="_blank"
                          className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white duration-300"
                        >
                          <div className="icon-youtube"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
