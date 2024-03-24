import React, { useEffect, useState } from "react";
//assets
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.svg";
import setting from "../assets/icons/setting.svg";

//components
import ShadedContainer from "./ShadedContainer";
import PanelLinks from "./PanelLinks";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "../statemanager/userStore";

function SidePanel({ setpanel }) {
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState("");
  const [showAccount, setShowAccount] = useState(false);
  const { panel } = useParams();
  const client = useUserStore((state) => state.user);

  useEffect(() => {
    setActivePanel(panel);
  }, []);
  
  return (
    <ShadedContainer
      otherStyle={
        "min-h-screen bg-[#510a328a] rounded-none flex flex-col gap-10 font-Archivo items-center min-w-[250px] max-w-[250px] px-[10px] py-[20px] justify-between"
      }
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full pb-[5px]">
          {/* <h1 className="w-[100%] truncate text-[16px]">
          20-03192@g.batstate-u.edu.ph
        </h1> */}
          <img src={logo} alt="" className="w-[180px]"/>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <PanelLinks
            text={"Marketplace"}
            handleClick={() => {
              navigate("/marketplace");
              setpanel("marketplace");
              setActivePanel("marketplace");
            }}
            active={activePanel === "marketplace"}
          />
          <PanelLinks
            text={"Dashboard"}
            handleClick={() => {
              navigate("/dashboard");
              setpanel("dashboard");
              setActivePanel("dashboard");
            }}
            active={activePanel === "dashboard"}
          />
          <PanelLinks
            text={"Cart"}
            handleClick={() => {
              navigate("/cart");
              setpanel("cart");
              setActivePanel("cart");
            }}
            active={activePanel === "cart"}
          />
          <PanelLinks
            text={"History"}
            handleClick={() => {
              navigate("/history");
              setpanel("history");
              setActivePanel("history");
            }}
            active={activePanel === "history"}
          />
          <PanelLinks
            text={"Items"}
            handleClick={() => {
              navigate("/items");
              setpanel("items");
              setActivePanel("items");
            }}
            active={activePanel === "items"}
          />
        </div>
      </div>

      <div
        className="flex w-full bg-[var(--secondary-color)] py-[6px] px-[10px] rounded-[20px] justify-between cursor-pointer hover:bg-[var(--accent-color)] relative hover:text-[#ffffff] select-none items-center"
        onClick={() => {
          setShowAccount(!showAccount);
        }}
      >
        {/* Account Options */}
        {showAccount && (
          <div className="absolute bg-[#c72c417f] w-full top-[-110px] left-0 h-[100px] rounded-[20px] p-2 gap-2 flex flex-col">
            <PanelLinks
              text={"Account"}
              otherStyle={"text-white"}
              handleClick={() => {
                navigate("/account");
                setpanel("account");
              }}
            />
            <PanelLinks
              text={"Logout"}
              otherStyle={"text-white"}
              handleClick={() => {
                navigate("/");
              }}
            />
          </div>
        )}
        <div className="flex items-center gap-2">
          <img src={avatar} alt="" className="w-[42px] h-[42px]" />
          <div className="flex flex-col truncate text-ellipsis overflow-hidden justify-center text-rose-400 font-Archivo">
            <h1 className="text-[15px] leading-none">{client}</h1>
            <h1 className="text-[13px]">Student</h1>
          </div>
        </div>
        {/* <img src={setting} alt="" className="" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20} fill="#ee4540"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
      </div>
    </ShadedContainer>
  );
}

export default SidePanel;
