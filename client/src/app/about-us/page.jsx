"use client";
import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div class="aboutus">
        <div class="aboutus-container">
          <img
            class="aboutus-banner"
            src="/images/aboutus/aboutimg1.png"
            alt="Home Banner"
          />
          <div class="aboutus-content">
            <h1 class="font-bold text-red-300 lg:text-5xl md:text-4xl">
              About
            </h1>
            <h2 class="text-red-300 text-justify mt-3 lg-font-medium text-xl font-bold">
              Piumi Skin New Cosmetics
            </h2>
          </div>
        </div>
      </div>
      {/* ==============who we are section============= */}
      <div className="flex flex-col-reverse lg:flex-row lg:ml-6 lg:mt-3">
        <div className="p-4 lg:w-1/2">
          <h1 className="text-red-300 text-left lg:text-left mt-3 mb-3 lg:text-justify lg-font-medium text-xl font-bold">
            Who we are
          </h1>
          <p className="text-left lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, sit. Animi molestiae labore rem totam, voluptate ea
            magnam perferendis corrupti, minima dolores velit ducimus. Quam
            natus iure fugiat aspernatur accusantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis, sit. Animi molestiae
            labore rem totam, voluptate ea magnam perferendis corrupti, minima
            dolores velit ducimus. Quam natus iure fugiat aspernatur
            accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perspiciatis, sit. Animi molestiae labore rem totam, voluptate
            ea magnam perferendis corrupti, minima dolores velit ducimus. Quam
            natus iure fugiat aspernatur accusantium. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis, sit. Animi molestiae
            labore rem totam, voluptate ea magnam perferendis corrupti, minima
            dolores velit ducimus. Quam natus iure fugiat aspernatur
            accusantium.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center mt-2 lg:mt-4">
          <img
            src="/images/aboutus/aboutimg2.png"
            alt="Your Image"
            className="object-cover rounded-lg"
            style={{ maxWidth: "300px", maxHeight: "400px" }}
          />
        </div>
      </div>

      {/* ==========piumi message========== */}
      <div className="piyumsg mx-auto max-w-screen-lg background-container p-4 lg:p-0">
        <h1 className="text-black text-center mt-6 lg:mt-12 lg:ml-12 lg:text-left lg:text-4xl font-bold">
          Piumi's Message
        </h1>
        <p className="mt-4 lg:mt-8 text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          qui debitis saepe placeat eum autem tenetur fugit voluptas iste facere
          earum, totam neque ex maxime sint commodi pariatur vel recusandae?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          qui debitis saepe placeat eum autem tenetur fugit voluptas iste facere
          earum, totam neque ex maxime sint commodi pariatur vel recusandae?
        </p>
        <div className="mt-2 lg:mt-4 lg:mb-8 text-right">
          {" "}
          <p className="text-sm lg:text-base">Piyumi Hansamali</p>
          <p className="text-sm lg:text-base">Piumi's Skin</p>
        </div>
      </div>
      {/* ========end of piumi message========= */}
    </div>
  );
};

export default AboutUs;
