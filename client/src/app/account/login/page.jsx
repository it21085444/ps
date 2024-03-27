import React from "react";

const page = () => {
  return (
    <div class="mx-auto flex min-h-screen w-full items-center justify-center text-black">
      <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-bold text-rose-300 mb-5 mt-5">LOGIN</div>

        <div class="w-full transform border-b-2 hover:border-rose-200 bg-transparent text-lg duration-300 focus-within:border-[#8CB49A]">
          <input
            type="text"
            placeholder="Email"
            class="w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>

        <div class="w-full transform border-b-2 hover:border-rose-200 bg-transparent text-lg duration-300 focus-within:border-[#8CB49A]">
          <input
            type="password"
            placeholder="Password"
            class="w-full border-none bg-transparent outline-none focus:outline-none"
          />
        </div>
        <a
          href="/account/forgot-password"
          class="transform text-end font-semibold text-gray-500 duration-300 hover:text-rose-200"
        >
          Forgot Password?
        </a>
        <div class="w-full transform bg-transparent text-m text-center duration-300 focus-within:border-indigo-500">
          By logging in, you agree to our terms, privacy policy and rewards program terms.
        </div>

        <button class="transform text-rose-300 border-1 border-rose-300 rounded py-3 font-bold duration-300 hover:bg-rose-300 hover:text-white ">
          Log In
        </button>

        <p class="text-center text-lg">Don't have an account yet?</p>
        <p className="text-center mt-3">
          <a
            href="/account/register"
            class="font-bold underline-offset-4 hover:underline text-center hover:text-rose-300 duration-300"
          >
            Create Account
          </a>
        </p>
      </section>
    </div>
  );
};

export default page;
