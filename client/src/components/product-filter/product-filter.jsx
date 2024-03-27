// ProductFilter.js
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CiFilter } from "react-icons/ci";

export default function ProductFilter({ productsData, onChange }) {
  const [show, setShow] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMinPriceChange = (event) => {
    setMinPrice(parseInt(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseInt(event.target.value));
  };

  const handleCategoryChange = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    }
  };

  const applyFilters = () => {
    const filters = {
      minPrice,
      maxPrice,
      categories: selectedCategories,
    };
    onChange(filters);
    handleClose();
  };

  return (
    <div>
      <CiFilter
        onClick={handleShow}
        className="text-4xl mt-2 ml-3 text-[#8a8685] cursor-pointer"
      />
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ maxWidth: "80%" }} // Adjust the width as needed
      >
        <Offcanvas.Header closeButton style={{ color: "#000" }}>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5 className="font-bold">Price Range</h5>
          <p className="mt-3">Select minimum price</p>
          <div className="flex items-center">
            <input
              type="range"
              min="0"
              max="3000"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="mr-2"
            />
            <span>${minPrice}</span>
          </div>
          <p className="mt-3">Select maximum price</p>
          <div className="flex items-center ">
            <input
              type="range"
              min="0"
              max="3000" // Adjusted max price range
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="mr-2"
            />
            <span>${maxPrice}</span>
          </div>
          <h5 className="mt-4 font-bold">Categories</h5>
          {["Ceylon Herbal", "Foot Cream", "Body Cream", "Face Cream"].map(
            (category, index) => (
              <div key={index} className="flex items-center mt-3">
                {" "}
                {/* Use index as key */}
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <span>{category}</span>
              </div>
            )
          )}
          <div className="mt-4">
            <button
              className="border-2 py-2 px-2 rounded border-blue-600 bg-[#ffffff] text-blue hover:bg-[blue] hover:text-[white] duration-200"
              onClick={applyFilters}
            >
              Apply Filters
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
