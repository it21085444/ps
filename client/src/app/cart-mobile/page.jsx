"use client";
import React from "react";
import "./cart.css";
import { useState } from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Cart = () => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="container">
      <div className="cart-main-div bg-white h-[5rem] mt-[4rem] text-3xl font-semibold">
        <h1 className="flex justify-center">Almost in Your Cart</h1>
      </div>
      <div className="lg:ml-10 lg:mr-10">
        <h3 className="path flex justify-start lg:text-[1rem] lg:mr-[8rem] md:mr-[8rem] mt-5">
          <a href="/">Home&nbsp;</a> <span className="font-bold">/ Cart</span>
        </h3>
        <h1 className="text-3xl font-semibold mb-4 mt-3">Shopping Cart</h1>
        {/* Cart content */}
        <div className="lg:flex">
          {/* Column for the table (2/3 width) */}
          <div className="lg:w-2/3 mr-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-black dark:text-gray-400">
                  <tr className="border">
                    {/* <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Image</span>
                    </th> */}
                    <th scope="col" className="px-6 py-3">
                      Product Details
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Products</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows */}
                  <tr class="border dark:border-gray-700 hover:bg-red-50">
                    <td class="p-4">
                      <div
                        className="bg-gray-100 p-2"
                        style={{
                          width: "100px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {/* Add a div with light gray background */}
                        <img
                          src="/images/cartimgs/BODY BUTTER CREAM 2.png"
                          className="w-10 md:w-32 max-w-full max-h-full cart-image" // Apply the class from cart.css
                          alt="Body Butter Cream"
                        />
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      Day body cream
                      <h3 className="mt-1 font-normal">Ceylon Herbal</h3>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <button
                          class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200 dark:text-gray-400 dark:border-gray-600"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <input
                            type="number"
                            id="first_product"
                            class="w-11 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block px-2.5 py-1 dark:placeholder-gray-400 dark:text-gray-900 "
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      LKR 15,000
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-gray-900 hover:underline">
                        <svg
                          className="w-6 h-6 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  {/* new item row */}
                  <tr class="border dark:border-gray-700 hover:bg-red-50">
                    <td class="p-4">
                      <div
                        className="bg-gray-100 p-2"
                        style={{
                          width: "100px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/images/home/herbs/BODY BUTTER CREAM 2.png"
                          class="cart-image w-16 md:w-32 max-w-full max-h-full"
                          alt="Day body cream"
                        ></img>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      Day body cream
                      <h3 className="mt-1 font-normal">Ceylon Herbal</h3>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <button
                          class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200 dark:text-gray-400 dark:border-gray-600"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div class="ms-3">
                          <input
                            type="number"
                            id="first_product"
                            class=" w-11 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-200 dark:focus:border-red-200"
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      LKR 15,000
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-gray-900 hover:underline">
                        <svg
                          className="w-6 h-6 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                  {/* new item row */}
                  <tr class="border dark:border-gray-700 hover:bg-red-50">
                    <td class="p-4">
                      <div
                        className="bg-gray-100 p-2"
                        style={{
                          width: "100px",
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src="/images/home/herbs/BODY BUTTER CREAM 2(2).png"
                          class="cart-image w-16 md:w-32 max-w-full max-h-full"
                          alt="Day body cream"
                        ></img>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      Day body cream
                      <h3 className="mt-1 font-normal">Ceylon Herbal</h3>
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <button
                          class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200 dark:text-gray-400 dark:border-gray-600"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div class="ms-3">
                          <input
                            type="number"
                            id="first_product"
                            class="w-11 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block px-2.5 py-1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1"
                            required
                          />
                        </div>
                        <button
                          class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 rounded-full focus:outline-none hover:bg-red-300 focus:ring-4 focus:ring-red-200"
                          type="button"
                        >
                          <span class="sr-only">Quantity button</span>
                          <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-gray-900">
                      LKR 15,000
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900 dark:text-gray-900 hover:underline">
                        <svg
                          className="w-6 h-6 fill-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ===============Order summary================ */}
          <div className="lg:w-1/3">
            <div className="bg-white p-4">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {/* Order summary content */}
              <div class="w-full border-b-2 bg-transparent duration-300 mb-8"></div>
              <div className="flex justify-between mb-4">
                <p>Total Items</p>
                <p className="text-right">3</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Price</p>
                <p className="text-right">LKR 40,000</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Delivery Service</p>
                <p className="text-right">LKR 400</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Total</p>
                <p className="text-right">LKR 40,400</p>
              </div>
              <div className="border-b-2 mb-8"></div>
              {/* Apply coupon */}
              <div className="flex justify-between mb-4">
                <label htmlFor="coupon-input" className="sr-only">
                  Enter your coupon details
                </label>
                <input
                  id="coupon-input"
                  type="text"
                  className="col-span-6 bg-gray-50 text-gray-500 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your coupon details"
                />
                <button
                  onClick={handleApply}
                  className="col-span-2 text-white bg-red-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg px-4 py-2 w-full sm:w-auto text-center dark:bg-red-200 dark:hover:bg-red-300 dark:focus:ring-red-300 items-center inline-flex justify-center"
                >
                  {applied ? (
                    <span
                      id="success-message"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-3 h-3 text-white me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      Applied!
                    </span>
                  ) : (
                    <span id="default-message">Apply</span>
                  )}
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-xl">Grand Price</p>
                <p className="text-xl font-bold text-right">LKR 40,400</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="product-add-to-cart-button w-full">
                  <button className="w-full bg-red-300 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-red-400 text-white font-medium rounded-lg text-lg px-4 py-3">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ===========end of order summary=========== */}
        </div>
      </div>
      <div className="lg:flex lg:ml-10 lg:mr-10">
        <div className="lg:w-2/3 mb-4 mt-4 lg:mr-4">
          <div className="flex items-center">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span>Continue Shopping</span>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center my-4">
        <IoArrowForwardSharp className="w-6 h-6 text-gray-800 dark:text-gray-800" />
        <span>Continue Shopping</span>
      </div> */}
    </div>
  );
};

export default Cart;
