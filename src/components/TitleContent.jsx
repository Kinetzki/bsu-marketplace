import React from "react";

function TitleContent({title, content}) {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-center text-[50px] font-Actor mt-[120px] w-[600px]">
        {title}
      </h1>
      <p>{content}</p>
    </div>
  );
}

export default TitleContent;
