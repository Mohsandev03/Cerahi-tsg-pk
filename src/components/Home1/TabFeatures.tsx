'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { motion } from 'framer-motion'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const MenFashion: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('Causal');

    const handleTabClick = (type: string) => {
        setActiveTab(type);
    };

    const filteredProducts = data.filter((product) => product.type === activeTab && product.gender === 'men' && product.category === 'fashion');

    return (
        <>
            <div className="tab-features-block pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="heading3">men{String.raw`'s`} Fashion</div>
                        <div className="menu-tab flex items-center gap-2 font-medium ">
                            {['Causal', 'Formal', 'Biker', 'Winter'].map((type) => (
                                <div
                                    key={type}
                                    className={`tab-item py-2 px-5 cursor-pointer duration-500 hover:text-black relative ${activeTab === type ? 'text-black border-b-2 border-black' : 'text-secondary'}`}
                                    onClick={() => handleTabClick(type)}
                                >
                                    <span className='relative z-[1]'>
                                        {type}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        <Link href={"/shop/breadcrumb1"} className="banner rounded-[20px] overflow-hidden relative flex items-center justify-center">
                            <div className="heading4 text-white men-fashion">Fashion For <br /> Men</div>
                            <Image
                                src={'/images/collection/caualleather.png'}
                                width={1000}
                                height={1000}
                                alt='banner13'
                                className='absolute top-0 left-0 w-full h-full object-cover z-[-1] duration-500'
                            />
                        </Link>
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenFashion;


// "use client";

// import React, { useState } from "react";
// import Product from "../Product/Product";
// import { ProductType } from "@/type/ProductType";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { motion } from "framer-motion";
// import "swiper/css/bundle";
// import Link from "next/link";
// import Image from "next/image";

// interface Props {
//   data: Array<ProductType>;
//   start: number;
//   limit: number;
// }

// const NewArrival: React.FC<Props> = ({ data, start, limit }) => {
//   const [activeTab, setActiveTab] = useState<string>("Active"); // Default tab set to 'Active'

//   const handleTabClick = (type: string) => {
//     setActiveTab(type);
//   };

//   const filteredProducts = data.filter(
//     (product) => product.type === activeTab && product.category === "fashion"
//   );

//   return (
//     <>
//       <div className="tab-features-block md:pt-20 pt-10">
//         <div className="container">
//           <div className="heading flex items-center justify-between gap-5 gap-y-3 flex-wrap">
//             <div className="heading3">Sports Wear</div>
//             <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
//               {["Active", "Bags", "Gloves", "Caps"].map((type, index) => (
//                 <div
//                   key={index}
//                   className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black 
//                                         ${activeTab === type ? "active" : ""}`}
//                   onClick={() => handleTabClick(type)}
//                 >
//                   {activeTab === type && (
//                     <motion.div
//                       layoutId="active-pill"
//                       className="absolute inset-0 rounded-2xl bg-white"
//                     ></motion.div>
//                   )}
//                   <span className="relative text-button-uppercase z-[1]">
//                     {type}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="list-product hide-product-sold  grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
//             <Link
//               href={"/shop/breadcrumb1"}
//               className="banner rounded-[20px] overflow-hidden relative flex items-center justify-center"
//             >
//               <div className="heading4 text-white text-center">
//                 Fashion For <br />
//                 Men
//               </div>
//               <Image
//                 src={"/images/collection/caualleather.png"}
//                 width={1000}
//                 height={1000}
//                 alt="banner13"
//                 className="absolute top-0 left-0 w-full h-full object-cover z-[-1] duration-500"
//               />
//             </Link>
//           </div>
//         </div>

//         <div className="list-product hide-product-sold lg:grid-cols-8  section-swiper-navigation style-outline style-center style-small-border md:mt-10 mt-6">
//           <Swiper
//             spaceBetween={12}
//             slidesPerView={2}
//             navigation
//             loop={true}
//             modules={[Navigation, Autoplay]}
//             breakpoints={{
//               576: {
//                 slidesPerView: 2,
//                 spaceBetween: 12,
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//               },
//               992: {
//                 slidesPerView: 4,
//                 spaceBetween: 20,
//               },
//               1200: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//               },
//             }}
//             className="h-full"
//           >
//             {filteredProducts.slice(start, limit).map((prd, index) => (
//               <SwiperSlide key={index}>
//                 <Product data={prd} type="grid" />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewArrival;
