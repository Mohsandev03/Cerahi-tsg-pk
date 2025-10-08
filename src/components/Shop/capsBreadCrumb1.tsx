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
  const [sortOption, setSortOption] = useState("featured");
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
  if (sortOption === "popular") sortedData.sort((a, b) => b.sold - a.sold);
  else if (sortOption === "discount")
    sortedData.sort(
      (a, b) =>
        Math.floor(100 - (b.price / b.originPrice) * 100) -
        Math.floor(100 - (a.price / a.originPrice) * 100)
    );
  else if (sortOption === "priceHighToLow") sortedData.sort((a, b) => b.price - a.price);
  else if (sortOption === "priceLowToHigh") sortedData.sort((a, b) => a.price - b.price);
  // "featured" keeps original order

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

  // ✅ Tab buttons
  const tabs = [
    { id: "featured", label: "Featured" },
    { id: "popular", label: "Popular" },
    { id: "discount", label: "New added" },
  ];

  return (
    <>
      {/* ✅ Product section (unchanged layout) */}
      <div className="shop-product breadcrumb1 py-10">
        <div className="container">
          {/* ✅ Filter Header with Tabs */}
          <div className="filter-heading flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center flex-wrap gap-5">
              <div className="check-sale flex items-center gap-2">
                <input
                  type="checkbox"
                  name="filterSale"
                  id="filter-sale"
                  className="border-line"
                  onChange={() => setShowOnlySale(!showOnlySale)}
                />
                <label
                  htmlFor="filter-sale"
                  className="caption1 cursor-pointer"
                >
                  Show only products on sale
                </label>
              </div>
            </div>

            {/* ✅ Tabs */}
            <div className="flex items-center gap-3  p-2 rounded-xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSortOption(tab.id)}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    sortOption === tab.id
                      ? "bg-[#fdeedc] text-[#39b4ac]"
                      : "bg-[#e5e5e5] text-gray-700 hover:bg-[#ddd]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
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
