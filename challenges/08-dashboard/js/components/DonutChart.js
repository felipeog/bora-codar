const SVG_WIDTH = 197;
const STROKE_WIDTH = 30;
const CHART_WIDTH = SVG_WIDTH + STROKE_WIDTH;
const RADIUS = (SVG_WIDTH - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
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
  template: "#DonutChart-Zero",
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
    animateValues() {
      return `${this.circumference}; ${this.strokeDashOffset}`;
    },
    animateTransform() {
      const circumferenceOffset = this.strokeWidth / 2;
      const rotationDegrees = (circumferenceOffset / this.circumference) * 360;
      const offsetDegrees = -90;
      const degrees = rotationDegrees * (this.percentage / 100) + offsetDegrees;
      const point = this.svgWidth / 2;

      return {
        from: `${offsetDegrees}, ${point}, ${point}`,
        to: `${degrees}, ${point}, ${point}`,
      };
    },
  },
  data() {
    return {
      svgWidth: SVG_WIDTH,
      circumference: CIRCUMFERENCE,
      radius: RADIUS,
      strokeWidth: STROKE_WIDTH,
      viewBox: VIEWBOX,
      chartWidth: CHART_WIDTH,
    };
  },
  template: "#DonutChart-Between",
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
  template: "#DonutChart-OneHundred",
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
  template: "#DonutChart",
};
