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
import shirt1 from "../assets/images/shirt1.png";
import shirt2 from "../assets/images/shirt2.png";
import shirt3 from "../assets/images/shirt3.png";
import bag1 from "../assets/images/bag1.png";

//components
import Banner from "../components/Banner";
import OrgCard from "../components/OrgCard";
import ScreenLoader from "../components/ScreenLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Dropdown from "../components/Dropdown";

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
        {isLoading && <ScreenLoader otherstyle={"z-[2]"} />}
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
        <div className="w-full flex flex-wrap px-5 font-Archivo gap-3 justify-center py-10">
          <OrgCard icon={cursor} text="CURSOR" />
          <OrgCard icon={coe} text="COE" />
          <OrgCard icon={aces} text="ACES" />
          <OrgCard icon={aros} text="AEROESS" />
          <OrgCard icon={cafad} text="CAFAD" />
          <OrgCard icon={jiece} text="JIECE" />
          <OrgCard icon={jiee} text="JIEE" />
          <OrgCard icon={jpiee} text="JPIIE" />
        </div>
        <Banner title="Popular Items" />
        {/* Items */}
        <div className="px-5 py-10">
          <Swiper
            navigation
            modules={[Pagination, Navigation]}
            freeMode={true}
            slidesPerView={4}
            spaceBetween={"20px"}
          >
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={cursor}
                productIcon={shirt1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Tote Bag"
                sales="1,000"
                orgIcon={cursor}
                productIcon={bag1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="JIEE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="352"
                orgIcon={jiee}
                productIcon={shirt3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Tote Bag"
                sales="1,000"
                orgIcon={cursor}
                productIcon={bag1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={cursor}
                productIcon={shirt1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Tote Bag"
                sales="1,000"
                orgIcon={cursor}
                productIcon={bag1}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Categories */}
        <Banner
          title={"Categories"}
          utils={<Dropdown text="Organizational Shirts" items={["Organizational Shirts", "Lanyards", "Bags", "Pins", "Materials"]}/>}
        />
        <div className="px-5 py-10">
          <Swiper
            navigation
            modules={[Pagination, Navigation]}
            freeMode={true}
            slidesPerView={4}
            spaceBetween={"20px"}
          >
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={cursor}
                productIcon={shirt1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="JIEE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="352"
                orgIcon={jiee}
                productIcon={shirt3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="CURSOR"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={cursor}
                productIcon={shirt1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemCard
                org="COE"
                details="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus recusandae vitae sit perspiciatis? Deleniti, facilis."
                name="Org Shirt"
                sales="200"
                orgIcon={coe}
                productIcon={shirt2}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
