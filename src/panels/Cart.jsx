import React, { useEffect, useState } from "react";
//assets
import shirt1 from "../assets/images/shirt1.png";
import Banner from "../components/Banner";
import CartItem from "../components/CartItem";
import OrderItem from "../components/OrderItem";
import Button1 from "../components/Button1";
import ScreenLoader from "../components/ScreenLoader";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="w-full h-screen flex flex-col relative">
      {isLoading && <ScreenLoader otherstyle={"z-[2]"} />}
      <Banner title="Cart" />
      {/* Container for cart */}
      <div className="flex w-full h-full gap-1">
        {/* Items list */}
        <div className="w-[70%] overflow-y-auto h-[545px] p-3 flex flex-col gap-3">
          {/* Items */}
          <CartItem
            icon={shirt1}
            name="Org Shirt"
            org="CURSOR"
            price={"550"}
            quantity={1}
          />
          <CartItem
            icon={shirt1}
            name="Org Shirt"
            org="CURSOR"
            price={"550"}
            quantity={1}
          />
          <CartItem
            icon={shirt1}
            name="Org Shirt"
            org="CURSOR"
            price={"550"}
            quantity={1}
          />
          <CartItem
            icon={shirt1}
            name="Org Shirt"
            org="CURSOR"
            price={"550"}
            quantity={1}
          />
          
        </div>
        {/* Checkout */}
        <div className="w-[30%] h-full bg-[#510a325f] py-2 gap-2 flex flex-col">
          <h1 className="bg-[#380B26] py-[25px] px-[20px] font-Archivo text-[25px]">
            Checkout
          </h1>
          <div className="w-full flex flex-col overflow-y-auto gap-2 px-2 h-[340px]">
            <OrderItem
              icon={shirt1}
              name="Org Shirt"
              org="CURSOR"
              price={"550"}
              quantity={1}
            />
            <OrderItem
              icon={shirt1}
              name="Org Shirt"
              org="CURSOR"
              price={"550"}
              quantity={1}
            />
            <OrderItem
              icon={shirt1}
              name="Org Shirt"
              org="CURSOR"
              price={"550"}
              quantity={1}
            />
            
          </div>
          <div className="flex justify-between items-center h-[85px] px-4 font-Archivo bg-[#380B26]">
            <div className="w-[100px] ">
              <h1 className="">Total</h1>
              <h1 className="font-bold text-[20px]">50000</h1>
            </div>
            <Button1 text="Checkout" otherStyle={"text-white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
