import React from "react";

function OrderItem({ icon, name, org, price, quantity }) {
  return (
    <div className="p-3 w-full bg-[#510a325f] flex items-center gap-3 justify-around">
      <div className="flex gap-1">
        {/* Img label */}
        <div className="flex items-center gap-2">
          <img src={icon} alt="" className="w-[70px] max-h-[70px]" />
          <div>
            <h1 className="font-Archivo text-[18px]">{name}</h1>
            <h1 className="font-Archivo text-[13px]">{org}</h1>
            <div className="bg-[var(--secondary-color)] py-[3px] px-[5px] rounded-lg font-bold text-[15px] font-Archivo select-none">
              Variation 1
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
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
        <h1 className="bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg font-bold text-[15px] font-Archivo select-none text-center">
          Php {price * quantity}
        </h1>
      </div>
    </div>
  );
}

export default OrderItem;
