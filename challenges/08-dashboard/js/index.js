import Chart from "chart.js/auto";

(() => {
  const customCanvasBackgroundColor = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart, _args, _options) => {
      const { ctx, chartArea } = chart;

      ctx.save();
      ctx.beginPath();
      ctx.arc(
        (chartArea.left + chart.width) / 2,
        (chartArea.top + chart.height) / 2,
        77,
        0,
        2 * Math.PI
      );
      ctx.lineWidth = 33;
      ctx.strokeStyle = "#464556";
      ctx.stroke();
      ctx.restore();
    },
  };

  const ctx = document.getElementById("doughnut");

  const random = 1 - Math.random();
  const data = {
    datasets: [
      {
        data: [random, 1 - random],
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;

          if (!chartArea) {
            return null;
          }

          return [getGradient(ctx, chartArea), "transparent"];
        },
        borderRadius: Infinity,
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
    plugins: [customCanvasBackgroundColor],
    options: {
      responsive: false,
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
    },
  };

  function getGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(
      chartArea.top,
      chartArea.left,
      chartArea.right,
      chartArea.bottom
    );

    gradient.addColorStop(0.2, "#CE9FFC");
    gradient.addColorStop(0.8, "#7367F0");

    return gradient;
  }

  new Chart(ctx, config);
})();

(() => {
  const ctx = document.getElementById("bar");
  const data = {
    labels: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
    datasets: [
      {
        data: [
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random(),
        ],
        backgroundColor: (context) => {
          const { ctx, chartArea } = context.chart;

          if (!chartArea) {
            return null;
          }

          return [getGradient(ctx, chartArea)];
        },
        borderRadius: Infinity,
        borderWidth: 0,
        borderSkipped: false,
        maxBarThickness: 18,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: false,
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
            color: "white",
            font: {
              size: 14,
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
    },
  };

  function getGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(
      chartArea.top,
      0,
      0,
      chartArea.bottom
    );

    gradient.addColorStop(0.2, "#90F7EC");
    gradient.addColorStop(0.8, "#32CCBC");

    return gradient;
  }

  new Chart(ctx, config);
})();
