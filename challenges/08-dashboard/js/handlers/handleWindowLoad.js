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
    const gradientStart = svgChart?.dataset?.chartGradientStart ?? "#CE9FFC";
    const gradientEnd = svgChart?.dataset?.chartGradientEnd ?? "#7367F0";

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
    width: 197,
    transform: `rotate(${(percentage / 100) * 9.2})`,
  });

  setSvgElementAttributes(mask, {
    id: maskId,
  });

  const arc = createSvgArc(percentage);
  setSvgElementAttributes(path, {
    d: arc,
    stroke: "white",
    "stroke-width": 16,
  });

  setSvgElementAttributes(staticCircle, {
    r: 8,
    cx: 50,
    fill: "white",
  });

  const degrees = (percentage / 105.4) * 360;
  setSvgElementAttributes(movingCircle, {
    transform: `rotate(${degrees}, 50, 50)`,
    r: 8,
    cx: 50,
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
    r: 50,
    cx: 50,
    cy: 50,
    fill: "none",
    stroke: "#464556",
    "stroke-width": 16,
  });

  setSvgElementAttributes(rect, {
    x: -8,
    y: -8,
    width: 116,
    height: 116,
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
  const endAngle = (percentage / 105.4) * 360;
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const movePosition = polarToCartesian(radius, endAngle);
  const arcPosition = polarToCartesian(radius, startAngle);

  const d = [
    "M",
    movePosition.x,
    movePosition.y,

    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    arcPosition.x,
    arcPosition.y,
  ].join(" ");

  return d;
}

function polarToCartesian(radius, degrees) {
  const centerX = 50;
  const centerY = 50;
  const radians = ((degrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(radians),
    y: centerY + radius * Math.sin(radians),
  };
}
