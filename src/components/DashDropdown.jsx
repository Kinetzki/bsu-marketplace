import React from "react";
import arrowDown from "../assets/icons/arrowDown.svg";

function DashDropdown({ text, items, icon }) {
  return (
    <div className="bg-[var(--secondary-color)] px-[15px] min-w-[150px] flex items-center rounded-lg h-[36px] cursor-pointer border-[1px] border-[#c72c413f] justify-between">
      <h1>{text}</h1>
      <img src={arrowDown} alt="" />
    </div>
  );
}

export default DashDropdown;
