const SVG_WIDTH = 197;
const RADIUS = SVG_WIDTH / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const STROKE_WIDTH = 35;
const CHART_WIDTH = SVG_WIDTH + STROKE_WIDTH;
const VIEWBOX = `0 0 ${CHART_WIDTH} ${CHART_WIDTH}`;

const Zero = {
  props: ["id"],
  computed: {
    svgId() {
      return `svg-${this.id}`;
    },
  },
  data() {
    return {
      radius: RADIUS,
      strokeWidth: STROKE_WIDTH,
      svgWidth: SVG_WIDTH,
      viewBox: VIEWBOX,
    };
  },
  template: /*html*/ `
    <svg
      :id="svgId"
      :viewBox="viewBox"
      :width="svgWidth"
      class="DonutChart-Zero"
    >
      <circle
        :r="radius"
        :stroke-width="strokeWidth"
        cx="50%"
        cy="50%"
        fill="none"
        stroke="#464556"
      ></circle>
    </svg>
  `,
};

const Between = {
  props: ["gradientEnd", "gradientStart", "id", "percentage"],
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
      const circumferenceOffset = this.circumference + this.strokeWidth;
      const offsettedPercentage =
        (circumferenceOffset / this.circumference) * 100;

      return (
        (this.circumference * (offsettedPercentage - this.percentage)) /
        offsettedPercentage
      );
    },
    transformRotate() {
      const circumferenceOffset = this.strokeWidth / 2;
      const rotationDegrees = (circumferenceOffset / this.circumference) * 360;
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
      chartWidth: CHART_WIDTH,
      circumference: CIRCUMFERENCE,
      radius: RADIUS,
      strokeWidth: STROKE_WIDTH,
      svgWidth: SVG_WIDTH,
      viewBox: VIEWBOX,
    };
  },
  template: /*html*/ `
    <svg
      :id="svgId"
      :viewBox="viewBox"
      :width="svgWidth"
      class="DonutChart-Between"
    >
      <defs>
        <mask
          :id="maskId"
        >
          <circle
            :r="radius"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="strokeDashOffset"
            :stroke-width="strokeWidth"
            :transform="transformRotate"
            cx="50%"
            cy="50%"
            fill="none"
            stroke-linecap="round"
            stroke="white"
          >
            <animate
              :values="animateValues"
              attributeName="stroke-dashoffset"
              calcMode="spline"
              dur="1s"
              fill="freeze"
              keySplines="0.5, 0, 0.5, 1"
              keyTimes="0; 1"
              repeatCount="1"
            />
          </circle>
        </mask>
        <linearGradient
          :id="linearGradientId"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop
            :stop-color="gradientStart"
            offset="0%"
          ></stop>
          <stop
            :stop-color="gradientEnd"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <circle
        :r="radius"
        :stroke-width="strokeWidth"
        cx="50%"
        cy="50%"
        fill="none"
        stroke="#464556"
      ></circle>
      <rect
        :fill="linearGradientUrl"
        :height="chartWidth"
        :mask="maskUrl"
        :width="chartWidth"
        x="0"
        y="0"
      ></rect>
    </svg>
  `,
};

const OneHundred = {
  props: ["gradientEnd", "gradientStart", "id"],
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
  data() {
    return {
      radius: RADIUS,
      strokeWidth: STROKE_WIDTH,
      svgWidth: SVG_WIDTH,
      viewBox: VIEWBOX,
    };
  },
  template: /*html*/ `
    <svg
      :id="svgId"
      :viewBox="viewBox"
      :width="svgWidth"
      class="DonutChart-OneHundred"
    >
      <defs>
        <linearGradient
          :id="linearGradientId"
          x1="0%"
          x2="100%"
          y1="0%"
          y2="100%"
        >
          <stop
            :stop-color="gradientStart"
            offset="0%"
          ></stop>
          <stop
            :stop-color="gradientEnd"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <circle
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke="linearGradientUrl"
        cx="50%"
        cy="50%"
        fill="none"
      ></circle>
    </svg>
  `,
};

export const DonutChart = {
  components: {
    Between,
    OneHundred,
    Zero,
  },
  props: ["gradient-end", "gradient-start", "id", "percentage"],
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
        :gradientEnd="computedGradientEnd"
        :gradientStart="computedGradientStart"
        :id="computedId"
      />
      <Between
        v-else
        :gradientEnd="computedGradientEnd"
        :gradientStart="computedGradientStart"
        :id="computedId"
        :percentage="computedPercentage"
      />
    </div>
  `,
};
