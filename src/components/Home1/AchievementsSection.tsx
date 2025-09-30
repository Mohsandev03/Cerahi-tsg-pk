
"use client";

import { Parallax } from "react-parallax";
import Link from "next/link";

interface AchievementsSectionProps {
  dark?: boolean;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({ dark }) => {
  return (
    <Parallax
      bgImage="/images/banner/NewArrivals.png"
      strength={300}
      className="bg-fixed"
    >
      <div className="bg-black/90 px-4 text-white">
        <div className="container mx-auto relative">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 py-10">
              <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
                Check recent achievements.
              </h2>
              <p className="text-lg mb-8 animate-fade-in-up delay-100">
                We provide effective ideas that grow businesses for our clients.
              </p>
              <div className="animate-fade-in-up delay-200">
                <Link
                  href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                  className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
                >
                  <span>Request Price</span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-[84px] py-10 font-bold">28%</h3>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[84px] py-10 font-bold ">1.5K</h3>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[84px] py-10 font-bold">10+</h3>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-[84px] py-10 font-bold">2X</h3>
                  <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default AchievementsSection;
