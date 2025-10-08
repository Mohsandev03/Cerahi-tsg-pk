// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "@/type/ProductType";
import Product from "../Product/Product";

interface Props {
  data: Array<ProductType>;
  productPerPage: number;
  dataType: string | null | undefined;
  gender: string | null;
  category: string | null;
}

const ShopBreadCrumb1: React.FC<Props> = ({
  data,
  productPerPage,
  dataType,
  gender,
  category,
}) => {
  const [showOnlySale, setShowOnlySale] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);
  const [loading, setLoading] = useState(false);

  // ✅ Filter only "caps"
  let filteredData = data.filter(
    (product) =>
      product.category?.toLowerCase() === "caps" &&
      (!showOnlySale || product.sale) &&
      (!gender || product.gender === gender) &&
      (!dataType || product.type === dataType)
  );

  // ✅ Sorting
  let sortedData = [...filteredData];
  if (sortOption === "soldQuantityHighToLow")
    sortedData.sort((a, b) => b.sold - a.sold);
  else if (sortOption === "discountHighToLow")
    sortedData.sort(
      (a, b) =>
        Math.floor(100 - (b.price / b.originPrice) * 100) -
        Math.floor(100 - (a.price / a.originPrice) * 100)
    );
  else if (sortOption === "priceHighToLow")
    sortedData.sort((a, b) => b.price - a.price);
  else if (sortOption === "priceLowToHigh")
    sortedData.sort((a, b) => a.price - b.price);

  // ✅ Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 400 &&
        !loading
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) =>
            prev >= sortedData.length ? prev : prev + 8
          );
          setLoading(false);
        }, 700);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, sortedData.length]);

  const currentProducts = sortedData.slice(0, visibleCount);

  return (
    <>
      {/* ✅ Hero Section (untouched) */}
      <div className="w-full h-full from-slate-50 bg-[#efefef] to-blue-50 overflow-hidden pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-start justify-start absolute left-[12px] top-[17%]">
                <div className="relative w-14 h-14 bg-green rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Our Categories
                </h1>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Right animation section (unchanged) */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 border-2 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full shadow-inner flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      <svg
                        className="absolute w-full h-full animate-spin-reverse"
                        viewBox="0 0 200 200"
                      >
                        <defs>
                          <path
                            id="circlePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                          />
                        </defs>
                        <text className="text-[14px] sm:text-[16px] font-semibold fill-blue-900 tracking-wider">
                          <textPath href="#circlePath">
                            ✦ PREMIUM QUALITY ✦ FAST SHIPPING ✦ BEST PRICES ✦
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div
                  className="absolute -bottom-3 -left-3 w-5 h-5 bg-yellow-400 rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-reverse {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 30s linear infinite;
          }
        `}</style>
      </div>

      {/* ✅ Product section (unchanged layout) */}
      <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
        <div className="container">
          <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
            <div className="left flex has-line items-center flex-wrap gap-5">
              <div className="check-sale flex items-center gap-2">
                <input
                  type="checkbox"
                  name="filterSale"
                  id="filter-sale"
                  className="border-line"
                  onChange={() => setShowOnlySale(!showOnlySale)}
                />
                <label htmlFor="filter-sale" className="cation1 cursor-pointer">
                  Show only products on sale
                </label>
              </div>
            </div>
            <div className="right flex items-center gap-3">
              <div className="select-block relative">
                <select
                  id="select-filter"
                  name="select-filter"
                  className="caption1 py-2 pl-3 md:pr-20 pr-10 rounded-lg border border-line"
                  onChange={(e) => setSortOption(e.target.value)}
                  defaultValue={"Sorting"}
                >
                  <option value="Sorting" disabled>
                    Sorting
                  </option>
                  <option value="soldQuantityHighToLow">Best Selling</option>
                  <option value="discountHighToLow">Best Discount</option>
                  <option value="priceHighToLow">Price High To Low</option>
                  <option value="priceLowToHigh">Price Low To High</option>
                </select>
                <Icon.CaretDown
                  size={12}
                  className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2"
                />
              </div>
            </div>
          </div>

          {/* ✅ Product grid layout (unchanged) */}
          <div className="list-product hide-product-sold grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
            {currentProducts.map((item) => (
              <Product key={item.id} data={item} type="grid" />
            ))}
          </div>

          {loading && (
            <div className="text-center mt-10 text-gray-500 animate-pulse">
              Loading ...
            </div>
          )}
          {visibleCount >= sortedData.length && !loading && (
            <div className="text-center mt-10 text-gray-400">
              No more products to load.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShopBreadCrumb1;
