"use client";
import { useState } from "react";
import React from "react";
import DistrictDropdown from "@/components/district-dropdown/districtdropdown";
import ProvinceDropdown from "@/components/province-dropdown/provincedropdown";
import "./shipping.css";

const ShippingInfoPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  return (
    <div className="container mx-auto py-8">
      {/* Path */}
      <h3 className="path flex justify-lfet lg:text-[1.3rem] lg:mr-[8rem] md:mr-[8rem] mt-2 mb-3">
        <a href="/">Home&nbsp;</a>{" "}
        <span className="font-bold select-none">/&nbsp; Cart</span>
      </h3>
      <h1 className="text-3xl font-semibold mb-4">Shipping Information</h1>
      <div className="lg:flex justify-evenly">
        <div className="lg:w-[80%] lg:ml-10">
          <div className="grid grid-cols-3 gap-5">
            {/* First Column */}
            <div className="col-span-1">
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  id="your_name"
                  placeholder="First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
                  style={{
                    // backgroundColor: "var(--background-color)",
                    color: "#000000",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  id="your_name"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
                  style={{
                    // backgroundColor: "var(--background-color)",
                    color: "#000000",
                  }}
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="col-span-1">
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  id="your_name"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
                  style={{
                    // backgroundColor: "var(--background-color)",
                    color: "#000000",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
                  style={{
                    // backgroundColor: "var(--background-color)",
                    color: "#000000",
                  }}
                />
              </div>
            </div>
          </div>
          {/* ============shipping address fileld============= */}
          <div className="grid grid-cols-2 w-full mt-4">
            <input
              type="text"
              id="shipping-address"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
              style={{
                // backgroundColor: "var(--background-color)",
                color: "#000000",
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-8 mt-4">
            {/* First Column */}
            <div className="col-span-1">
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  id="your_name"
                  placeholder="Landmark"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
                  style={{
                    // backgroundColor: "var(--background-color)",
                    color: "#000000",
                  }}
                />
              </div>
              {/*======== District======= */}
              <div className="flex flex-col">
                <DistrictDropdown />
              </div>
            </div>

            {/* Second Column */}
            <div className="col-span-1">
              {/*=========== Province======= */}
              <div className="flex flex-col mb-4">
                <ProvinceDropdown />
              </div>
              {/*=========== Postal Code======= */}
              <div className="relative flex flex-col">
                <input
                  type="email"
                  id="psotal-code"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full p-3 pl-10 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200 relative"
                />
                <img
                  src="/icons/postal.png" // Provide the path to your small image
                  alt="Small Image"
                  className="absolute right-0 top-0 mt-3 mr-3 h-4 w-4 pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="shipgrid-container">
            <button className="shipping-button hover:bg-rose-300">
              Save And Place Order
            </button>
          </div>
        </div>

        {/* =============================================================================================================== */}
        <div className="lg:w-[30%] lg:mr-10 sm:mt-5">
          {/* Third Column (Order Details) */}
          <div className="col-span-1 bg-white p-4">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
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
            <div className="flex justify-between mb-4">
              <p>Discount</p>
              <p className="text-right">LKR 0</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-xl">Grand Price</p>
              <p className="text-xl font-bold text-right">LKR 40,400</p>
            </div>
            {/* Add more order details similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
