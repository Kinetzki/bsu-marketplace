import React, { useState } from "react";
import arrowDown from "../assets/icons/arrowDown.svg";

function DashDropdown({ text, items, icon }) {
  const [showItems, setShowItems] = useState(false);
  const [option, setOption] = useState(text);
  return (
    <div
      className="bg-[var(--secondary-color)] px-[15px] min-w-[150px] flex items-center rounded-lg h-[36px] cursor-pointer border-[1px] border-[#c72c413f] justify-between relative select-none"
      onClick={() => {
        setShowItems(!showItems);
      }}
    >
      <h1>{option}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#c72c41"
        width={15}
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      {/*  */}
      {showItems && (
        <div className="absolute top-[40px] left-0 bg-[var(--secondary-color)] w-full min-h-full p-2 rounded-lg z-[2] flex flex-col gap-1">
          {items.map((item, i) => {
            return (
              <h1
                key={i}
                onClick={() => {
                  setOption(item);
                }}
                className="hover:bg-[#c72c414f] px-1 bg-transparent rounded-lg text-[15px] py-[5px]"
              >
                {item}
              </h1>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DashDropdown;
