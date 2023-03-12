import { Card } from "./Card.js";

export const VerticalCard = {
  components: {
    Card,
  },
  data() {
    return {
      wrapperStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    };
  },
  template: "#VerticalCard",
};
