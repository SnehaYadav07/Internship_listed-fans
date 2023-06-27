import React from "react";
import arr from "../utils/vector4.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./graph.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      ticks: {
        suggestedMin: 0,
        suggestedMax: 500,
        stepSize: 100,
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

export const data = {
  labels,
  datasets: [
    {
      data: [160, 420, 150, 300, 20, 60],
      label: "Guest",
      borderColor: "rgba(233, 160, 160, 1)",
      backgroundColor: "rgba(233, 160, 160, 1)",
      tension: "0.4",
      pointRadius: "0",
    },
    {
      data: [420, 60, 390, 30, 400, 80],
      label: "User",
      borderColor: "rgba(155, 221, 124, 1)",
      backgroundColor: "rgba(155, 221, 124, 1)",
      tension: "0.4",
      pointRadius: "0",
    },
  ],
};

const Graph = () => {
  return (
    <>
      <div className="graph">
        <div className="right">
          <p className="graphHeading">Acitivities</p>
          <p className="date">June-July 2023 <img className="dateImage" src={arr} alt="" height={"10px"} /></p>
        </div>
        <div className="legend">
          <div className="red"></div>
          <p className="user">User</p>
          <div className="green"></div>
          <p className="guest">Guest</p>
        </div>
      </div>
      <Line options={options} data={data} />
    </>
  );
};

export default Graph;
