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

  // Filter product
  let filteredData = data.filter((product) => {
    let isShowOnlySaleMatched = true;
    if (showOnlySale) {
      isShowOnlySaleMatched = product.sale;
    }

    let isDatagenderMatched = true;
    if (gender) {
      isDatagenderMatched = product.gender === gender;
    }

    let isDataCategoryMatched = true;
    if (category) {
      isDataCategoryMatched = product.category === category;
    }

    let isDataTypeMatched = true;
    if (dataType) {
      isDataTypeMatched = product.type === dataType;
    }

    let isTypeMatched = true;
    if (type) {
      isTypeMatched = product.type === type;
    }

    let isSizeMatched = true;
    if (size) {
      isSizeMatched = product.sizes.includes(size);
    }

    let isPriceRangeMatched = true;
    if (priceRange.min !== 0 || priceRange.max !== 100) {
      isPriceRangeMatched =
        product.price >= priceRange.min && product.price <= priceRange.max;
    }

    let isColorMatched = true;
    if (color) {
      isColorMatched = product.variation.some((item) => item.color === color);
    }

    let isBrandMatched = true;
    if (brand) {
      isBrandMatched = product.brand === brand;
    }

    return (
      isShowOnlySaleMatched &&
      isDatagenderMatched &&
      isDataCategoryMatched &&
      isDataTypeMatched &&
      isTypeMatched &&
      isSizeMatched &&
      isColorMatched &&
      isBrandMatched &&
      isPriceRangeMatched
    );
  });

  // Create a copy array filtered to sort
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
      },
    ];
  }

  // Find page number base on filteredData
  const pageCount = Math.ceil(filteredData.length / productsPerPage);

  // If page number 0, set current page = 0
  if (pageCount === 0) {
    setCurrentPage(0);
  }

  // Get product data for current page
  let currentProducts: ProductType[];

  if (filteredData.length > 0) {
    currentProducts = filteredData.slice(offset, offset + productsPerPage);
  } else {
    currentProducts = [];
  }

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
      {/* <div className="container main-content w-full h-full flex flex-col mt-3  bg-surface">
      <div className="main-content w-full h-full flex flex-col mt-3  bg-surface">
        <div className="text-content items-center mt-2 px-10 py-10 flex flex-row">
          <div className="div">
            <div className="flex items-center relative top-20 right-14 ml-20">
              <Image
                src={myPic}
                width={50}
                height={50}
                alt="bg-img"
                className="inline-block "
              />
            </div>
            <h1 className="flex text-9xl font-bold px-4 mt-0 ml-20 ">
              our store
            </h1>
            <p className="text-gray-500 pl-7 mb-6 mt-1 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div
            className="relative  bg-yellow p-4 border mx-auto mb-4 
               w-[165px] h-[160px] rounded-full flex items-center justify-center"
          >
       
            <div className="w-40 h-40 bg-blue-100 rounded-full p-6 flex items-center justify-center">
              <div className="container text-center "></div>
              <h3 className="text-center  text-sm leading-tight text-blue-900 break-words">
                <svg width="220" height="220">
                  <defs>
                    <path
                      id="circle"
                      d="M 120, 115 m -75, 0 a 60,63 0 1,1 130,0 a 75,65 0 1,1 -150,0"
                      transform="rotate(320 100 133)"
                    />
                  </defs>
                  <text>
                    <textPath href="#circle">
                      YOUR TEXT GOES HERE OUTSIDE THE CIRCLE BUT YOU WILL
                    </textPath>
                  </text>
                </svg>
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div> */}

      <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              {/* Icon Badge */}
              <div className="inline-flex items-start justify-start absolute left-[12px] top-[17%]">
                <div className="relative w-16 h-16 bg-green rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300 justify-start">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-black"
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
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 tracking-tight">
                  Shop
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto lg:mx-0"></div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span> Lets Buy It</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Circular Badge */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-4 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>

                {/* Main circle */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  {/* Inner circle */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full shadow-inner flex items-center justify-center p-4">
                    {/* Circular text */}
                    <div className="relative w-full h-full">
                      <svg
                        className="w-full h-full animate-spin-reverse"
                        viewBox="0 0 200 200"
                      >
                        <defs>
                          <path
                            id="circlePath"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                          />
                        </defs>
                        <text className="text-[11px] sm:text-[13px] font-semibold fill-blue-900 tracking-wider">
                          <textPath href="#circlePath" startOffset="0%">
                            ✦ PREMIUM QUALITY ✦ FAST SHIPPING ✦ BEST PRICES ✦
                          </textPath>
                        </text>
                      </svg>

                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
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

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom animations */}
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
            <div className="sidebar lg:w-1/4 md:w-1/3 w-full md:pr-12">
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
              <div className="filter-size pb-8 border-b border-line mt-8">
                <div className="heading6">Size</div>
                <div className="list-size flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                  {["XS", "S", "M", "L", "XL", "2XL", "3XL"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className={`size-item text-button w-[44px] h-[44px] flex items-center justify-center rounded-full border border-line ${
                          size === item ? "active" : ""
                        }`}
                        onClick={() => handleSize(item)}
                      >
                        
                      </div>
                    )
                  )}
                  <div
                    className={`size-item text-button px-4 py-2 flex items-center justify-center rounded-full border border-line ${
                      size === "freesize" ? "active" : ""
                    }`}
                    onClick={() => handleSize("freesize")}
                  >
                    Freesize
                  </div>
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
              {/* <div className="filter-color pb-8 border-b border-line mt-8">
                                <div className="heading6">colors</div>
                                <div className="list-color flex items-center flex-wrap gap-3 gap-y-4 mt-4">
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'pink' ? 'active' : ''}`}
                                        onClick={() => handleColor('pink')}
                                    >
                                        <div className="color bg-[#F4C5BF] w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">pink</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'red' ? 'active' : ''}`}
                                        onClick={() => handleColor('red')}
                                    >
                                        <div className="color bg-red w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">red</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'green' ? 'active' : ''}`}
                                        onClick={() => handleColor('green')}
                                    >
                                        <div className="color bg-green w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">green</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'yellow' ? 'active' : ''}`}
                                        onClick={() => handleColor('yellow')}
                                    >
                                        <div className="color bg-yellow w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">yellow</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'purple' ? 'active' : ''}`}
                                        onClick={() => handleColor('purple')}
                                    >
                                        <div className="color bg-purple w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">purple</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'black' ? 'active' : ''}`}
                                        onClick={() => handleColor('black')}
                                    >
                                        <div className="color bg-black w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">black</div>
                                    </div>
                                    <div
                                        className={`color-item px-3 py-[5px] flex items-center justify-center gap-2 rounded-full border border-line ${color === 'white' ? 'active' : ''}`}
                                        onClick={() => handleColor('white')}
                                    >
                                        <div className="color bg-[#F6EFDD] w-5 h-5 rounded-full"></div>
                                        <div className="caption1 capitalize">white</div>
                                    </div>
                                </div>
                            </div> */}
              <div className="filter-brand mt-8">
                <div className="heading6">Brands</div>
                <div className="list-brand mt-4">
                  {["adidas", "hermes", "nike", "gucci ", "TSG"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="brand-item flex items-center justify-between"
                      >
                        <div className="left flex items-center cursor-pointer">
                          <div className="block-input">
                            <input
                              type="checkbox"
                              name={item}
                              id={item}
                              checked={brand === item}
                              onChange={() => handleBrand(item)}
                            />
                            <Icon.CheckSquare
                              size={20}
                              weight="fill"
                              className="icon-checkbox"
                            />
                          </div>
                          <label
                            htmlFor={item}
                            className="brand-name capitalize pl-2 cursor-pointer"
                          >
                            {item}
                          </label>
                        </div>
                        <div className="text-secondary2">
                          (
                          {
                            data.filter(
                              (dataItem) =>
                                dataItem.brand === item &&
                                dataItem.category.includes(dataItem.category)
                            ).length
                          }
                          )
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="list-product-block lg:w-3/4 md:w-2/3 w-full md:pl-3">
              <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                <div className="left flex has-line items-center flex-wrap gap-5">
                  <div className="choose-layout flex items-center gap-2">
                    <div className="item three-col w-8 h-8 border border-line rounded flex items-center justify-center cursor-pointer active">
                      <div className="flex items-center gap-0.5">
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                        <span className="w-[3px] h-4 bg-secondary2 rounded-sm"></span>
                      </div>
                    </div>
                    <Link
                      href={"/shop/sidebar-list"}
                      className="item row w-8 h-8 border border-line rounded flex items-center justify-center cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                        <span className="w-4 h-[3px] bg-secondary2 rounded-sm"></span>
                      </div>
                    </Link>
                  </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopBreadCrumb1;
