export const Card = {
  props: ["styleProp"],
  computed: {
    wrapperStyle() {
      const hasStyles =
        this.styleProp !== null && typeof this.styleProp === "object";

      return {
        borderRadius: "1rem",
        backgroundColor: "var(--primary_200)",
        padding: "1.8rem 3rem",
        boxShadow: "var(--box_shadow)",
        ...(hasStyles && this.styleProp),
      };
    },
  },
  template: "#Card",
};
