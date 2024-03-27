"use client";
import { useState } from "react";
import React from "react";
import DistrictDropdown from "@/components/district-dropdown/districtdropdown";
import ProvinceDropdown from "@/components/province-dropdown/provincedropdown";
import "./shipinfo.css";

const ShippingInfoPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Path */}
      <h3 className="path flex justify-lfet lg:text-[1.3rem] lg:mr-[8rem] md:mr-[8rem] mt-2 mb-3">
        <a href="/">Home&nbsp;</a>{" "}
        <span className="font-bold select-none">/&nbsp; Cart</span>
      </h3>
      <h1 className="text-3xl font-semibold mb-4">Shipping Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Third Column (Order Details) */}
        <div className="bg-white p-4 md:order-3 lg:order-1">
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
        </div>

        {/* First Column */}
        <div>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="your_name"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
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
            />
          </div>
          <div className="flex flex-col mb-4 mt-4">
            <input
              type="text"
              id="landmark"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
            />
          </div>
          <div className="flex flex-col">
            <DistrictDropdown />
          </div>
          <div className="flex flex-col mb-4 mt-4">
            <input
              type="text"
              id="shipping-address"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
            />
          </div>
        </div>

        {/* Second Column */}
        <div>
          <div className="flex flex-col mb-4">
            <input
              type="text"
              id="your_name"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
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
            />
          </div>
          <div className="flex flex-col mb-4 mt-4">
            <ProvinceDropdown />
          </div>
          <div className="relative flex flex-col">
            <input
              type="email"
              id="postal-code"
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
      {/* Shipping Address */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"></div> */}
      {/* <div className="mt-4 text-center">
        <button className="w-full lg:w-48 pb-3 pt-3 bg-[#f1b3b4] text-white hover:bg-rose-300">
          Save And Place Order
        </button>
      </div> */}
      <div className="shipgrid-container">
        <button className="shipping-button hover:bg-rose-300">
          Save And Place Order
        </button>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
