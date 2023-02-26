// https://stackoverflow.com/a/18473154/10942224

import { createSvgElement } from "../utils/createSvgElement";
import { setSvgElementAttributes } from "../utils/setSvgElementAttributes";

export function handleWindowLoad() {
  const svgCharts = document.querySelectorAll(".svg-chart");

  svgCharts.forEach((svgChart) => {
    const name =
      svgChart?.dataset?.chartName ??
      String(Math.floor(Math.random() * 1_000_000)).padStart(6, "0");
    const percentage = svgChart?.dataset?.chartPercentage ?? "0";
    const gradientStart =
      svgChart?.dataset?.chartGradientStart ?? getRandomRgb();
    const gradientEnd = svgChart?.dataset?.chartGradientEnd ?? getRandomRgb();

    const chart = createChart({
      name,
      percentage,
      gradientStart,
      gradientEnd,
    });

    svgChart.appendChild(chart);
  });
}

// TODO: handle 0 and 100
function createChart({ name, percentage, gradientStart, gradientEnd }) {
  const defs = createSvgElement("defs");
  const linearGradient = createSvgElement("linearGradient");
  const mask = createSvgElement("mask");
  const movingCircle = createSvgElement("circle");
  const path = createSvgElement("path");
  const rect = createSvgElement("rect");
  const staticCircle = createSvgElement("circle");
  const stopColorEnd = createSvgElement("stop");
  const stopColorStart = createSvgElement("stop");
  const svg = createSvgElement("svg");
  const trackCircle = createSvgElement("circle");

  const linearGradientId = `linearGradient-${name}`;
  const maskId = `mask-${name}`;
  const svgId = `svg-${name}`;

  setSvgElementAttributes(svg, {
    id: svgId,
    viewBox: "-8 -8 116 116",
    width: "197",
    transform: `rotate(${(percentage / 100) * 8})`,
  });

  setSvgElementAttributes(mask, {
    id: maskId,
  });

  const arc = createSvgArc(percentage);
  setSvgElementAttributes(path, {
    d: arc,
    stroke: "white",
    "stroke-width": 16,
    transform: "translate(50 50) rotate(-90) scale(1 -1)",
  });

  setSvgElementAttributes(staticCircle, {
    r: "8",
    cx: "50",
    fill: "white",
  });

  const degrees = (percentage / 105.4) * 360;
  setSvgElementAttributes(movingCircle, {
    transform: `rotate(${degrees}, 50, 50)`,
    r: "8",
    cx: "50",
    fill: "white",
  });

  setSvgElementAttributes(linearGradient, {
    id: linearGradientId,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "100%",
  });

  setSvgElementAttributes(stopColorStart, {
    offset: "0%",
    "stop-color": gradientStart,
  });

  setSvgElementAttributes(stopColorEnd, {
    offset: "100%",
    "stop-color": gradientEnd,
  });

  setSvgElementAttributes(trackCircle, {
    r: "50",
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: "lightgray",
    "stroke-width": "16",
  });

  setSvgElementAttributes(rect, {
    x: "-8",
    y: "-8",
    width: "116",
    height: "116",
    fill: `url(#${linearGradientId})`,
    mask: `url(#${maskId})`,
  });

  mask.appendChild(path);
  mask.appendChild(staticCircle);
  mask.appendChild(movingCircle);

  linearGradient.appendChild(stopColorStart);
  linearGradient.appendChild(stopColorEnd);

  defs.appendChild(mask);
  defs.appendChild(linearGradient);

  svg.appendChild(defs);
  svg.appendChild(trackCircle);
  svg.appendChild(rect);

  return svg;
}

function createSvgArc(percentage) {
  const radius = 50;
  const startAngle = 0;
  const endAngle = (percentage / 105.4) * (Math.PI * 2);
  const isLargeArc = endAngle - startAngle <= Math.PI ? 0 : 1;

  return [
    // line
    // M x y
    `M ${radius} 0`,

    // arc
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    "A",
    radius,
    radius,
    0,
    isLargeArc,
    0,
    Math.cos(endAngle) * radius,
    -Math.sin(endAngle) * radius,
  ].join(" ");
}

function getRandomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r} ${g} ${b})`;
}
