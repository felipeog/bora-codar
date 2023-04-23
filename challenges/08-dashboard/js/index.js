import Chart from "chart.js/auto";

(() => {
  const customDoughnutBackground = {
    id: "customDoughnutBackground",
    beforeDraw: (chart, _args, options) => {
      const { ctx, chartArea } = chart;
      const xCenter = (chartArea.left + chart.width) / 2;
      const yCenter = (chartArea.top + chart.height) / 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(xCenter, yCenter, 77, 0, 2 * Math.PI);
      ctx.lineWidth = 33;
      ctx.strokeStyle = "#464556";
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.font = "bold 34px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff";
      ctx.fillText(`${Math.round(options.value * 100)}%`, xCenter, 96);
      ctx.restore();

      ctx.save();
      ctx.font = "16px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#fff";
      ctx.fillText("alcançada", xCenter, 120);
      ctx.restore();
    },
  };

  const ctxs = document.querySelectorAll(".doughnut");

  ctxs.forEach((ctx) => {
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
      plugins: [customDoughnutBackground],
      options: {
        plugins: {
          tooltip: {
            enabled: false,
          },
          customDoughnutBackground: {
            value: random,
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
  });
})();

(() => {
  const ctxs = document.querySelectorAll(".bar");

  ctxs.forEach((ctx) => {
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
  });
})();
