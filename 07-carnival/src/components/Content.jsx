import {
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  Text,
  TabPanels,
  TabPanel,
  HStack,
} from "@chakra-ui/react";

import { ListView } from "./ListView";
import { MapView } from "./MapView";

function Content() {
  return (
    <Flex width={960} marginX="auto" paddingY={20} as="section">
      <Tabs variant="unstyled" width="100%">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="md">
            Blocos recomendados
          </Heading>

          <TabList
            border="1px solid var(--chakra-colors-blue-100)"
            borderRadius={4}
            padding={1}
          >
            <Tab
              borderRadius={4}
              paddingX={3}
              paddingY={1}
              fontWeight="bold"
              color="blue.500"
              _selected={{ backgroundColor: "blue.500", color: "white" }}
            >
              <Text textTransform="uppercase" fontSize="xs">
                Lista
              </Text>
            </Tab>
            <Tab
              borderRadius={4}
              paddingX={3}
              paddingY={1}
              fontWeight="bold"
              color="blue.500"
              _selected={{ backgroundColor: "blue.500", color: "white" }}
            >
              <Text textTransform="uppercase" fontSize="xs">
                Mapa
              </Text>
            </Tab>
          </TabList>
        </HStack>

        <TabPanels>
          <TabPanel
            padding={0}
            sx={{
              "&:focus-visible": {
                boxShadow: "var(--chakra-shadows-outline)",
              },
            }}
          >
            <ListView />
          </TabPanel>
          <TabPanel
            padding={0}
            sx={{
              "&:focus-visible": {
                boxShadow: "var(--chakra-shadows-outline)",
              },
            }}
          >
            <MapView />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export { Content };
