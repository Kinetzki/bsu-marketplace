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
        className="flex w-full bg-[var(--secondary-color)] py-[6px] px-[10px] rounded-[20px] justify-between cursor-pointer hover:bg-[var(--accent-color)] relative hover:text-[#ffffff] select-none"
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
          <div className="flex flex-col truncate text-ellipsis overflow-hidden justify-self-center">
            <h1 className="text-[15px] leading-none">{client}</h1>
            <h1 className="text-[13px]">Student</h1>
          </div>
        </div>
        <img src={setting} alt="" className="" />
      </div>
    </ShadedContainer>
  );
}

export default SidePanel;
