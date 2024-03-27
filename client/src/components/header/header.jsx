"use client";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  UserIcon,
  HeartIcon
} from "@heroicons/react/24/outline";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [open, setOpen] = useState(false);

  const [showCart, setShowCart] = useState(false); // State to control Offcanvas visibility

  // Function to handle Offcanvas show
  const handleShowCart = () => {
    setShowCart(true);
  };

  // Function to handle Offcanvas hide
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleShopping = () => {
    // Implement your shopping logic here
    console.log("Continue shopping clicked");
  };

  // change color of nav
  const [colors, setColors] = useState([
    { background: "bg-rose-200", text: "text-white" },
    { background: "bg-fuchsia-200", text: "text-white" },
    { background: "bg-pink-200", text: "text-white" }
  ]);
  const [text, setText] = useState(
    "New arrivals for your forever wardrobe. Shop Cosmetics on Pumi's Skin"
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setText((prevText) => {
        switch (prevText) {
          case "New arrivals for your forever wardrobe. Shop Cosmetics on Pumi's Skin":
            return "Discover new arrivals for your wardrobe. Shop now!";
          case "Discover new arrivals for your wardrobe. Shop now!":
            return "Check out our latest collections. Shop now!";
          case "Check out our latest collections. Shop now!":
            return "Explore our wide range of products. Shop now!";
          default:
            return "New arrivals for your forever wardrobe. Shop Cosmetics on Pumi's Skin";
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {/* Hardcoded Tab components */}

                      {/* Add more Tab components for each category */}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {/* Hardcoded Tab.Panel for the first category */}
                    <Tab.Panel className="space-y-10 px-4 pb-8 pt-10">
                      <div className="grid grid-cols-2 gap-x-4">
                        {/* Hardcoded featured items */}
                        <div className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              src="/images/imgw1.png"
                              alt="Image 1"
                              className="object-cover object-center"
                            />
                          </div>
                          <a href="/link1" className="mt-6 block font-medium text-gray-900">
                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                            Item 1
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                        {/* Add more featured items */}
                      </div>
                      {/* Hardcoded sections */}
                      <div>
                        <p
                          id="category1-section1-heading-mobile"
                          className="font-medium text-gray-900"
                        >
                          Section 1
                        </p>
                        <ul
                          role="list"
                          aria-labelledby="category1-section1-heading-mobile"
                          className="mt-6 flex flex-col space-y-6"
                        >
                          <li className="flow-root">
                            <a href="/pages/product-cat/" className="-m-2 block p-2 text-gray-500">
                              Product Filter
                            </a>
                          </li>
                          {/* Add more items for section 1 */}
                        </ul>
                      </div>
                      <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        <a
                          href="/pages/about-us"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          About
                        </a>
                        <a
                          href="/pages/contact"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Contact
                        </a>
                        <a
                          href="/pages/pinkys-stories"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Pinkys Stories
                        </a>
                      </div>
                      {/* Add more sections for category 1 */}
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="/account/sign-in" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="/account/sign-up" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p
          className={`flex h-10 items-center text-center justify-center ${colors[currentIndex].background} px-4 text-xs font-medium ${colors[currentIndex].text} sm:px-6 lg:px-8 duration-1000`}
        >
          {text}
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}

              {/* Flyout menus */}
              <div className="hidden lg:flex h-full space-x-7 justify-between ">
                <a
                  href="/faq"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  FAQ
                </a>
                <a
                  href="/contact-us"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Contact us
                </a>
                <a
                  href="/about-us"
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  About us
                </a>
              </div>

              {/* piyumiskin logo */}
              <div className="flex items-center justify-between ml-auto ">
                <a href="/">
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  /> */}
                  <img
                    className="flex h-7 items-center justify-center px-4 text-sm font-bold text-black sm:px-6 lg:px-8"
                    src="/images/piyumiSkinLogo.png"
                  />
                </a>
              </div>

              {/*====sign in + create account ======= */}
              <div className="ml-auto hidden lg:flex items-center sm:hidden">
                <div className="flex lg:ml-2 p-2">
                  
                    <span className="sr-only">Flag</span>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg"
                      alt="Sri Lankan Flag"
                      className="h-5 w-9"
                    />
              
                </div>
                {/* user */}
                <div className="flex lg:ml-2">
                  <a href="/account/login" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">User</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                {/* search */}
                <div className="flex lg:ml-2">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
                {/* cart */}
                <div className="ml-4 flow-root lg:ml-3">
                  <a href="#" className="group -m-2 flex items-center p-2" onClick={handleShowCart}>
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                  
                  {/* Offcanvas Cart Disabled */}
                  {/* Offcanvas component */}
                  {/* <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
                    <div className="position-relative d-flex flex-column h-100">
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                      </Offcanvas.Header> */}
                      {/* Close icon positioned in the top-right corner */}
                      {/* <button
                        className="btn btn-outline-danger position-absolute top-0 end-0 m-2"
                        onClick={handleCloseCart}
                      >
                        <AiOutlineClose />
                      </button> */}
                      {/* <Offcanvas.Body className="text-center flex-grow-1 d-flex flex-column justify-content-center"> */}
                        {/* Your shopping cart content goes here */}
                        {/* <p className="mb-5">Shopping cart items...</p> */}
                        {/* <Link href="/collections/women">
                          <button
                            onClick={() => {
                              handleShopping(); // Execute shopping related actions
                              handleCloseCart(); // Close the cart
                            }}
                            className="w-full lg:w-auto pt-3 pb-3 pl-5 pr-5 bg-slate-900 text-white hover:bg-black text-black font-light"
                          >
                            Continue Shopping
                          </button>
                        </Link>
                      </Offcanvas.Body>
                    </div>
                  </Offcanvas> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
