// ProvinceDropdown.js
import React from "react";

const ProvinceDropdown = () => {
  return (
    <select
      id="province"
      className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
    >
      <option value="" disabled selected className="text-gray-500">
        Province
      </option>
      <option value="Central">Central</option>
      <option value="Eastern">Eastern</option>
      <option value="North Central">North Central</option>
      <option value="Northern">Northern</option>
      <option value="North Western">North Western</option>
      <option value="Sabaragamuwa">Sabaragamuwa</option>
      <option value="Southern">Southern</option>
      <option value="Uva">Uva</option>
      <option value="Western">Western</option>
    </select>
  );
};

export default ProvinceDropdown;
