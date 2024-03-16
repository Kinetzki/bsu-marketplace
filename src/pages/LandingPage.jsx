import React from "react";
//assets
import shirt1 from "../assets/images/shirt1.png";
import shirt2 from "../assets/images/shirt2.png";
import bag1 from "../assets/images/bag1.png";

//components
import Header from "../components/Header";
import Button1 from "../components/Button1";
import BackgroundCircle from "../components/BackgroundCircle";
import ShadedContainer from "../components/ShadedContainer";
import TitleContent from "../components/TitleContent";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-start overflow-x-hidden min-h-screen w-full">
      <Header />
      <div className="flex w-full justify-center gap-[100px] py-[50px] relative">
        <BackgroundCircle position={"top-[20%] right-[-5%] opacity-[50%]"} />
        <BackgroundCircle
          position={"top-[-50%] left-[-15%] opacity-[19%] w-[700px] h-[700px]"}
        />
        <div className="flex flex-col w-[40%] gap-8">
          <h1 className="text-[60px] leading-[60px] font-Actor font-[900]">
            BatstateU MarketPlace
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam dolore incidunt repudiandae ipsum sed necessitatibus
            exercitationem blanditiis aliquam, corrupti sapiente minus eligendi
            perferendis, accusantium alias maxime iusto quas quis.
          </p>
          <div>
            <Button1 text={"Explore"} />
          </div>
        </div>
        <div className="relative">
          <img src={shirt1} alt="" className="w-[420px] drop-shadow-lg" />
          <img
            src={shirt2}
            alt=""
            className="w-[300px] absolute top-[25%] right-[-20%] z-[-1] drop-shadow-lg"
          />
          <img
            src={bag1}
            alt=""
            className="w-[300px] absolute top-[40%] left-[-20%] z-[-1] drop-shadow-lg"
          />
        </div>
      </div>
      <TitleContent title={"Purchase Univeristy items conveniently"}/>
      <ShadedContainer otherStyle={"w-[85%] flex flex-col items-center mt-[60px]"}>
      </ShadedContainer>
    </div>
  );
}

export default LandingPage;
