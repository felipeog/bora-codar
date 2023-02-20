import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
  List,
  ListItem,
} from "@chakra-ui/react";

function MapPopover({ location }) {
  return (
    <Popover>
      <PopoverTrigger>
        <g style={{ cursor: "pointer" }}>
          <circle r={6} fill="var(--chakra-colors-red-500)" />
          <text
            textAnchor="middle"
            y={-8}
            style={{
              fontSize: 12,
              fontFamily: "var(--chakra-fonts-body)",
              fill: "var(--chakra-colors-black)",
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

          <PopoverHeader>Blocos</PopoverHeader>

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
