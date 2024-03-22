import React from "react";
import ShadedContainer from "./ShadedContainer";

function DashCard({ title, content, description, icon }) {
  return (
    <ShadedContainer
      otherStyle={"flex justify-between px-8 py-1 items-center min-w-[330px]"}
    >
      <div className="flex flex-col font-Archivo">
        <h1 className="text-[var(--accent-color)] text-[13px] ">{title}</h1>
        <h1 className="text-[16px] leading-none">{content}</h1>
        <h1 className="text-[var(--accent-color)]">{description}</h1>
      </div>
      <img src={icon} alt="" className="w-[50px] h-[50px]" />
    </ShadedContainer>
  );
}

export default DashCard;
