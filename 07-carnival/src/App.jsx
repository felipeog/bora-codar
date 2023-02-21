import { Box } from "@chakra-ui/react";
import { Hero } from "./components/Hero";
import { Content } from "./components/Content";

function App() {
  return (
    <Box as="main">
      <Hero />
      <Content />
    </Box>
  );
}

export { App };
