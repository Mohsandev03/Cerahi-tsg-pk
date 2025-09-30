// 'use client'

// import React, { useState } from 'react'
// import Product from '../Product/Product'
// import { ProductType } from '@/type/ProductType'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { motion } from 'framer-motion'
// import 'swiper/css/bundle';

// interface Props {
//     data: Array<ProductType>;
//     start: number;
//     limit: number;
// }

// const NewArrival: React.FC<Props> = ({ data, start, limit }) => {
//     // Default tab set to 'Casual'
//     const [activeTab, setActiveTab] = useState<string>('Casual');

//     const handleTabClick = (type: string) => {
//         setActiveTab(type);
//     };

//     // Filter products based on the active tab and 'fashion' category
//     const filteredProducts = data.filter((product) => product.type === activeTab && (product.category === 'fashion'));

//     return (
//         <>
//             <div className="tab-features-block md:pt-20 pt-10">
//                 <div className="container">
//                     <div className="heading flex items-center justify-between gap-5 gap-y-3 flex-wrap">
//                         <div className="heading3">Leather Jackets</div>
//                         <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
//                             {['Casual', 'Formal', 'Biker', 'Winter'].map((type, index) => (
//                                 <div
//                                     key={index}
//                                     className={`tab-item relative text-secondary text-button-uppercase py-2 px-5 cursor-pointer duration-500 hover:text-black 
//                                         ${activeTab === type ? 'active' : ''}`}
//                                     onClick={() => handleTabClick(type)}
//                                 >
//                                     {activeTab === type && (
//                                         <motion.div layoutId='active-pill' className='absolute inset-0 rounded-2xl bg-white'></motion.div>
//                                     )}
//                                     <span className='relative text-button-uppercase z-[1]'>
//                                         {type}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="list-product hide-product-sold section-swiper-navigation style-outline style-center style-small-border md:mt-10 mt-6">
//                         <Swiper
//                             spaceBetween={12}
//                             slidesPerView={2}
//                             navigation
//                             loop={true}
//                             modules={[Navigation, Autoplay]}
//                             breakpoints={{
//                                 576: {
//                                     slidesPerView: 2,
//                                     spaceBetween: 12,
//                                 },
//                                 768: {
//                                     slidesPerView: 3,
//                                     spaceBetween: 20,
//                                 },
//                                 992: {
//                                     slidesPerView: 4,
//                                     spaceBetween: 20,
//                                 },
//                                 1200: {
//                                     slidesPerView: 4,
//                                     spaceBetween: 30,
//                                 },
//                             }}
//                             className='h-full'
//                         >
//                             {filteredProducts.slice(start, limit).map((prd, index) => (
//                                 <SwiperSlide key={index}>
//                                     <Product data={prd} type='grid' />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default NewArrival
