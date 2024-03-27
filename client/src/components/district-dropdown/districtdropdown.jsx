// DistrictDropdown.js
import React from "react";

const DistrictDropdown = () => {
  return (
    <select
      id="district"
      className="w-full p-3 outline-none placeholder-gray-500 border-2 border-transparent focus:border-white hover:border-red-300 duration-200"
    >
      <option value="" disabled selected className="text-gray-500">
        City
      </option>
      <option value="ampara">Ampara</option>
      <option value="anuradhapura">Anuradhapura</option>
      <option value="badulla">Badulla</option>
      <option value="batticaloa">Batticaloa</option>
      <option value="galle">Galle</option>
      <option value="gampaha">Gampaha</option>
      <option value="hambantota">Hambantota</option>
      <option value="jaffna">Jaffna</option>
      <option value="kalutara">Kalutara</option>
      <option value="kandy">Kandy</option>
      <option value="kegalle">Kegalle</option>
      <option value="kilinochchi">Kilinochchi</option>
      <option value="kurunegala">Kurunegala</option>
      <option value="mannar">Mannar</option>
      <option value="matale">Matale</option>
      <option value="matara">Matara</option>
      <option value="monaragala">Monaragala</option>
      <option value="mullaitivu">Mullaitivu</option>
      <option value="nuwara-eliya">Nuwara Eliya</option>
      <option value="polonnaruwa">Polonnaruwa</option>
      <option value="puttalam">Puttalam</option>
      <option value="ratnapura">Ratnapura</option>
      <option value="trincomalee">Trincomalee</option>
      <option value="vavuniya">Vavuniya</option>
    </select>
  );
};

export default DistrictDropdown;
