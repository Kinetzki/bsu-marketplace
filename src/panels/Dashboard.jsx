import React from "react";
//assets
import avatar from "../assets/images/avatar.svg";
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
  Line
} from "recharts";
import ShadedContainer from "../components/ShadedContainer";
import DashCard from "../components/DashCard";

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
  ];
  return (
    <div className="w-full p-3 flex flex-col gap-2">
      <div className="flex w-full gap-3 h-[30%]">
        <DashCard
          title={"User"}
          content={"Paul Kenneth S. Quinto"}
          description={"20-03192"}
          icon={avatar}
        />
        <DashCard
          title={"Items"}
          content={"10"}
          description={"+23 % since last month"}
          icon={avatar}
        />
        <DashCard title={"Sales"} content={"Php 5,000.00"} icon={avatar} />
      </div>
      <ShadedContainer otherStyle="w-full bg-[#510a321a] py-3 h-[20%]">
        <h1>Tracking details</h1>
      </ShadedContainer>
      <ShadedContainer otherStyle={"flex py-2 px-0 w-full h-full"}>
        <div className="w-[200%] h-[410px] border-r-[1px] border-[var(--secondary-color)]">
          <div className="flex w-full flex-col px-5">
            <h1>Total Purchases</h1>
            <h1 className="text-[20px]">9000</h1>
          </div>
          <ResponsiveContainer width={"100%"} height={"90%"}>
            <AreaChart data={dummyData}>
              <XAxis dataKey={"name"} stroke="#c72c41" />
              <YAxis stroke="#c72c41" />
              <Legend />
              <Tooltip />
              <Area
                dataKey={"product1"}
                type={"monotone"}
                stroke="#c72c41"
                fill="#510a326f"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col py-5 w-[100%]">
          <div className="flex flex-col w-[100%] h-[180px] border-b-[var(--secondary-color)] border-b-[1px]">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={dummyData.slice(0, 3)} width={100}>
                <Bar dataKey={"product1"} fill="#c72c41" />
                <Bar dataKey={"product2"} fill="#ee4540" />
                <XAxis dataKey={"name"} stroke="#c72c41" />
                <YAxis stroke="#c72c41" />
                <Legend />
                <Tooltip />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col w-[360px] h-[190px] justify-center">
            <ResponsiveContainer width={"100%"} height={"90%"}>
              <LineChart data={dummyData} width={100}>
                <Line dataKey={"product1"} stroke="#c72c41" />
                <Line dataKey={"product2"} stroke="#ee4540" />
                <XAxis dataKey={"name"} stroke="#c72c41" />
                <YAxis stroke="#c72c41" />
                <Legend />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </ShadedContainer>
    </div>
  );
}

export default Dashboard;
