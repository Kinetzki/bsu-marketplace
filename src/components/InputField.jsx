import React from "react";

function InputField({placeholder, handleChange, type}) {
  return (
    <input
      type={type}
      className="bg-[var(--secondary-color)] border-[1px] border-[var(--accent-color)] focus:outline-none rounded-[8px] px-[10px] py-[11px] placeholder-[var(--accent-color)] min-w-[300px] text-[17px]"
      placeholder={placeholder}
    />
  );
}

export default InputField;
