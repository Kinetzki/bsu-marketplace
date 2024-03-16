import React from "react";

function Button1({ text, handleClick }) {
  return (
    <button className="bg-[var(--accent-color)] text-[#ffffffc0] px-[30px] py-[8px] min-w-[110px] rounded-lg hover:border-[var(--secondary-color)] border-transparent border-2 box-border">
      {text}
    </button>
  );
}

export default Button1;
