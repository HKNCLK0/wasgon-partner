import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Header } from "../components/main";

const Dashboard = () => {
  const data = [
    {
      name: "T-Shirt",
      Erkek: 310,
      Kadın: 100,
      amt: 2400,
    },
    {
      name: "Sweatshirt",
      Erkek: 26,
      Kadın: 960,
      amt: 2210,
    },
    {
      name: "Gömlek",
      Erkek: 220,
      Kadın: 6,
      amt: 2210,
    },
    {
      name: "Kazak",
      Erkek: 460,
      Kadın: 910,
      amt: 2210,
    },
    {
      name: "Pantolon",
      Erkek: 100,
      Kadın: 600,
      amt: 2210,
    },
  ];

  return (
    <>
      <Header />
      <div className="font-Montserrat">
        <div className="flex flex-col py-16 items-center">
          <h1 className="font-bold text-lg">Satış Metrikleri</h1>
          <div className="flex gap-4 items-center">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Erkek" fill="#8884d8" />
              <Bar dataKey="Kadın" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
