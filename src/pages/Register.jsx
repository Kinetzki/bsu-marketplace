import React from "react";
import { useEffect, useState } from "react";
//assets
import logo from "../assets/images/logo.png";

//components
import ShadedContainer from "../components/ShadedContainer";
import Button1 from "../components/Button1";
import InputField from "../components/InputField";
import BackgroundCircle from "../components/BackgroundCircle";
import Spinner from "../components/Spinner";
import ScreenLoader from "../components/ScreenLoader";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader otherstyle={"z-[9999]"}/>}
      <div className="w-full min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden">
      <img
          src={logo}
          alt=""
          className="absolute w-[200px] top-6 left-10 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <BackgroundCircle
          position={
            "w-[1000px] bottom-[-30%] right-[-10%] z-[-1] opacity-[0.3]"
          }
        />
        <BackgroundCircle
          position={"w-[1500px] top-[-10%] left-[-20%] z-[-1] opacity-[0.25]"}
        />
        <ShadedContainer
          otherStyle={
            "flex flex-col gap-4 items-center w-[400px] shadow-[0_0_50px_1px] shadow-[#c72c412a] bg-[#510a324a] rounded-[6px]"
          }
        >
          <div className="w-full flex flex-col items-center mb-[15px] gap-1">
            <h1 className="text-[25px] w-[90%] text-center font-semibold font-Archivo">
              Register your BatStateU issued gmail address
            </h1>
            <p className=" italic">Example: 22-12312@g.batstate-u.edu.ph</p>
          </div>

          <InputField placeholder={"Username"} type={"text"} />
          <InputField placeholder={"Email Address"} type={"text"} />
          <InputField placeholder={"Password"} type={"password"} />
          <InputField placeholder={"Confirm Password"} type={"password"} />
          <div className="flex gap-1 items-center text-[13px]">
            <h1
              className="leading-none
          "
            >
              Already registered?
            </h1>
            <h1 className="underline cursor-pointer" onClick={()=>{navigate("/login")}}>Log in</h1>
          </div>
          <Button1 text={"Register Account"} otherStyle={"text-[#ffffff]"} handleClick={()=>{navigate("/login")}}/>
        </ShadedContainer>
      </div>
    </>
  );
}

export default Register;
