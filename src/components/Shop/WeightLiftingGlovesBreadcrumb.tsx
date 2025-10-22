// @ts-nocheck
"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProductType } from "@/type/ProductType";
import Product from "../Product/Product";
import ActiveWearBanner from "@/components/Home1/activewearbanner";

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
  const [sortOption, setSortOption] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isFetching, setIsFetching] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // ✅ Tabs
  const tabs = [
    { id: "all", label: "All Products" },
    { id: "popular", label: "Popular" },
    { id: "discount", label: "New Added" },
  ];

  // ✅ Filter only "caps"
  let filteredData = data.filter(
    (product) =>
      product.category?.toLowerCase() === "weight lifting gloves" &&
      (!showOnlySale || product.sale) &&
      (!gender || product.gender === gender) &&
      (!dataType || product.type === dataType)
  );

  // ✅ Sort logic
  let sortedData = [...filteredData];
  if (sortOption === "popular") sortedData.sort((a, b) => b.sold - a.sold);
  else if (sortOption === "discount")
    sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // ✅ Intersection Observer for infinite scroll
  useEffect(() => {
    if (visibleCount >= sortedData.length) return; // stop if all products loaded

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isFetching) {
          setIsFetching(true);
        }
      },
      { rootMargin: "200px" } // start loading a bit before visible
    );

    const loader = loaderRef.current;
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [isFetching, sortedData.length, visibleCount]);

  // ✅ When triggered, load more
  useEffect(() => {
    if (!isFetching) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) =>
        prev + 8 > sortedData.length ? sortedData.length : prev + 8
      );
      setIsFetching(false); // 👈 stop loading
    }, 400);

    return () => clearTimeout(timer);
  }, [isFetching, sortedData.length]);

  // ✅ Reset when filter/tab changes
  useEffect(() => {
    setVisibleCount(8);
  }, [sortOption, showOnlySale]);

  const currentProducts = sortedData.slice(0, visibleCount);

  return (

       <div className="container">
        {/* ✅ Header */}
        <div className="filter-heading flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center flex-wrap gap-5">
            <div className="check-sale flex items-center gap-2">
              <input
                type="checkbox"
                id="filter-sale"
                className="border-line"
                checked={showOnlySale}
                onChange={() => setShowOnlySale(!showOnlySale)} />
              <label htmlFor="filter-sale" className="caption1 cursor-pointer">
                Show only products on sale
              </label>
            </div>
          </div>

          {/* ✅ Tabs */}
          <div className="flex items-center gap-3 p-2 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSortOption(tab.id)}
                className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${sortOption === tab.id
                    ? "bg-[#fdeedc] text-[#39b4ac]"
                    : "bg-[#e5e5e5] text-gray-700 hover:bg-[#ddd]"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Product Grid */}
        <div className="list-product hide-product-sold grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7">
          {currentProducts.map((item) => (
            <Product key={item.id} data={item} type="grid" />
          ))}
        </div>

        {/* ✅ Loading Indicator */}
        {isFetching && visibleCount < sortedData.length && (
          <div className="text-center mt-10 text-gray-500 animate-pulse">
            Loading more products...
          </div>
        )}

        {/* ✅ Trigger for observer */}
        <div ref={loaderRef} className="h-10 w-full"></div>

        {/* ✅ End message */}
        {!isFetching && visibleCount >= sortedData.length && (
          <div className="text-center mt-10 text-gray-400">
            No more products to load.
          </div>
        )}
      </div>
   );
};

export default ShopBreadCrumb1;
