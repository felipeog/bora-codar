import {
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  PopoverArrow,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

function MapPopover({ location }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openPopover() {
    onOpen();
  }

  function closePopover() {
    onClose();
  }

  return (
    <Popover isOpen={isOpen} returnFocusOnClose={false} autoFocus={false}>
      <PopoverTrigger>
        <g
          style={{
            cursor: "pointer",
          }}
          onMouseEnter={openPopover}
          onMouseLeave={closePopover}
          onFocus={openPopover}
          onBlur={closePopover}
          tabIndex={0}
        >
          <circle
            r={6}
            fill={
              isOpen
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
