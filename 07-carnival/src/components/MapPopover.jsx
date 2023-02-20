import { useState } from "react";
import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
} from "@chakra-ui/react";

function MapPopover({ location }) {
  const [isHovering, setIsHovering] = useState();

  return (
    <Popover>
      <PopoverTrigger>
        <g
          style={{ cursor: "pointer" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <circle
            r={6}
            fill={
              isHovering
                ? "var(--chakra-colors-red-500)"
                : "var(--chakra-colors-red-400)"
            }
            style={{
              transition: "100ms",
            }}
          />
          <text
            textAnchor="middle"
            y={-8}
            style={{
              fontSize: 12,
              fontFamily: "var(--chakra-fonts-body)",
              fill: "var(--chakra-colors-black)",
              transition: "100ms",
            }}
          >
            {location.state} - {location.blocks.length}
          </text>
        </g>
      </PopoverTrigger>

      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody>
            <List spacing={4}>
              {location.blocks.map((block) => (
                <ListItem key={block.title}>
                  <Text fontSize="xs" color="gray.500" lineHeight={1}>
                    {block.location}
                  </Text>
                  <Text>{block.title}</Text>
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export { MapPopover };
