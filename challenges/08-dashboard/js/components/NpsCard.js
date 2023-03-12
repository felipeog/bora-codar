import { VerticalCard } from "./VerticalCard.js";
import { Nps } from "./Nps.js";

export const NpsCard = {
  components: {
    VerticalCard,
    Nps,
  },
  props: ["score"],
  template: "#NpsCard",
};
