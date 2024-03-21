import React from "react";

function Button1({ text, handleClick, otherStyle}) {
  return (
    <button className={"font-Archivo bg-[var(--accent-color)] px-[30px] py-[8px] min-w-[110px] rounded-lg hover:border-[var(--secondary-color)] border-transparent border-2 box-border " + otherStyle} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button1;
