import React from "react";
//assets
import avatar from "../assets/images/avatar.svg";
import revenue from "../assets/icons/revenue.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
//components
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import ShadedContainer from "../components/ShadedContainer";
import DashCard from "../components/DashCard";
import Banner from "../components/Banner";
import DashDropdown from "../components/DashDropdown";

function Dashboard() {
  const dummyData = [
    {
      name: "Ken",
      product1: 120,
      product2: 220,
    },
    {
      name: "Ken1",
      product1: 220,
      product2: 320,
    },
    {
      name: "Ken2",
      product1: 120,
      product2: 420,
    },
    {
      name: "Ken3",
      product1: 520,
      product2: 620,
    },
    {
      name: "Ken4",
      product1: 720,
      product2: 820,
    },
    {
      name: "Ken",
      product1: 120,
      product2: 220,
    },
    {
      name: "Ken1",
      product1: 220,
      product2: 320,
    },
    {
      name: "Ken2",
      product1: 120,
      product2: 420,
    },
  ];
  return (
    <div className="w-full min-h-screen flex flex-col gap-3">
      <Banner title="Dashboard" />
      <div className="flex gap-3 px-2">
        <DashCard
          icon={revenue}
          title={"Total Sales"}
          content={"500"}
          description={"+25% increase"}
        />
        <DashCard
          icon={revenue}
          title={"Total Sales"}
          content={"500"}
          description={"+25% increase"}
        />
        <DashCard
          icon={revenue}
          title={"Total Sales"}
          content={"500"}
          description={"+25% increase"}
        />
        <DashCard
          icon={revenue}
          title={"Total Sales"}
          content={"500"}
          description={"+25% increase"}
        />
      </div>
      <div className="px-2 w-full h-full pb-[5px]">
        <ShadedContainer otherStyle={"h-full flex px-0 py-0 rounded-[10px]"}>
          <div className="w-[65%] border-r-[1px] border-[var(--secondary-color)] px-8 box-border flex pt-[30px]">
            <ResponsiveContainer width={"100%"} height={"80%"}>
              <div className="flex mb-[30px] justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="text-[13px]">Total Revenue</h1>
                  <h1 className="text-[25px] font-Archivo leading-none">
                    Php 850,000
                  </h1>
                </div>
                {/* Dropdowns */}
                <div className="flex gap-2">
                  <DashDropdown text="All items" />
                  <DashDropdown text="This month" />
                </div>
              </div>
              {/* Chart */}
              <AreaChart
                data={dummyData}
                margin={{
                  left: -20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey={"name"} stroke="#c72c41" />
                <YAxis stroke="#c72c41" />
                <Legend />
                <Tooltip />
                <Area
                  dataKey={"product1"}
                  type={"monotone"}
                  fill="#510a32"
                  stroke="#c72c41"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* Side Charts */}
          <div className="w-[35%] flex flex-col">
            <div className="h-[50%] w-full border-b-[1px] border-b-[var(--secondary-color)] flex justify-center pt-[20px]">
              <ResponsiveContainer width={"90%"} height={"80%"}>
                <div className="mb-[10px]">
                  <h1 className="text-[12px]">Total Sales</h1>
                  <h1 className="text-[20px] leading-none">520</h1>
                </div>

                <BarChart
                  data={dummyData}
                  margin={{
                    left: -20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey={"name"} stroke="#c72c41" fontSize={"12"} />
                  <YAxis stroke="#c72c41" fontSize={"12"} />
                  <Tooltip />
                  <Bar dataKey={"product1"} type={"monotone"} fill="#510a32" />
                  <Bar
                    dataKey={"product2"}
                    type={"monotone"}
                    fill="#510a325f"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="h-[50%] w-full flex justify-center pt-[20px]">
            <ResponsiveContainer width={"90%"} height={"70%"}>
                <div className="mb-[10px]">
                  <h1 className="text-[12px]">Total Purchase</h1>
                  <h1 className="text-[20px] leading-none">Php 3,000</h1>
                </div>
                <LineChart
                  data={dummyData.slice(0,7)}
                  margin={{
                    left: -20,
                    bottom: 5,
                    right: 0
                  }}
                >
                  <XAxis dataKey={"name"} stroke="#c72c41" fontSize={"12"} />
                  <YAxis stroke="#c72c41" fontSize={"12"} />
                  <Tooltip />
                  <Line dataKey={"product1"} type={"monotone"} stroke="#c72c41" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ShadedContainer>
      </div>
    </div>
  );
}

export default Dashboard;
