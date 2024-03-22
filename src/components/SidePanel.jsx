import React, { useEffect, useState } from "react";
import ShadedContainer from "./ShadedContainer";
import PanelLinks from "./PanelLinks";
import { useNavigate, useParams } from "react-router-dom";

function SidePanel({ setpanel }) {
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState("");
  const { panel } = useParams();
  useEffect(() => {
    setActivePanel(panel);
  }, []);
  return (
    <ShadedContainer
      otherStyle={
        "min-h-screen bg-[#510a328a] rounded-none flex flex-col gap-10 font-Archivo items-center w-[200px] px-[10px]"
      }
    >
      <div className="w-full text-ellipsis overflow-hidden border-b-[1px] border-[var(--accent-color)] pb-[20px]">
        <h1 className="w-[100%] truncate text-[16px]">
          20-03192@g.batstate-u.edu.ph
        </h1>
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
          text={"Account"}
          handleClick={() => {
            navigate("/account");
            setpanel("account");
            setActivePanel("account");
          }}
          active={activePanel === "account"}
        />
      </div>
      <div className="mt-[100px] flex flex-col w-full">
        <PanelLinks
          text={"Logout"}
          handleClick={() => {
            navigate("/login");
          }}
        />
      </div>
    </ShadedContainer>
  );
}

export default SidePanel;
