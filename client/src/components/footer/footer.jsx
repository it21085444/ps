"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] border-t border-solid border-[#b6a6a6]">
      <div className="container mx-auto px-9 py-16 relative">
        <div className="footer-image mb-4 mr-4"></div>
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {/* section 1 */}
          <div className="mb-8 justify-start">
            <img
              className="font-bold text-2xl mb-10"
              src="/images/piyumiSkinLogo.png"
            />
            <div>
              <div className="mb-8">
                <div className="flex items-center">
                  <p>HandPicked by Piyumi Hansamali</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="font-bold text-2xl mb-4 mt-10">We accept</div>
                <div className="inline-flex items-start gap-[13px] relative">
                  <img
                    className="relative w-41px h-[28px]"
                    alt="Payment method visa"
                    src="/images/masterLogo.svg"
                  />
                  <img
                    className="relative w-41px h-[28px]"
                    alt="Payment method master"
                    src="/images/visaLogo.svg"
                  />
                  <img
                    className="relative w-42px h-[28px]"
                    alt="Payment method amex"
                    src="/images/amexLogo.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className="ml-8 mb-8 md:ml-0 sm:ml-0">
            <div className="font-bold text-2xl mb-6">Shopping</div>
            <div className="text-justify">
              <ul>
                <li className="mb-4">Online Payments</li>
                <li className="mb-4">Gift Cards</li>
                <li className="mb-4">Assembling</li>
                <li className="mb-4">Shipping Methods</li>
                <li className="mb-4">Return Policy</li>
                <li className="mb-4">Privacy Policy</li>
              </ul>
            </div>
          </div>
          {/* section 3 */}
          <div className="mb-8">
            <div className="font-bold text-2xl mb-6">Shop</div>
            <ul className="space-y-4 mb-8">
              <li className="mb-4">Face Cream</li>
              <li className="mb-4">Face Wash</li>
              <li className="mb-4">Body cream</li>
              <li className="mb-4">Body Butter Cream</li>
              <li className="mb-4">Face Vitamin</li>
              <li className="mb-4">Body Lotion</li>
            </ul>
          </div>
          {/* section 4 */}
          <div className="mb-8">
            <div className="font-bold text-2xl mb-6">Useful Links</div>
            <ul className="space-y-4 mb-8">
              <li className="mb-4">Contact Us</li>
              <li className="mb-4">
                <a href="/about-us">About us</a>
              </li>
              <li className="mb-4">FAQ</li>
              <li className="mb-4">
                <a href="/pages/blogs">Blog</a>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            {/* <div className="font-bold text-2xl mb-6">Newsletter</div>
            <p className="mb-6">Subscribe to get notified about product launches, special offers, and company news.</p>
            <div className="footer-content flex mt-3 mr-4">
              <input type="text" placeholder="Enter your email address" className="flex-1 py-2 px-2 bg-gray-100" />
              <button className="bg-blue-700 text-white py-2 px-2">Subscribe</button>
            </div> */}

            <div className=" text-black text-[15px] font-normal font-'Petrov Sans' mb-3">
              Sign up for Updates
            </div>
            <div className="mb-3">
              {/* newsletter */}
              <div className="footer-content flex flex-col md:flex-row mr-2">
                <input
                  type="text"
                  placeholder="Email address"
                  className="bg-[#D9D9D9]flex-1 py-2 px-2 bg-gray-100 mb-2 md:mb-0 md:mr-2 md:w-64" // Adjust the width for mobile and larger screens
                />
                <button className="bg-rose-300 text-white py-2 px-2">
                  Subscribe
                </button>
              </div>
              <div>
                <span className="text-black text-[15px] font-normal ">
                  by signing up you agree to our{" "}
                </span>
                <span className="text-rose-300 text-[15px] font-normal ">
                  terms.
                </span>
              </div>
            </div>

            <div className="text-black text-xs font-normal font-'Petrov Sans' mb-2 ">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 inline-flex mr-2 text-rose-300" />{" "}
                {/* Set consistent size */}
                No. 833/2, 1st Floor, New Parliament Road, Pelawatte,
                Battaramulle, Sri Lanka
              </div>
            </div>
            <div className="text-black text-xs font-normal font-'Petrov Sans' mb-2 ">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 inline-flex mr-2 text-rose-300" />{" "}
                {/* Set consistent size */}
                Hello@lollia.com
              </div>
            </div>
            <div className="text-black text-xs font-normal font-'Petrov Sans' mb-2 ">
              <div className="flex items-center">
                <MapPinIcon className="h-4 w-4 inline-flex mr-2 text-rose-300" />{" "}
                {/* Set consistent size */}
                <p>0777 00 28 66 /</p>
                <p> 0777 00 24 46</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row w-full h-[41px] justify-between bg-neutral-700  items-center md:items-start gap-2 md:gap-8">
        <div class="text-white text-[15px] font-normal font-['Petrov Sans'] mb-4 md:mb-0">
          Copyright ©2024 Piumi Skin All rights reserved
        </div>
        <div class="text-white text-[10px] font-normal font-['Petrov Sans'] mb-4 md:mb-0">
          Design and Developed by Fagginapps
        </div>
      </div>
    </footer>
  );
};

export default Footer;
