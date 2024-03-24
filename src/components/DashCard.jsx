import React from "react";
import ShadedContainer from "./ShadedContainer";

function DashCard({ title, content, description, icon }) {
  return (
    <ShadedContainer
      otherStyle={"flex px-4 py-3 items-center min-w-[250px] gap-3 rounded-[8px]"}
    >
      <img src={icon} alt="" className="w-[40px] h-[40px]" />
      <div className="flex flex-col font-Archivo">
        <h1 className="text-[var(--accent-color)] text-[12px] ">{title}</h1>
        <h1 className="text-[20px] leading-none">{content}</h1>
        <h1 className="text-[var(--accent-color)] text-[12px]">{description}</h1>
      </div>
      
    </ShadedContainer>
  );
}

export default DashCard;
