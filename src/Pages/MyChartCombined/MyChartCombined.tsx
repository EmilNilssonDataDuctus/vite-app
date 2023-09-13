import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

let datesData, bodyweightData, fatPercentageData;

const attemptToFetchData = async () => {
  if (process.env.NODE_ENV === "development") {
    try {
      const dataModule = await import("./data");
      console.log("dataModule");
      console.log(dataModule);

      datesData = dataModule.datesData;
      bodyweightData = dataModule.bodyweightData;
      fatPercentageData = dataModule.fatPercentageData;
    } catch (error) {
      console.log("error");
      console.log(error);

      datesData = [];
      bodyweightData = [];
      fatPercentageData = [];
    }
  }
};
attemptToFetchData();

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
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

// const filterBadData = (_, i) => i !== 14 && i !== 15;
const filterBadData = () => true;
const filterContextData = (_, i, arr) => i !== 0 && i !== arr.length - 1;
// const filterContextData = () => true;

const dates = ["padding", ...datesData, "padding"]
  .filter(filterBadData)
  .filter(filterContextData);
const bodyweight = ["0.0", ...bodyweightData, "90.0"]
  .filter(filterBadData)
  .filter(filterContextData);
const fatPercentage = ["0.0", ...fatPercentageData, "30.0"]
  .filter(filterBadData)
  .filter(filterContextData);

export const data = {
  labels: dates,
  datasets: [
    {
      label: "Bodyweight [kg]",
      data: bodyweight,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Bodyfat percentage [%]",
      data: fatPercentage,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function MyChartCombined() {
  return <Line style={{ padding: "160px" }} options={options} data={data} />;
}
