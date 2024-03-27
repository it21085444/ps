import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="main">
      <div className="register">
        <h1 className="font-bold text-[#F1B3B4] text-3xl mb-5 mt-3 flex justify-center">
          CREATE AN ACCOUNT
        </h1>
        <form class="w-full max-w-sm">
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="First Name"
              aria-label="First name"
            />
          </div>
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Last Name"
              aria-label="Last name"
            />
          </div>
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Email"
              aria-label="Email"
            />
          </div>
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <div class="flex items-center border-b hover:border-[#F1B3B4] py-2 mb-3">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
            />
          </div>
          <div className="flex mt-4">
            <input className="custom-checkbox" type="checkbox" name="privacy-policy" id="" />

            <p className="ml-3 text-xs">
              Please agree to our Terms, Privacy - Policy, and Rewards Program term to Create an
              Account
            </p>
          </div>
          <button
            class="mt-5 mb-10 text-[#F1B3B4] font-semibold py-2 px-4 w-full border-1 border-[#F1B3B4] hover:bg-[#F1B3B4] hover:text-white focus:outline-none transition duration-300 ease-in-out"
            type="button"
          >
            CREATE AN ACCOUNT
          </button>
        </form>
        <div className="">
          <p className="text-sm flex justify-center">Already have an account?</p>
          <p className="text-center mt-3">
            <a
              href="/account/login"
              class="font-bold underline-offset-4 hover:underline text-center hover:text-rose-300 duration-300"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
