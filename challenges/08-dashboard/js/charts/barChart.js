import Chart from "chart.js/auto";

import { getCssVariableValue } from "../utils/getCssVariableValue";

function getGradient(chart, gradient) {
  const { ctx, chartArea } = chart;
  const linearGradient = ctx.createLinearGradient(
    chartArea.top,
    0,
    0,
    chartArea.bottom
  );

  linearGradient.addColorStop(0.2, gradient.start);
  linearGradient.addColorStop(0.8, gradient.end);

  return linearGradient;
}

function barChart(selector, week, gradient) {
  const canvas = document.querySelectorAll(selector);

  const data = {
    labels: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    datasets: [
      {
        data: week,
        backgroundColor: ({ chart }) => {
          if (!chart?.chartArea) {
            return null;
          }

          return [getGradient(chart, gradient)];
        },
        borderRadius: Infinity,
        borderWidth: 0,
        borderSkipped: false,
        maxBarThickness: 18,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#fff",
          font: {
            size: 14,
            family: getCssVariableValue("--font_family"),
            weight: getCssVariableValue("--font_weight_medium"),
          },
        },
      },
      y: {
        min: 0,
        max: 1,
        border: {
          display: false,
        },
        grid: {
          color: (context) => {
            if (context.tick.value === 0.5) {
              return "#4A4556";
            }

            return "transparent";
          },
        },
        ticks: {
          stepSize: 0.5,
          display: false,
        },
      },
    },
  };
  const config = {
    type: "bar",
    data,
    options,
  };

  new Chart(canvas, config);
}

export { barChart };
