import React, { useState } from "react";
function Dropdown({ text, items, handleClick }) {
  const [showItems, setShowItems] = useState(false);
  const [option, setOption] = useState(text);

  return (
    <div
      className="flex gap-2 bg-[var(--secondary-color)] items-center font-Archivo px-[10px] py-[8px] rounded-lg cursor-pointer relative justify-between min-w-[200px]"
      onClick={() => {
        setShowItems(!showItems);
      }}
    >
      <h1 className=" text-rose-500">{option}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#c72c41"
        width={15}
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
      {showItems && (
        <div className="flex flex-col absolute top-[45px] left-0 bg-[var(--secondary-color)] w-full min-h-full z-[2] px-[10px] gap-2 py-[5px] rounded-lg">
          {items.map((item, i) => {
            return (
              <h1
                className="hover:bg-[#c72c414f] px-3 bg-transparent rounded-lg text-[15px] py-[8px]"
                onClick={() => {
                  setOption(item);
                }}
                key={i}
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

export default Dropdown;
