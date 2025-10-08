 // @ts-nocheck
"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { ProductType } from "@/type/ProductType";
import Image from "next/image";
import myPic from "/public/images/other/star.png";
import Product from "../Product/Product";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import HandlePagination from "../Other/HandlePagination";
import next from "next";

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
  const [type, setType] = useState<string | null | undefined>(dataType);
  const [size, setSize] = useState<string | null>();
  const [color, setColor] = useState<string | null>();
  const [brand, setBrand] = useState<string | null>();
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = productPerPage;
  const offset = currentPage * productsPerPage;

  const handleShowOnlySale = () => {
    setShowOnlySale((toggleSelect) => !toggleSelect);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setCurrentPage(0);
  };

  const handleType = (type: string | null) => {
    setType((prevType) => (prevType === type ? null : type));
    setCurrentPage(0);
  };

  const handleSize = (size: string) => {
    setSize((prevSize) => (prevSize === size ? null : size));
    setCurrentPage(0);
  };

  const handlePriceChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setPriceRange({ min: values[0], max: values[1] });
      setCurrentPage(0);
    }
  };

  const handleColor = (color: string) => {
    setColor((prevColor) => (prevColor === color ? null : color));
    setCurrentPage(0);
  };

  const handleBrand = (brand: string) => {
    setBrand((prevBrand) => (prevBrand === brand ? null : brand));
    setCurrentPage(0);
  };

  // ✅ FIXED: Only show caps category products
  let filteredData = data.filter((product) => {
    // force filter category to caps (ignore URL param)
    if (product.category?.toLowerCase() !== "caps") return false;

    let isShowOnlySaleMatched = !showOnlySale || product.sale;
    let isDatagenderMatched = !gender || product.gender === gender;
    let isDataTypeMatched = !dataType || product.type === dataType;
    let isTypeMatched = !type || product.type === type;
    let isSizeMatched = !size || product.sizes.includes(size);
    let isPriceRangeMatched =
      priceRange.min === 0 && priceRange.max === 100
        ? true
        : product.price >= priceRange.min && product.price <= priceRange.max;
    let isColorMatched =
      !color ||
      product.variation?.some((item) => item.color === color);
    let isBrandMatched = !brand || product.brand === brand;

    return (
      isShowOnlySaleMatched &&
      isDatagenderMatched &&
      isDataTypeMatched &&
      isTypeMatched &&
      isSizeMatched &&
      isColorMatched &&
      isBrandMatched &&
      isPriceRangeMatched
    );
  });

  // rest of your code unchanged
  let sortedData = [...filteredData];
  if (sortOption === "soldQuantityHighToLow") {
    filteredData = sortedData.sort((a, b) => b.sold - a.sold);
  }
  if (sortOption === "discountHighToLow") {
    filteredData = sortedData.sort(
      (a, b) =>
        Math.floor(100 - (b.price / b.originPrice) * 100) -
        Math.floor(100 - (a.price / a.originPrice) * 100)
    );
  }
  if (sortOption === "priceHighToLow") {
    filteredData = sortedData.sort((a, b) => b.price - a.price);
  }
  if (sortOption === "priceLowToHigh") {
    filteredData = sortedData.sort((a, b) => a.price - b.price);
  }

  const totalProducts = filteredData.length;
  const selectedType = type;
  const selectedSize = size;
  const selectedColor = color;
  const selectedBrand = brand;

  if (filteredData.length === 0) {
    filteredData = [
      {
        id: "no-data",
        category: "no-data",
        type: "no-data",
        name: "no-data",
        gender: "no-data",
        new: false,
        sale: false,
        rate: 0,
        price: 0,
        originPrice: 0,
        brand: "no-data",
        sold: 0,
        quantity: 0,
        quantityPurchase: 0,
        sizes: [],
        variation: [],
        thumbImage: [],
        images: [],
        description: "no-data",
        action: "no-data",
        slug: "no-data",
        extraSections: false,
        tabs: undefined,
      },
    ];
  }

  const pageCount = Math.ceil(filteredData.length / productsPerPage);
  if (pageCount === 0) setCurrentPage(0);

  const currentProducts: ProductType[] = filteredData.slice(
    offset,
    offset + productsPerPage
  );

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const handleClearAll = () => {
    dataType = null;
    setShowOnlySale(false);
    setSortOption("");
    setType(null);
    setSize(null);
    setColor(null);
    setBrand(null);
    setPriceRange({ min: 0, max: 100 });
    setCurrentPage(0);
    handleType(null);
  };

   return (
    <>
   


       
     <div className="w-full h-full from-slate-50 bg-[#efefef] to-blue-50 overflow-hidden   pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              {/* Shopping Icon */}
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

              {/* Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                  Our Categories
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Right Circle Animation */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Outer rotating dashed circle */}
                <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 border-2 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>

                {/* Gradient Circle */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full shadow-inner flex items-center justify-center p-2">
                    <div className="relative w-full h-full">
                      {/* Spinning text */}
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

                      {/* Center Star */}
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

                {/* Decorative Bouncing Circles */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div
                  className="absolute -bottom-3 -left-3 w-5 h-5 bg-yellow-400 rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
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

      <div className="shop-product breadcrumb1 lg:py-20 md:py-14 py-10">
        <div className="container">
          <div className="flex max-md:flex-wrap max-md:flex-col-reverse gap-y-8">
            <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3">
              <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                <div className="left flex has-line items-center flex-wrap gap-5">
                  <div className="check-sale flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="filterSale"
                      id="filter-sale"
                      className="border-line"
                      onChange={handleShowOnlySale}
                    />
                    <label
                      htmlFor="filter-sale"
                      className="cation1 cursor-pointer"
                    >
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
                      onChange={(e) => {
                        handleSortChange(e.target.value);
                      }}
                      defaultValue={"Sorting"}
                    >
                      <option value="Sorting" disabled>
                        Sorting
                      </option>
                      <option value="soldQuantityHighToLow">
                        Best Selling
                      </option>
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

              <div className="list-filtered flex items-center gap-3 mt-4">
                <div className="total-product">
                  {totalProducts}
                  <span className="text-secondary pl-1">Products Found</span>
                </div>
                {(selectedType ||
                  selectedSize ||
                  selectedColor ||
                  selectedBrand) && (
                  <>
                    <div className="list flex items-center gap-3">
                      <div className="w-px h-4 bg-line"></div>
                      {selectedType && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize"
                          onClick={() => {
                            setType(null);
                          }}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{selectedType}</span>
                        </div>
                      )}
                      {selectedSize && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize"
                          onClick={() => {
                            setSize(null);
                          }}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{selectedSize}</span>
                        </div>
                      )}
                      {selectedColor && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize"
                          onClick={() => {
                            setColor(null);
                          }}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{selectedColor}</span>
                        </div>
                      )}
                      {selectedBrand && (
                        <div
                          className="item flex items-center px-2 py-1 gap-1 bg-linear rounded-full capitalize"
                          onClick={() => {
                            setBrand(null);
                          }}
                        >
                          <Icon.X className="cursor-pointer" />
                          <span>{selectedBrand}</span>
                        </div>
                      )}
                    </div>
                    <div
                      className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-red cursor-pointer"
                      onClick={handleClearAll}
                    >
                      <Icon.X
                        color="rgb(219, 68, 68)"
                        className="cursor-pointer"
                      />
                      <span className="text-button-uppercase text-red">
                        Clear All
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="list-product hide-product-sold grid lg:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
                {currentProducts.map((item) =>
                  item.id === "no-data" ? (
                    <div key={item.id} className="no-data-product">
                      No products match the selected criteria.
                    </div>
                  ) : (
                    <Product key={item.id} data={item} type="grid" />
                  )
                )}
              </div>

              {pageCount > 1 && (
                <div className="list-pagination flex items-center md:mt-10 mt-7">
                  <HandlePagination
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>

            <div className="sidebar lg:w-1/4 md:w-1/3 w-full md:pr-12 md:pl-9 pl-3">
              <div className="filter-type pb-8 border-b border-line">
                <div className="heading6">Products Type</div>
                <div className="list-type mt-4">
                  {[
                    "Boxing Gloves",
                    "Fitness Gloves",
                    "Working Gloves",
                    "Police / Military gloves",
                    "Shooting Gloves",
                    "Tactical Gloves",
                    "Gardening Gloves",
                    "Winter Gloves",
                    "Weight Lifting Gloves",
                    "Chest Guard",
                    "Punching paddle",
                    "Punching Bags",
                    "Groin Guard",
                    "Boxing Focusing Pads",
                    "Head Guards",
                    "Karate Shoes",
                    "Hand Wraps",
                    "Champion Belts",
                    "Boxing uniform",
                    "Taekwando Uniform",
                    "Jui Jitsu uniform",
                    "Caps",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`item flex items-center justify-between cursor-pointer ${
                        dataType === item ? "active" : ""
                      }`}
                      onClick={() => handleType(item)}
                    >
                      <div className="text-secondary has-line-before hover:text-black capitalize">
                        {item}
                      </div>
                      <div className="text-secondary2">
                        (
                        {
                          data.filter(
                            (dataItem) =>
                              dataItem.type === item &&
                              dataItem.category.includes(dataItem.category)
                          ).length
                        }
                        )
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="filter-price pb-8 border-b border-line mt-8">
                <div className="heading6">Price Range</div>
                <Slider
                  range
                  defaultValue={[0, 120]}
                  min={0}
                  max={120}
                  onChange={handlePriceChange}
                  className="mt-5"
                />
                <div className="price-justify flex items-center justify-between flex-wrap mt-4">
                  <div className="min flex items-center gap-1">
                    <div>Min price:</div>
                    <div className="price-min">
                      $<span>{priceRange.min}</span>
                    </div>
                  </div>
                  <div className="min flex items-center gap-1">
                    <div>Max price:</div>
                    <div className="price-max">
                      $<span>{priceRange.max}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default ShopBreadCrumb1;