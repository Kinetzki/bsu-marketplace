import React from "react";
import Button1 from "./Button1";

function ItemCard({ org, details, name, sales, orgIcon, productIcon }) {
  return (
    <div className="bg-[#510a323f] p-4 h-[370px] rounded-[10px] flex flex-col items-center font-Archivo gap-1 select-none cursor-grab">
      <div className="flex items-center w-full gap-2">
        <img src={orgIcon} alt="" className="w-[30px] rounded-full" />
        <h1 className="font-bold text-[14px]">{org}</h1>
      </div>
      <div className="flex items-center justify-center max-w-[180px] max-h-[180px]">
        <img src={productIcon} alt="" className="object-top w-full h-full"/>
      </div>

      <div className="flex flex-col gap-1">
        <h1 className="text-[20px]">{name}</h1>
        <p className="text-[12px] leading-none">{details}</p>
        <div className="flex justify-between items-center mt-[10px]">
          <div className="flex gap-1 items-center">
            <h1 className="bg-[var(--secondary-color)] py-[3px] px-[10px] rounded-lg">
              Sold
            </h1>
            <h1>{sales}</h1>
          </div>
          <Button1
            text={"Buy"}
            otherStyle={
              "text-[#ffffff] px-[1px] min-w-[60px] h-[35px] flex items-center justify-center"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
