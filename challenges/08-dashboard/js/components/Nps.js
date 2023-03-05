export const Nps = {
  props: ["score"],
  computed: {
    computedScore() {
      return Math.round(Number(this.score));
    },
    data() {
      if (this.computedScore < 0) {
        return {
          emoji: "&#128577;",
          label: "Precisa melhorar…",
          color: "#F16E64",
        };
      }

      if (this.computedScore >= 0 && this.computedScore < 30) {
        return {
          emoji: "&#128578;",
          label: "Bom",
          color: "#F9B73E",
        };
      }

      if (this.computedScore >= 30 && this.computedScore < 70) {
        return {
          emoji: "&#128512;",
          label: "Ótimo",
          color: "#3CC273",
        };
      }

      return {
        emoji: "&#128515;",
        label: "Excelente!",
        color: "#22AA58",
      };
    },
    styles() {
      return {
        wrapper: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        },
        header: {
          fontWeight: "var(--weight_semibold)",
          fontSize: "1.5rem",
        },
        emoji: {
          fontSize: "3.4rem",
          textAlign: "center",
        },
        label: {
          color: this.data.color,
          fontWeight: "var(--weight_semibold)",
          fontSize: "1.5rem",
          textAlign: "center",
        },
        scoreWrapper: {
          fontWeight: "var(--weight_semibold)",
          fontSize: ".8rem",
        },
        scoreValue: {
          fontWeight: "var(--weight_regular)",
        },
      };
    },
  },
  template: "#Nps",
};
