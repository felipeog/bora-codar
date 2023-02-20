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

import { blocks } from "../consts/blocks";

function ListView() {
  return (
    <SimpleGrid columns={3} spacing={4} marginTop={8}>
      {blocks.map((block) => (
        <Card key={block.title} as="article" overflow="hidden">
          <Image
            objectFit="cover"
            height={150}
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12"
            alt={block.title}
          />

          <CardBody>
            <VStack alignItems="start" spacing={4}>
              <Heading size="sm">{block.title}</Heading>
              <Text>{block.description}</Text>

              <HStack>
                <Icon as={IoLocationOutline} />
                <Text>{block.location}</Text>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export { ListView };
