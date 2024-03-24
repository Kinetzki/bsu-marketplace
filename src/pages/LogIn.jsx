import React, { useEffect, useState } from "react";
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
import checkGmail from "../helpers/checkEmail";

function LogIn() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => {
    console.log(e.target.value)
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    console.log(e.target.value)
    setPass(e.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader otherstyle={"z-[99]"} />}
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
            <h1 className="text-[25px] w-[95%] text-center font-semibold font-Archivo">
              Login with your BatStateU issued gmail address
            </h1>
            <p className=" italic">Example: 22-12312@g.batstate-u.edu.ph</p>
          </div>
          <InputField placeholder={"Email Address"} type={"text"} handleChange={handleEmail}/>
          <InputField placeholder={"Password"} type={"password"} handleChange={handlePass}/>
          <div className="flex gap-1 items-center text-[13px]">
            <h1
              className="leading-none
          "
            >
              Not yet registered?
            </h1>
            <h1
              className="underline cursor-pointer"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </h1>
          </div>
          <Button1
            text={"Log In"}
            otherStyle={"text-[#ffffff]"}
            handleClick={() => {
              navigate("/marketplace");
              // const isValid = checkGmail(email);
              // if (isValid) {
              //   navigate("/marketplace");
              //   console.log("Email is Valid");
              // }
            }}
          />
          {/* <Spinner/> */}
        </ShadedContainer>
      </div>
    </>
  );
}

export default LogIn;
