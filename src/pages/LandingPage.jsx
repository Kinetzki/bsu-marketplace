import React, { useState, useEffect } from "react";
//assets
import shirt1 from "../assets/images/shirt1.png";
import shirt2 from "../assets/images/shirt2.png";
import bag1 from "../assets/images/bag1.png";
import headlineTop from "../assets/images/headline_top.png";
import headlineBot from "../assets/images/headline_bot.png";

//components
import Header from "../components/Header";
import Button1 from "../components/Button1";
import BackgroundCircle from "../components/BackgroundCircle";
import ShadedContainer from "../components/ShadedContainer";
import TitleContent from "../components/TitleContent";
import Card1 from "../components/Card1";
import ScreenLoader from "../components/ScreenLoader";
import Footer from "../components/Footer";

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader otherstyle={"z-[999]"}/>}
      <div className="flex flex-col items-center justify-start overflow-x-hidden min-h-screen w-full">
        <Header />
        <div className="flex w-full justify-center gap-[100px] py-[50px] relative">
          <BackgroundCircle position={"top-[20%] right-[-5%] opacity-[0.5]"} />
          <BackgroundCircle
            position={
              "top-[-50%] left-[-15%] opacity-[0.18] w-[700px] h-[700px]"
            }
          />
          <div className="flex flex-col w-[40%] gap-[70px] pt-[50px] relative">
            <img
              src={headlineTop}
              alt=""
              className="w-[300px] absolute top-2 translate-x-[-30px]"
            />
            <img
              src={headlineBot}
              alt=""
              className="w-[300px] absolute bottom-[40%] right-0 scale-x-[-1]"
            />
            <TitleContent
              title={"BatstateU MarketPlace"}
              content={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam dolore incidunt repudiandae ipsum sed necessitatibus exercitationem blanditiis aliquam, corrupti sapiente minus eligendi perferendis, accusantium alias maxime iusto quas quis."
              }
            />
            <div>
              <Button1 text={"Explore"} otherStyle={"text-white"} />
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
        <TitleContent
          title={"Find your favorite items in one place"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur laborum, nemo possimus dolore illum autem molestiae voluptates consectetur mollitia i"
          }
          contentStyle={"text-center w-[600px]"}
          otherStyle={"items-center mt-[150px]"}
          containerStyle={"text-center"}
        />
        <TitleContent
          title={"Purchase Univeristy items"}
          content={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur laborum, nemo possimus dolore illum autem molestiae voluptates consectetur mollitia impedit nam magnam! Ipsum voluptates, culpa ullam error velit provident?"
          }
          contentStyle={"text-center w-[600px]"}
          containerStyle={"text-center"}
          otherStyle={"items-center mt-[130px]"}
        />
        <div className="w-[80%] flex flex-wrap justify-center mt-[80px] gap-5">
          <Card1 title={"Secure Payments"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={40}
              fill="#ee4540"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
            </svg>
          </Card1>
          <Card1 title={"Faster Transactions"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width={40}
              fill="#ee4540"
            >
              <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
            </svg>
          </Card1>
          <Card1 title={"Analytics and Insights"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={40}
              fill="#ee4540"
            >
              <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
            </svg>
          </Card1>
          <Card1 title={"Pay your Fees"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={40}
              fill="#ee4540"
            >
              <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
            </svg>
          </Card1>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default LandingPage;
