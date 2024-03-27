import React from "react";
import { CiLocationArrow1, CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import "./contact-us.css";

const page = () => {
  return (
    <div>
      <div className="cosmetic-banner mt-4">
        <div className="cosmetic-banner-content">
          <h1 className="font-bold text-[#F37E93] lg:text-5xl text-4xl">Contact Us</h1>
          <p className="cosmetic-paragraph text-white italic text-justify mt-3 lg-font-medium">
            Connect with Pinkys: Your Fashion Haven for Women's Apparel. Reach out and Embrace Style
            Today!
          </p>
        </div>
      </div>
      <div class="max-w-6xl mx-auto bg-white mt-3 font-[sans-serif] text-[#011c2b] mb-5">
        {/* top topic */}
        <div class="text-center px-6 py-8">
          <h2 class="text-3xl ">Get In Touch</h2>
          <p class="text-sm text-gray-400 mt-4">We are at your disposal 7 days a week!</p>
        </div>
        <div class="grid lg:grid-cols-3 items-center gap-3 mt-2">
          <div class=" rounded-lg p-6 max-lg:text-center mt-5">
            <ul class="mt-10 space-y-8">
              {/* Phone number */}
              <li class="flex items-center max-lg:justify-center">
                <div className="w-[296px] h-20 justify-start items-start gap-4 inline-flex">
                  <div className="relative">
                    <div className="w-20 h-20 left-0 top-0 absolute">
                      <div className="w-20 h-20 left-0 top-0 absolute opacity-10 bg-rose-300 rounded-[10px]" />
                      <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                        <div className="w-10 h-10 relative">
                          <PiPhoneCallLight className="icon-section-icon" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[200px] h-[66px] left-[96px] top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                      <div className="text-neutral-900 text-base font-semibold font-['Petrov Sans'] leading-tight">
                        Phone Number
                      </div>
                      <div className="w-[200px] text-neutral-700 text-xs font-normal font-['Petrov Sans'] leading-[19px]">
                        0777 00 00 00
                        <br />
                        0777 00 00 00
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* Store location       */}
              <li class="flex items-center max-lg:justify-center">
                <div className="w-[296px] h-[85px] justify-start items-start gap-4 inline-flex">
                  <div className="w-20 h-20 relative">
                    <div className="w-20 h-20 left-0 top-0 absolute opacity-10 bg-rose-300 rounded-[10px]" />
                    <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                      <div className="w-10 h-10 relative">
                        <CiLocationOn className="icon-section-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-900 text-base font-semibold font-['Petrov Sans'] leading-tight">
                      Store Location
                    </div>
                    <div className="w-[200px] text-neutral-700 text-xs font-normal font-['Petrov Sans'] ">
                      No. 111/1, 1st Floor, New Parliament Road, Colombo, <br />
                      Sri Lanka
                    </div>
                  </div>
                </div>
              </li>
              {/* Email us */}
              <li class="flex items-center max-lg:justify-center">
                <div className="w-[296px] h-[85px] justify-start items-start gap-4 inline-flex">
                  <div className="w-20 h-20 relative">
                    <div className="w-20 h-20 left-0 top-0 absolute opacity-10 bg-rose-300 rounded-[10px]" />
                    <div className="w-10 h-10 left-[20px] top-[20px] absolute justify-center items-center inline-flex">
                      <div className="w-10 h-10 relative">
                        <MdOutlineMail className="icon-section-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-900 text-base font-semibold font-['Petrov Sans'] leading-tight">
                      Email Us
                    </div>
                    <div className="w-[200px] text-neutral-700 text-xs font-normal font-['Petrov Sans'] ">
                      pinkys@pinkys.com
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Help section */}
            <div>
              <div class="container mx-auto px-4 py-8">
                <div class="flex justify-center">
                  <img
                    className="my-auto flex h-5 items-center justify-center px-4 text-sm font-bold text-black sm:px-6 lg:px-8"
                    src="/images/piyumiSkinLogo.png"
                  />
                  <div>
                    <div class="text-l font-bold">Need help?</div>
                    <div class="flex-row justify-start space-x-4">
                      <div class="text-sm ">Call our product expert</div>
                      <div class="text-sm">0777 00 28 66</div>
                    </div>
                    <br />
                  </div>
                </div>
                <button
                  class=" mt-5 mb-10 text-[#F1B3B4] py-2 px-4 lg:w-full sm:w-fit md:w-fit border-1 border-[#F1B3B4] hover:bg-[#F1B3B4] hover:text-white focus:outline-none transition duration-300 ease-in-out"
                  type="button"
                >
                  Chat With Us
                </button>
                <div>
                  <p className="text-center">Mondays - Sundays</p>
                  <p className="text-center">7am - 11pm ET | 4am - 8pm PT</p>
                </div>
              </div>
            </div>

            {/* form start */}
          </div>
          <div class="p-6 lg:col-span-2 ">
            <form>
              <div class="grid sm:grid-cols-2 gap-8">
                <div class="relative flex items-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    class="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg fill="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                <div class="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    class="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div class="relative flex items-center sm:col-span-2">
                  <textarea
                    placeholder="Write Message"
                    class="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
                  ></textarea>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>

              {/* button send message */}
              <div>
                <button
                  type="button"
                  className="mt-12 flex items-center justify-center text-sm lg:ml-auto rounded px-4 py-2.5 font-semibold text-rose-400 hover:bg-rose-300 hover:text-white border-1 border-rose-300 duration-300"
                >
                  Send Message
                  <CiLocationArrow1 className="icon-section-icon text-rose-300 hover:text-white px-2 py-2 mb-1 duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* map */}
      <div class="map-container relative h-96">
        {" "}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=No.%20833/2,%201st%20Floor,%20New%20Parliament%20Road,%20Pelawatte,%20Battaramulle,%20%20Sri%20Lanka+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        {/* <div class="map-border::before absolute inset-y-0 left-0 h-full w-1 bg-gray-200"></div>{" "}
        <div class="map-border::after absolute inset-y-0 right-0 h-full w-1 bg-gray-200"></div>{" "} */}
      </div>
    </div>
  );
};

export default page;
