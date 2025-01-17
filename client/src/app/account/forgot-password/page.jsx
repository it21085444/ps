import React from "react";
import "./forgot-password.css";

const forgotPw = () => {
  return (
    <div className="font-mono bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <img
              className="w-800 h-600 hidden lg:block lg:w-1/2 bg-cover bg-center bg-no-repeat rounded-md object-cover"
              src="/images/banners/Essentials Products.png"
            />

            <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below and we'll send you a
                  link to reset your password!
                </p>
              </div>

              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-rose-300 rounded-full hover:bg-rose-500 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Reset Password
                  </button>
                </div>

                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <a
                    className="inline-block text-sm text-rose-400 align-baseline hover:text-rose-500"
                    href="/account/register/"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a className="inline-block text-sm  align-baseline" href="#">
                    or
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-rose-400 align-baseline hover:text-rose-500"
                    href="/account/login/"
                  >
                    Already have an account? Login!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotPw;
