export const Nps = {
  props: ["score"],
  computed: {
    data() {
      if (this.score < 0) {
        return {
          emoji: "&#128577;",
          label: "Precisa melhorar…",
          color: "#F16E64",
        };
      }

      if (this.score >= 0 && this.score < 30) {
        return {
          emoji: "&#128578;",
          label: "Bom",
          color: "#F9B73E",
        };
      }

      if (this.score >= 30 && this.score < 70) {
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
      };
    },
  },
  template: "#Nps",
};
