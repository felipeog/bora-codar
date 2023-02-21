import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: `"Roboto", sans-serif`,
      body: `"Roboto", sans-serif`,
    },
    colors: {
      blue: {
        50: "#F8F8FF",
        500: "#6246EA",
        600: "#5940D5",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "blue" })
);

export { theme };
