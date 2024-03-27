import React from "react";
import "./homerow-section.css";

function HomerowSection() {
  return (
    <div>
      {/* Large screens */}
      <div className="home-row-large hidden lg:block">
        <div className="home-row bg-[#eabfaf] flex justify-around flex-wrap lg:pl-10 lg:pr-10 pt-3">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img
              className="row-image"
              src="/icons/freeshipping.png"
              alt="Free Shipping"
            />
            <h3 className="text-white text-center mt-3 mb-2">
              FREE SHIPPING & RETURNS
            </h3>
            <h5 className="text-white text-center font-thin">
              Lacus, egestas enim ut quis risus
            </h5>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img
              className="row-image"
              src="/icons/securecheckout.png"
              alt="Secure Checkout"
            />
            <h3 className="text-white text-center mt-3 mb-2">
              100% SECURE CHECKOUT
            </h3>
            <h5 className="text-white text-center font-thin">
              Lacus, egestas enim ut quis risus
            </h5>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <img
              className="row-image"
              src="/icons/originalitems.png"
              alt="Original Items"
            />
            <h3 className="text-white text-center mt-3 mb-2">
              GUARANTEE ORIGINAL ITEMS
            </h3>
            <h5 className="text-white text-center font-thin">
              Lacus, egestas enim ut quis risus
            </h5>
          </div>
          <div className="w-full md:w-auto mb-4 md:mb-0 mt-3">
            <img
              className="mb-3 row-image"
              src="/icons/customerservice.png"
              alt="Customer Service"
            />
            <h3 className="text-white text-center mt-4 mb-2">
              24H CUSTOMER SERVICE
            </h3>
            <h5 className="text-white text-center font-thin">
              Lacus, egestas enim ut quis risus
            </h5>
          </div>
        </div>
      </div>

      {/* Small screens */}
      <div className="home-row-large block lg:hidden">
        <div className="home-row bg-[#eabfaf] pt-3 pb-5">
          <div className="flex justify-around">
            <div className="">
              <img
                className="row-image"
                src="/icons/freeshipping.png"
                alt="Free Shipping"
              />
              <h3 className="text-white text-center mt-3 mb-2 text-[12px]">
                FREE SHIPPING & RETURNS
              </h3>
              <h5 className="text-white text-center font-thin text-[11px]">
                Lacus, egestas enim ut quis risus
              </h5>
            </div>
            <div className="">
              <img
                className="row-image"
                src="/icons/securecheckout.png"
                alt="Secure Checkout"
              />
              <h3 className="text-white text-center mt-3 mb-2 text-[12px]">
                100% SECURE CHECKOUT
              </h3>
              <h5 className="text-white text-center font-thin text-[11px]">
                Lacus, egestas enim ut quis risus
              </h5>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="">
              <img
                className="row-image"
                src="/icons/originalitems.png"
                alt="Original Items"
              />
              <h3 className="text-white text-center mt-3 mb-2 text-[12px]">
                GUARANTEE ORIGINAL ITEMS
              </h3>
              <h5 className="text-white text-center font-thin text-[11px]">
                Lacus, egestas enim ut quis risus
              </h5>
            </div>
            <div className="mt-2">
              <img
                className="row-image pt-1"
                src="/icons/customerservice.png"
                alt="Customer Service"
              />
              <h3 className="text-white text-center mt-4 mb-2 text-[12px]">
                24H CUSTOMER SERVICE
              </h3>
              <h5 className="text-white text-center font-thin text-[11px]">
                Lacus, egestas enim ut quis risus
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomerowSection;
