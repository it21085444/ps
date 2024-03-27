"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRating from "@/components/star-rating/star-rating";
import productsData from "./product-premium.json";
import "./product-premium.css";

const ProductPremium = () => {
  return (
    <div>
      <div className="product-essentials">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {productsData.map((product) => (
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
              <div className="bottom-div px-3 pt-3">
                <div className="flex items-center mt-2.5 mb-2 select-none">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <StarRating averageStars={product.averageStars} />
                    <span className="bg-fuchsia-100 text-fuchsia-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-fuchsia-200 dark:text-fuchsia-800 ms-3">
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
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductPremium;
