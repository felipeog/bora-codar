import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";

import { locations } from "../consts/locations";
import { useFilterStore } from "../stores/filterStore";

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
    <Box backgroundColor="gray.50">
      <Flex
        width={960}
        marginX="auto"
        paddingY={20}
        flexDirection="column"
        alignItems="center"
        as="header"
      >
        <Heading as="h1" size="xs" textTransform="uppercase" textAlign="center">
          Find your block
        </Heading>
        <Heading as="h2" textAlign="center" maxWidth={640} marginTop={4}>
          Encontre os melhores blocos de carnaval de 2023
        </Heading>

        <Card marginTop={8} width="100%">
          <CardBody>
            <HStack spacing={4} as="form" onSubmit={handleSubmit}>
              <Input
                placeholder="Pesquise por nome"
                onChange={handleTitleChange}
              />

              <Select
                placeholder="Selecione uma cidade"
                onChange={handleLocationChange}
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Select>

              <Button textTransform="uppercase" flexShrink={0} type="submit">
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
