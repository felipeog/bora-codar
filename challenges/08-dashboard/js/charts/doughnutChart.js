import Chart from "chart.js/auto";

import { getCssVariableValue } from "../utils/getCssVariableValue";

const customBackgroundPlugin = {
  id: "customBackgroundPlugin",
  beforeDraw: (chart, _args, options) => {
    const { ctx, chartArea } = chart;
    const xCenter = (chartArea.left + chart.width) / 2;
    const yCenter = (chartArea.top + chart.height) / 2;

    const fontFamily = getCssVariableValue("--font_family");
    const valueWeight = getCssVariableValue("--font_weight_bold");
    const labelWeight = getCssVariableValue("--font_weight_regular");

    ctx.save();
    ctx.beginPath();
    ctx.arc(xCenter, yCenter, 77, 0, 2 * Math.PI);
    ctx.lineWidth = 33;
    ctx.strokeStyle = "#464556";
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.font = `${valueWeight} 34px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${Math.round(options.value * 100)}%`, xCenter, 96);
    ctx.restore();

    ctx.save();
    ctx.font = `${labelWeight} 16px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff";
    ctx.fillText("alcançada", xCenter, 120);
    ctx.restore();
  },
};

function getGradient(chart, gradient) {
  const { ctx, chartArea } = chart;
  const linearGradient = ctx.createLinearGradient(
    chartArea.top,
    chartArea.left,
    chartArea.right,
    chartArea.bottom
  );

  linearGradient.addColorStop(0.2, gradient.start);
  linearGradient.addColorStop(0.8, gradient.end);

  return linearGradient;
}

function doughnutChart(selector, percentage, gradient) {
  const canvas = document.querySelectorAll(selector);
  const data = {
    datasets: [
      {
        data: [percentage, 1 - percentage],
        backgroundColor: ({ chart }) => {
          if (!chart?.chartArea) {
            return null;
          }

          return [getGradient(chart, gradient), "transparent"];
        },
        borderRadius: Infinity,
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      customBackgroundPlugin: {
        value: percentage,
      },
    },
  };
  const config = {
    type: "doughnut",
    data,
    options,
    plugins: [customBackgroundPlugin],
  };

  new Chart(canvas, config);
}

export { doughnutChart };
