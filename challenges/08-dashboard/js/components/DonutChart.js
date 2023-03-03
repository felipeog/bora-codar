const SVG_WIDTH = 197;
const RADIUS = SVG_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const STROKE_WIDTH = 35;
const CHART_WIDTH = SVG_WIDTH + STROKE_WIDTH;
const VIEWBOX = {
  X1: 0,
  Y1: 0,
  X2: CHART_WIDTH,
  Y2: CHART_WIDTH,
};

const Zero = {
  props: ["id"],
  computed: {
    svgId() {
      return `svg-${this.id}`;
    },
  },
  template: /*html*/ `
    <svg
      class="DonutChart-Zero"
      :id="svgId"
      viewBox="-8 -8 116 116"
      width="197"
    >
      <circle
        r="50"
        cx="50"
        cy="50"
        fill="none"
        stroke="#464556"
        stroke-width="16"
      ></circle>
    </svg>
  `,
};

const Between = {
  props: ["id", "percentage", "gradientStart", "gradientEnd"],
  computed: {
    svgId() {
      return `svg-${this.id}`;
    },
    maskId() {
      return `mask-${this.id}`;
    },
    maskUrl() {
      return `url(#${this.maskId})`;
    },
    linearGradientId() {
      return `linearGradient-${this.id}`;
    },
    linearGradientUrl() {
      return `url(#${this.linearGradientId})`;
    },
    strokeDashOffset() {
      const offsettedPercentage = 106.2;

      return (
        (this.circumference * (offsettedPercentage - this.percentage)) /
        offsettedPercentage
      );
    },
    transformRotate() {
      const rotationDegrees = 10.2;
      const offsetDegrees = -90;
      const degrees = rotationDegrees * (this.percentage / 100) + offsetDegrees;
      const point = this.chartWidth / 2;

      return `rotate(${degrees}, ${point}, ${point})`;
    },
    animateValues() {
      return `${this.circumference}; ${this.strokeDashOffset}`;
    },
  },
  data() {
    return {
      viewBox: `${VIEWBOX.X1} ${VIEWBOX.Y1} ${VIEWBOX.X2} ${VIEWBOX.Y2}`,
      svgWidth: SVG_WIDTH,
      chartWidth: CHART_WIDTH,
      radius: RADIUS,
      circumference: CIRCUMFERENCE,
      strokeWidth: STROKE_WIDTH,
    };
  },
  template: /*html*/ `
    <svg
      class="DonutChart-Between"
      :id="svgId"
      :viewBox="viewBox"
      :width="svgWidth"
    >
      <defs>
        <mask
          :id="maskId"
        >
          <circle
            cx="50%"
            cy="50%"
            :r="radius"
            stroke="white"
            fill="none"
            :stroke-width="strokeWidth"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashOffset"
            stroke-linecap="round"
            :transform="transformRotate"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="1s"
              repeatCount="1"
              fill="freeze"
              calcMode="spline"
              keySplines="0.45, 0.05, 0.55, 0.95"
              keyTimes="0; 1"
              :values="animateValues"
            />
          </circle>
        </mask>
        <linearGradient
          :id="linearGradientId"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop 
            offset="0%" 
            :stop-color="gradientStart"
          ></stop>
          <stop 
            offset="100%" 
            :stop-color="gradientEnd"
          ></stop>
        </linearGradient>
      </defs>
      <circle
        cx="50%"
        cy="50%"
        :r="radius"
        stroke="#464556"
        fill="none"
        :stroke-width="strokeWidth"
      ></circle>
      <rect
        x="0"
        y="0"
        :width="chartWidth"
        :height="chartWidth"
        :fill="linearGradientUrl"
        :mask="maskUrl"
      ></rect>
    </svg>
  `,
};

const OneHundred = {
  props: ["id", "gradientStart", "gradientEnd"],
  computed: {
    svgId() {
      return `svg-${this.id}`;
    },
    linearGradientId() {
      return `linearGradient-${this.id}`;
    },
    linearGradientUrl() {
      return `url(#${this.linearGradientId})`;
    },
  },
  template: /*html*/ `
    <svg
      class="DonutChart-OneHundred"
      :id="svgId"
      viewBox="-8 -8 116 116"
      width="197"
    >
      <defs>
        <linearGradient
          :id="linearGradientId"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            :stop-color="gradientStart"
          ></stop>
          <stop
            offset="100%"
            :stop-color="gradientEnd"
          ></stop>
        </linearGradient>
      </defs>
      <circle
        r="50"
        cx="50"
        cy="50"
        fill="none"
        :stroke="linearGradientUrl"
        stroke-width="16"
      ></circle>
    </svg>
  `,
};

export const DonutChart = {
  components: {
    Zero,
    Between,
    OneHundred,
  },
  props: ["id", "gradient-start", "gradient-end", "percentage"],
  computed: {
    computedId() {
      return (
        this?.id ??
        String(Math.floor(Math.random() * 1_000_000)).padStart(6, "0")
      );
    },
    computedGradientStart() {
      return this?.gradientStart ?? "#CE9FFC";
    },
    computedGradientEnd() {
      return this?.gradientEnd ?? "#7367F0";
    },
    computedPercentage() {
      return Number(this?.percentage ?? "0");
    },
  },
  template: /*html*/ `
    <div
      class="DonutChart"
    >
      <Zero
        v-if="computedPercentage <= 0"
        :id="computedId"
      />
      <OneHundred
        v-else-if="computedPercentage >= 100"
        :id="computedId"
        :gradientStart="computedGradientStart"
        :gradientEnd="computedGradientEnd"
      />
      <Between
        v-else
        :id="computedId"
        :percentage="computedPercentage"
        :gradientStart="computedGradientStart"
        :gradientEnd="computedGradientEnd"
      />
    </div>
  `,
};
