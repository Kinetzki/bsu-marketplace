import React from "react";
import ShadedContainer from "./ShadedContainer";

function Card1({children, title, content}) {
  return (
    <ShadedContainer otherStyle={"bg-[#510a325a] flex flex-col w-[380px] h-[250px] items-start gap-1 p-0 px-5 py-8"}>
      {children}
      <h1 className="text-[25px] mt-[15px] font-Archivo">{title}</h1>
      <p className="leading-[20px] text-[14px] font-Archivo">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        repellendus dolore deserunt incidunt, at nam delectus unde, voluptatem.
      </p>
    </ShadedContainer>
  );
}

export default Card1;
