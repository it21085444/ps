"use client";
import React, { useState, useEffect } from "react";
import { HeartIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";
import { StarIcon, RocketLaunchIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 }
};

const SinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(9000);
  const unitPrice = 100; // Adjust this value based on your unit price

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    // Update the total based on the quantity and unit price
    setTotal(quantity * unitPrice);
  }, [quantity, unitPrice]);
    const toggleDropdown = () =>
        {
            setIsOpen(!isOpen);
        };

   const [open, setOpen] = React.useState(0);

   const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container py-24 mx-auto">
          <div class="lg:w-5/5 mx-auto flex flex-wrap mb-5">
            {/* first row - images, descriptions */}
            <div class="lg:flex lg:flex-col">
              <div class="hidden lg:block mx-2 my-5">
                <img
                  class="w-[70px] h-[120px] relative rounded-[11px] mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
                <img
                  class="w-[70px] h-[120px] relative rounded-[11px] mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
                <img
                  class="w-[70px] h-[120px] relative rounded-[11px] mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
              </div>

              <div class="lg:hidden flex flex-wrap mt-4 mx-auto">
                <img
                  class="w-[81px] h-[100px] relative rounded-[11px] mr-4 mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
                <img
                  class="w-[81px] h-[100px] relative rounded-[11px] mr-4 mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
                <img
                  class="w-[81px] h-[100px] relative rounded-[11px] mb-4 mb-4"
                  src="/images/products/ALOE VERA FACE WASH.png"
                />
              </div>
            </div>
            <img
              alt="ecommerce"
              class="lg:w-1/4 w-full object-cover object-center rounded border border-gray-200 lg:ml-4"
              src="/images/products/ALOE VERA FACE WASH.png"
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ml-5">
              {/* navigation link */}
              <div className="max-w-screen-lg mx-auto px-4 md:px-8 mb-4">
                <div className="text-black">
                  <span className="text-lg font-normal font-PetrovSans tracking-wide block md:inline-block mb-2 md:mb-0">
                    Home / Piumi’s Cosmetics/
                  </span>
                  <span className="text-lg font-bold font-PetrovSans tracking-wide block md:inline-block">
                    aloe vera face wash
                  </span>
                </div>
              </div>

              {/* item name */}
              <div className="flex flex-row mb-4">
                <div className="h-auto text-black text-lg md:text-3xl font-bold font-TTChocolates ml-2 mr-5">
                  Aloe Vera Face Wash
                </div>

                {/* piyumi's fav */}
                <div className="w-[110px] h-8 px-2 py-1 bg-gradient-to-l from-rose-300 to-rose-300 rounded-sm flex items-center">
                  <div className="text-white text-xs font-bold overflow-hidden whitespace-nowrap">
                    Piumi’s Favorite
                  </div>
                </div>
              </div>

              {/* description section */}
              <div className="w-full text-justify text-black text-[21px] font-normal mb-3">
                Membership is complimentary and when you join, you'll be eligible to earn points and
                receive perks. earn points each time you shop on Piumiskin.com, follow us on social
                media, write product reviews, and more. redeem your points for exclusive rewards on
                Piumiskin.com.
              </div>

              {/* rating score */}
              <div class="flex items-center mb-4">
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.95</p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
              </div>
              {/* price */}
              <div className="text-2xl mb-3">LKR 9000</div>

              {/* guarantee */}
              <div className="w-full h-[38px] px-[158px] py-2.5 bg-rose-300 rounded-sm justify-center items-center gap-2.5 inline-flex mb-4">
                <div className="text-white text-sm font-bold font-['TT Chocolates'] tracking-tight">
                  100% Shade match Guarantee
                </div>
              </div>

              {/* quantity */}
              <div className="flex justify-between">
                {/* Left side component */}
                <div className="left-component">Quantity:</div>

                {/* Right side component */}
                <div className="flex items-center justify-content:flex-end;">
                  <button onClick={decrementQuantity} className="px-2 bg-gray-300">
                    -
                  </button>
                  <span className="mx-2">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-2  bg-gray-300">
                    +
                  </button>
                </div>
              </div>

              {/* total */}
              <div className="flex justify-between mb-3">
                {/* Left side component */}
                <div className="left-component">Total:</div>
                {/* Right side component */}
                <div>{total}</div>
              </div>

              <div className="flex flex-row gap-3">
                {/* Wishlist button */}
                <button className="w-[140px] h-14 rounded-lg border-2 border-rose-300 justify-center items-center inline-flex hover:shadow-2xl transition duration-300 ease-in-out">
                  <div className="items-center flex gap-2">
                    {/*  heart emoji */}
                    <HeartIcon className="h-4 w-4 inline-flex text-rose-300" />
                    <div className="text-rose-300 text-base font-bold font-['DM Sans'] leading-tight tracking-tight">
                      Wishlist
                    </div>
                  </div>
                </button>

                {/* add to cart button */}
                <button className="w-[140px] h-14 bg-rose-300 rounded-lg justify-center items-center inline-flex hover:shadow-2xl transition duration-300 ease-in-out">
                  <div className="justify-center items-center flex">
                    <div className="text-white text-base font-bold">Add to Cart</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* ============End of product details=========== */}

          {/* dropdown accordion start */}

          <div className="mb-5">
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                Details
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
                express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                Ingredients
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
                express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                How to use
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
                express ourselves and actualize our dreams.
              </AccordionBody>
            </Accordion>
          </div>


          {/* ============Submit form row start=========== */}

          {/* Share your experience */}
          <div className="w-full text-black text-3xl font-bold tracking-wide text-center mb-2">
            Share Your Experience
          </div>

          {/* star rating */}
          <div className="text-center flex flex-row justify-center">
            <StarIcon className="text-rose-300 h-6 w-6" />
            <StarIcon className="text-rose-300 h-6 w-6" />
            <StarIcon className="text-rose-300 h-6 w-6" />
            <StarIcon className="text-rose-300 h-6 w-6" />
            <StarIcon className="text-rose-300 h-6 w-6" />
          </div>

          {/* form */}
          <div class="max-w-xl mx-auto mt-10 flex w-full flex-col bg-white p-8">
            <h2 class="title-font mb-1 text-lg font-medium text-gray-900">Review Title</h2>

            <div class="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div class="mb-4">
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">Message</h2>
              <textarea
                id="message"
                name="message"
                class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ></textarea>
            </div>

            {/* submit button */}

            <button className="w-[160px] h-12 bg-rose-300 rounded-lg justify-center items-center inline-flex hover:shadow-2xl transition duration-300 ease-in-out ml-auto">
              <div className="justify-center items-center flex gap-2">
                <div className="text-white">Submit Review</div>
                <RocketLaunchIcon className="h-4 w-4 inline-flex text-white" />
              </div>
            </button>
          </div>

          {/* ============Submit form row end=========== */}

          {/* feedback section  */}
          <div className="justify-center">
            {/* star rating */}
            <div className="flex flex-row mb-1">
              <StarIcon className="text-rose-300 h-6 w-6" />
              <StarIcon className="text-rose-300 h-6 w-6" />
              <StarIcon className="text-rose-300 h-6 w-6" />
              <StarIcon className="text-rose-300 h-6 w-6" />
              <StarIcon className="text-rose-300 h-6 w-6" />
            </div>
            {/* title */}
            <div className="text-rose-300 text-xl font-bold tracking-wide">Nice Good Product</div>
            {/* comment */}
            <div className="text-justify text-black text-[20px] font-normal tracking-wide mb-4">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan. Rorem ipsum
              dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan.
            </div>
            {/* date and username */}
            <div className="text-justify text-black text-[20px] font-normal tracking-wide mb-1">
              02/02/2024
            </div>
            <div className="text-justify text-black text-[20px] font-normal tracking-wide mb-3">
              Shandel
            </div>

            {/* like button */}
            <div className="justify-center items-center gap-3 inline-flex">
              <HandThumbUpIcon className="text-rose-300 h-6 w-6" />
              <div className="text-neutral-800 font-medium ">32</div>
              <HandThumbDownIcon className="text-rose-300 h-6 w-6" />
              <div className="text-neutral-800 font-medium ">32</div>
            </div>
          </div>
          {/* end of feedback section  */}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
