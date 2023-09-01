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
import { MainWrapper } from "../../Shared/Page.styled";
import { dataFromWikipedia } from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Viewers of episodes of It's Always Sunny in Philadelphia [million]",
    },
  },
};

const labels = dataFromWikipedia.map((dataEntry) => dataEntry.title);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataFromWikipedia.map((dataEntry) => parseFloat(dataEntry.rating)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const MyChart = () => {
  console.log(
    "datapoints",
    dataFromWikipedia.map((dataEntry) => parseFloat(dataEntry.rating))
  );

  console.log("4.02 parsed: ", parseInt("4.02", 10));
  console.log("4.02[543] parsed: ", parseInt("4.02[543]", 10));
  console.log("4.02 parsed: ", parseFloat("4.02"));
  console.log("4.02[543] parsed: ", parseFloat("4.02[543]"));

  return (
    <MainWrapper>
      <h1>My Chart</h1>
      <Line options={options} data={data} />
    </MainWrapper>
  );
};
