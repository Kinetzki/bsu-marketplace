import React, { useEffect, useState } from "react";
//assets
import studentportal from "../assets/images/studentportal.png";
import cursor from "../assets/images/orgs/CURSOR.jpg";
import coe from "../assets/images/orgs/COE.jpg";
import aces from "../assets/images/orgs/ACES.jpg";
import aros from "../assets/images/orgs/AEROESS.jpg";
import cafad from "../assets/images/orgs/CAFAD.jpg";
import jiece from "../assets/images/orgs/JIECE.jpg";
import jiee from "../assets/images/orgs/JIEE.jpg";
import jpiee from "../assets/images/orgs/JPIIE.jpg";

//components
import Banner from "../components/Banner";
import OrgCard from "../components/OrgCard";
import ScreenLoader from "../components/ScreenLoader";

function Marketplace() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="w-full h-screen flex flex-col overflow-y-auto relative">
        {isLoading && <ScreenLoader otherstyle={"z-[1]"}/>}
        {/* <Banner title="Marketplace" /> */}
        <div className="flex justify-center h-[180px] w-full">
          <img
            src={studentportal}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <Banner title="Organizations" />
        {/* Orgs */}
        <div className="w-full flex flex-wrap px-5 font-Archivo gap-5 justify-center py-10">
          <OrgCard icon={cursor} text="CURSOR" />
          <OrgCard icon={coe} text="COE" />
          <OrgCard icon={aces} text="ACES" />
          <OrgCard icon={aros} text="AEROESS" />
          <OrgCard icon={cafad} text="CAFAD" />
          <OrgCard icon={jiece} text="JIECE" />
          <OrgCard icon={jiee} text="JIEE" />
          <OrgCard icon={jpiee} text="JPIIE" />
        </div>
        <Banner title="Popular Items"/>
        
      </div>
    </>
  );
}

export default Marketplace;
