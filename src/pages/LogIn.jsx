import React, { useEffect, useState } from "react";
//assets

//components
import ShadedContainer from "../components/ShadedContainer";
import Button1 from "../components/Button1";
import InputField from "../components/InputField";
import BackgroundCircle from "../components/BackgroundCircle";
import Spinner from "../components/Spinner";
import ScreenLoader from "../components/ScreenLoader";

function LogIn() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && <ScreenLoader />}
      <div className="w-full min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden">
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
            "flex flex-col gap-4 items-center w-[400px] shadow-[0_0_50px_1px] shadow-[#c72c412a] bg-[#510a324a] rounded-[20px]"
          }
        >
          <div className="w-full flex flex-col items-center mb-[15px] gap-1">
            <h1 className="text-[25px] w-[95%] text-center font-semibold font-Archivo">
              Login with your BatStateU issued gmail address
            </h1>
            <p className=" italic">Example: 22-12312@g.batstate-u.edu.ph</p>
          </div>

          <InputField placeholder={"Email Address"} type={"text"} />
          <InputField placeholder={"Password"} type={"password"} />
          <Button1 text={"Log In"} otherStyle={"mt-[60px] text-[#ffffff]"} />
          {/* <Spinner/> */}
        </ShadedContainer>
      </div>
    </>
  );
}

export default LogIn;
