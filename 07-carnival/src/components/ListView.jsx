import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";

import { useFilterStore } from "../stores/filterStore";

function ListView() {
  const filteredBlocks = useFilterStore((state) => state.filteredBlocks);

  if (!filteredBlocks?.length) {
    return "Sem resultados.";
  }

  return (
    <SimpleGrid columns={3} spacing={6} marginTop={8}>
      {filteredBlocks.map((block) => (
        <Card key={block.title} as="article" overflow="hidden" tabIndex={0}>
          <Image
            objectFit="cover"
            height={150}
            src={block.imageUrl}
            alt={block.title}
          />

          <CardBody>
            <VStack alignItems="start" spacing={4}>
              <Heading size="sm">{block.title}</Heading>

              <Text color="gray.600" lineHeight={1.4}>
                {block.description}
              </Text>

              <HStack>
                <Icon
                  as={IoLocationOutline}
                  color="var(--chakra-colors-red-400)"
                />
                <Text color="gray.600">{block.location}</Text>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export { ListView };
