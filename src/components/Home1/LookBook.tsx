"use client";
import React from "react";
import Link from "next/link";

const LookBook: React.FC = () => {
  return (
    <div className="lookbook-block cos1 bg-surface py-10">
      <div className="about py-10">
        <div className="about-us-block">
          <div className="container">
            <div className="text flex items-center justify-center">
              <div className="content md:w-5/6 w-full">
                <div className="heading2 text-center mb-4">
                  Shop the Latest Trends
                </div>
                <div className="heading5 text-center">
                  Your Style, Delivered Right to Your Doorstep
                </div>
                <div className="body1 text-center md:mt-5">
                  Explore our curated collection of top-rated fashion,
                  accessories, and essentials. With new arrivals every week,
                  we bring you the best of style, quality, and comfort at
                  unbeatable prices. Start shopping today and elevate your
                  wardrobe with ease!
                </div>
                <div className="btn text-center">
                  <Link href="./shop" className="button-main md:mt-8">
                    Show Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
