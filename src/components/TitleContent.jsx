import React from "react";

function TitleContent({ title, content, containerStyle, contentStyle, otherStyle }) {
  return (
    <div className={"w-full flex flex-col gap-5 " + otherStyle}>
      <h1 className={"text-[50px] font-Actor w-[600px] leading-[45px] " + containerStyle}>
        {title}
      </h1>
      <p className={contentStyle}>{content}</p>
    </div>
  );
}

export default TitleContent;
