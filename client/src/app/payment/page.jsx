import React from "react";

const payment = () => {
  return (
    <div>
      <div class="relative mx-auto w-full bg-white">
        <div class="grid min-h-screen grid-cols-10">
          <div class="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div class="mx-auto w-full max-w-lg">
              <h1 class="relative text-2xl font-medium text-gray-700 sm:text-3xl">Payment</h1>
              <h2 class="relative text-xl text-gray-700 sm:text-2xl">Credit / Debit Card</h2>
              <form action="" class="mt-10 flex flex-col space-y-4">
                <div>
                  <label for="email" class="text-xs font-semibold text-gray-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john.capler@fang.com"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div class="relative">
                  <label for="card-number" class="text-xs font-semibold text-gray-500">
                    Card number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    placeholder="1234-5678-XXXX-XXXX"
                    class="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    class="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-500">Expiration date</p>
                  <div class="mr-6 flex flex-wrap">
                    <div class="my-1">
                      <label for="month" class="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="month"
                        id="month"
                        class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Month</option>
                      </select>
                    </div>
                    <div class="my-1 ml-3 mr-6">
                      <label for="year" class="sr-only">
                        Select expiration year
                      </label>
                      <select
                        name="year"
                        id="year"
                        class="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div class="relative my-1">
                      <label for="security-code" class="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        placeholder="Security code"
                        class="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label for="card-name" class="sr-only">
                    Card name
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="card-name"
                    placeholder="Name on the card"
                    class="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </form>
              <p class="mt-10 text-center text-sm font-semibold text-gray-500">
                By placing this order you agree to the{" "}
                <a href="#" class="whitespace-nowrap text-rose-400 underline hover:text-rose-600">
                  Terms and Conditions
                </a>
              </p>
              <button
                type="submit"
                class="mt-4 inline-flex w-full items-center justify-center rounded bg-rose-300 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
              >
                Place Order
              </button>
            </div>
          </div>
          {/* second column */}
          <div>
           
                <div class="w-full max-w-sm md:max-w-3xl xl:max-w-sm flex items-start flex-col gap-8 max-xl:mx-auto">
                    <div class="p-6 border border-gray-200 rounded-3xl w-full group transition-all duration-500 hover:border-gray-400 ">
                        <h2
                            class="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
                            Order Summary
                        </h2>
                        <div class="data py-6 border-b border-gray-200">
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Product Cost</p>
                                <p class="font-medium text-lg leading-8 text-gray-900">$360.00</p>
                            </div>
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Shipping</p>
                                <p class="font-medium text-lg leading-8 text-gray-600">$40.00</p>
                            </div>
                            <div class="flex items-center justify-between gap-4 ">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">Coupon Code</p>
                                <p class="font-medium text-lg leading-8 text-emerald-500">#APPLIED</p>
                            </div>
                        </div>
                        <div class="total flex items-center justify-between pt-6">
                            <p class="font-normal text-xl leading-8 text-black ">Subtotal</p>
                            <h5 class="font-manrope font-bold text-2xl leading-9 text-indigo-600">$400.00</h5>
                        </div>
                    </div>
                </div>
                  </div>
                  {/* end */}
        </div>
      </div>
    </div>
  );
};

export default payment;
