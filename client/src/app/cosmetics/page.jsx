"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import StarRating from "@/components/star-rating/star-rating";
import { CiFilter } from "react-icons/ci";
import productsData from "./products.json";
import "./cosmetics.css";
import ProductFilter from "@/components/product-filter/product-filter";

const CosmeticProducts = () => {
  //Dropdown
  const [sortBy, setSortBy] = useState("All");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSortBy = (option) => {
    setSortBy(option);
    setShowDropdown(false);
  };

  // Sorting function
  const sortProducts = (option) => {
    switch (option) {
      case "All":
        return filteredProducts;
      case "Best Seller":
        return filteredProducts.filter(
          (product) => product.label === "Best Seller"
        );
      case "New Arrival":
        return filteredProducts.filter(
          (product) => product.label === "New Arrival"
        );
      case "Price - Low to High":
        return filteredProducts.slice().sort((a, b) => a.price - b.price);
      case "Price - High to Low":
        return filteredProducts.slice().sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  };

  // product visible
  const [visibleProducts, setVisibleProducts] = useState(16);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData); // State to store filtered products

  // Filter function
  const applyFilters = (filters) => {
    const { minPrice, maxPrice, categories } = filters;

    // Filter products based on price range
    let filteredProducts = productsData.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    // Filter products based on selected categories
    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    console.log("Filtered products:", filteredProducts);

    // Update filteredProducts state
    setFilteredProducts(filteredProducts);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(visibleProducts + 8); // Increase the number of visible products by 8
  };

  return (
    <div className="main">
      {/* Main Banner */}
      <div className="cosmetic-banner">
        <img
          className="cosmetic-banner-img select-none"
          src="/images/banners/cosmetic-banner.png"
          alt="Cosmetic"
        />
        <div className="cosmetic-banner-content">
          <h1 className="font-bold text-[#f1b3b4] lg:text-5xl md:text-4xl">
            PiumiSkin Essentials
          </h1>
          <p className="cosmetic-paragraph text-white italic w-[40%] text-justify mt-3 lg-font-medium">
            Membership is complimentary and when you join, you u be eligible to
            earn points and receive perks. earn points each time you shop on
            Piumiskin.com follow us on social media, write product reviews and
            more. redeem your points for exclusive rewards on Piumiskjn. corn,
          </p>
        </div>
      </div>
      {/* Path */}
      <h3 className="path flex justify-end lg:text-[1.3rem] lg:mr-[8rem] md:mr-[8rem] mt-5">
        <a href="/">Home&nbsp;</a>{" "}
        <span className="font-bold select-none">/&nbsp; Piumi's Cosmetics</span>
      </h3>
      <div className="filter-section lg:flex justify-between mt-5 lg:mr-[8rem] lg:ml-[5rem] ml-[5rem]">
        <div className="flex justify-between">
          <h3 className="product-count select-none mt-2">
            <span className="font-bold">{productsData.length}</span> Products
          </h3>
          <div className="lg:hidden mr-10">
            <ProductFilter
              productsData={productsData}
              onChange={applyFilters}
            />
          </div>
        </div>
        <div className="dropdown-filter flex">
          <div className="dropdown">
            <div className="dropdown-header flex" onClick={toggleDropdown}>
              <span>Sort by: {sortBy}</span>
              {showDropdown ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            {showDropdown && (
              <div className="dropdown-options">
                <div onClick={() => handleSortBy("All")}>All</div>
                <div onClick={() => handleSortBy("Best Seller")}>
                  Best Seller
                </div>
                <div onClick={() => handleSortBy("New Arrival")}>
                  New Arrival
                </div>
                <div onClick={() => handleSortBy("Price - Low to High")}>
                  Price - Low to High
                </div>
                <div onClick={() => handleSortBy("Price - High to Low")}>
                  Price - High to Low
                </div>
                {/* Can add more sorting options as needed */}
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <ProductFilter
              productsData={productsData}
              onChange={applyFilters}
            />
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="product-essentials">
        <div className="product-grid">
          {sortProducts(sortBy)
            .slice(0, visibleProducts)
            .map((product) => (
              <div
                key={product.id}
                className="product-main-div w-full max-w-sm bg-white rounded-lg"
              >
                <div className="top-div relative">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="product-label absolute">
                      <p className="product-label-text text-xs text-gray-600 mt-2 font-light">
                        {product.label}
                      </p>
                    </div>
                  </a>
                </div>
                <div className="product-card-content bg-[white] bottom-div px-3 pt-3">
                  <div className="flex items-center mt-2.5 mb-2 select-none">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <StarRating averageStars={product.averageStars} />
                      <span className="bg-fuchsia-100 text-fuchsia-400 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-fuchsia-100 dark:text-fuchsia-400 ms-3">
                        {product.averageStars.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href="#">
                      <h5 className="text-sm font-semibold tracking-tight text-gray-900">
                        {product.title}
                      </h5>
                    </a>
                    <span className="text-sm font-bold text-black">
                      LKR {product.price.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mt-2 font-light">
                      {product.category}
                    </p>
                  </div>
                  <div className="product-add-to-cart-button absolute w-full h-0 transition-all duration-300">
                    <button className="product-add-to-cart-button-btn transition-all duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {productsData.length > visibleProducts && (
          <div className="load-more-button-container flex justify-center">
            <button
              onClick={loadMoreProducts}
              className="mt-[5rem] mb-5 load-more-button border-2 border-[#f1b3b4] py-2.5 px-3.5 rounded text-[#f1b3b4] hover:bg-[#f1b3b4] hover:text-white duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CosmeticProducts;
