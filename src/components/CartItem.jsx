import React from "react";

function CartItem({ icon, name, org, price, quantity }) {
  return (
    <div className="p-3 w-full bg-[#510a325f] rounded-lg flex items-center gap-3 justify-between">
      <div className="flex gap-1">
        <input type="checkbox" />
        {/* Img label */}
        <div className="flex items-center gap-5">
          <img src={icon} alt="" className="w-[70px] max-h-[70px]" />
          <div>
            <h1 className="font-Archivo text-[20px]">{name}</h1>
            <h1 className="font-Archivo text-[13px]">{org}</h1>
          </div>
          <div className="bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg font-bold text-[15px] font-Archivo select-none">Variation 1</div>
        </div>
      </div>
      {/* Quantity edit */}
      <div className="flex">
        <h1 className="w-[32px] bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg font-bold text-[18px] font-Archivo flex items-center justify-center cursor-pointer">
          -
        </h1>
        <h1 className="py-[3px] px-[10px] rounded-lg font-bold text-[20px]">
          {quantity}
        </h1>
        <h1 className="w-[32px] bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg font-bold text-[18px] font-Archivo flex items-center justify-center cursor-pointer">
          +
        </h1>
      </div>
      <h1 className="bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg font-bold text-[15px] font-Archivo select-none">
        Php {price * quantity}
      </h1>
    </div>
  );
}

export default CartItem;
