"use client";
import React from "react";


// components/Pagination.js

const Pagination = () => {
    return (
      <nav className="flex justify-center mt-8" aria-label="Page navigation">
        <ul className="flex space-x-2">
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 bg-gray-100 text-gray-950 rounded hover:bg-red-200 hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  
  