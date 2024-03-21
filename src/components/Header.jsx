import React from "react";
import Button1 from "./Button1";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full justify-between flex px-10 h-[80px] items-center">
      <div className="flex items-center">
        {/* Logo */}
        <h1>Hello</h1>
      </div>
      <div className="flex gap-12 items-center">
        <ul className="flex gap-10 font-Archivo">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Organizations</li>
          <li className="cursor-pointer">Support</li>
        </ul>
        <div className="flex gap-2 items-center">
          <Button1
            text={"Register"}
            handleClick={() => {navigate("/register")}}
            otherStyle={"border-[var(--secondary-color)] bg-transparent hover:bg-[var(--secondary-color)] text-[#ee4540]"}
          />
          <Button1
            text={"Log In"}
            handleClick={() => {
              navigate("/login");
            }}
            otherStyle={"text-[#ffffff]"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
