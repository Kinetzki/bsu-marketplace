import React from "react";

function OrgCard({ text, icon }) {
  return (
    <div className="flex flex-col items-center bg-[#510a328f] p-2 rounded-[8px] cursor-pointer">
      <img src={icon} alt="" className="w-[100px] rounded-full" />
      <h1 className="font-bold text-[15px]">{text}</h1>
    </div>
  );
}

export default OrgCard;
