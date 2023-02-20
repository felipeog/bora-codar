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

function Hero() {
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
            <HStack spacing={4}>
              <Input placeholder="Pesquise por nome" />
              <Select placeholder="Selecione uma cidade">
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </Select>
              <Button textTransform="uppercase" flexShrink={0}>
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
