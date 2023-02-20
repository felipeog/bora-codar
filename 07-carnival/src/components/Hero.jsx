import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Select,
} from "@chakra-ui/react";
import { IoLocationOutline, IoSearch } from "react-icons/io5";

import { blocks } from "../consts/blocks";
import { locations } from "../consts/locations";
import { useFilterStore } from "../stores/filterStore";
import TopLeftBackgroundImage from "../assets/top-left-background.png";
import BottomRightBackgroundImage from "../assets/bottom-right-background.png";

function Hero() {
  const [setTitle, setLocation, applyFilters] = useFilterStore((state) => [
    state.setTitle,
    state.setLocation,
    state.applyFilters,
  ]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    applyFilters();
  }

  return (
    <Box
      backgroundColor="blue.50"
      backgroundImage={`url(${TopLeftBackgroundImage}), url(${BottomRightBackgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="top left, bottom right"
      backgroundSize="400px, 400px"
    >
      <Flex
        width={960}
        marginX="auto"
        paddingY={20}
        flexDirection="column"
        alignItems="center"
        as="header"
      >
        <Heading
          as="h1"
          size="xs"
          textTransform="uppercase"
          textAlign="center"
          color="red.400"
        >
          Find your block
        </Heading>
        <Heading as="h2" textAlign="center" maxWidth={640} marginTop={4}>
          Encontre os{" "}
          <span style={{ color: "var(--chakra-colors-blue-500)" }}>
            melhores blocos
          </span>{" "}
          de carnaval de 2023
        </Heading>

        <Card marginTop={8} width="100%">
          <CardBody>
            <HStack spacing={4} as="form" onSubmit={handleSubmit}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <IoSearch color="var(--chakra-colors-red-400)" size={20} />
                  }
                />
                <Input
                  placeholder="Pesquise por nome"
                  onChange={handleTitleChange}
                  list="titles"
                  sx={{
                    "&::-webkit-calendar-picker-indicator": {
                      display: "none !important",
                    },
                  }}
                />

                <datalist id="titles">
                  {blocks.map((block) => (
                    <option key={block.title} value={block.title}>
                      {block.title}
                    </option>
                  ))}
                </datalist>
              </InputGroup>

              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <IoLocationOutline
                      color="var(--chakra-colors-red-400)"
                      size={20}
                    />
                  }
                />
                <Input
                  placeholder="Pesquise por cidade"
                  onChange={handleLocationChange}
                  list="locations"
                  sx={{
                    "&::-webkit-calendar-picker-indicator": {
                      display: "none !important",
                    },
                  }}
                />

                <datalist id="locations">
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </datalist>
              </InputGroup>

              <Button
                textTransform="uppercase"
                flexShrink={0}
                type="submit"
                fontSize="sm"
              >
                Buscar agora
              </Button>
            </HStack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

export { Hero };
