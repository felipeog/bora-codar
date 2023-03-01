const Zero = {
  props: ["id"],
  computed: {
    svgId() {
      return `svg-${this.id}`;
    },
  },
  template: `
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
    percentageArc() {
      const radius = 50;
      const startAngle = 0;
      const endAngle = (this.percentage / 105.4) * 360;
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      const movePosition = this.polarToCartesian(radius, endAngle);
      const arcPosition = this.polarToCartesian(radius, startAngle);

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
    },
    movingCircleRotation() {
      const degrees = (this.percentage / 105.4) * 360;

      return `rotate(${degrees}, 50, 50)`;
    },
    svgRotation() {
      const degrees = (this.percentage / 100) * 9.2;

      return `rotate(${degrees})`;
    },
  },
  methods: {
    polarToCartesian(radius, degrees) {
      const centerX = 50;
      const centerY = 50;
      const radians = ((degrees - 90) * Math.PI) / 180.0;

      return {
        x: centerX + radius * Math.cos(radians),
        y: centerY + radius * Math.sin(radians),
      };
    },
  },
  template: `
    <svg
      class="DonutChart-Between"
      :id="svgid"
      viewBox="-8 -8 116 116"
      width="197"
      :transform="svgRotation"
    >
      <defs>
        <mask
          :id="maskId"
        >
          <path
            :d="percentageArc"
            stroke="white"
            stroke-width="16"
          ></path>
          <circle
            r="8"
            cx="50"
            fill="white"
          ></circle>
          <circle
            :transform="movingCircleRotation"
            r="8"
            cx="50"
            fill="white"
          ></circle>
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
        r="50"
        cx="50"
        cy="50"
        fill="none"
        stroke="#464556"
        stroke-width="16"
      ></circle>
      <rect
        x="-8"
        y="-8"
        width="116"
        height="116"
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
  template: `
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
  template: `
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
