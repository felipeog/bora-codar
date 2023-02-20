import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import geography from "../consts/topo.json";
import { useFilterStore } from "../stores/filterStore";

function MapView() {
  const filteredBlocks = useFilterStore((state) => state.filteredBlocks);
  const formattedLocations = filteredBlocks.reduce((acc, cur) => {
    const locationState = cur.location.split(" - ")[1];

    if (acc[locationState]) {
      return {
        ...acc,
        [locationState]: {
          ...acc[locationState],
          blocks: [...acc[locationState].blocks, cur],
        },
      };
    }

    return {
      ...acc,
      [locationState]: {
        longitude: cur.longitude,
        latitude: cur.latitude,
        blocks: [cur],
      },
    };
  }, {});

  const geographyStyle = {
    fill: "#aaa",
    stroke: "#fff",
    outline: "none",
    transition: "100ms",
  };

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 800,
        center: [-54, -15],
      }}
    >
      <Geographies geography={geography}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey + "-Geography"}
              stroke="#FFF"
              geography={geo}
              style={{
                default: {
                  ...geographyStyle,
                },
                hover: {
                  ...geographyStyle,
                },
                pressed: {
                  ...geographyStyle,
                },
              }}
            />
          ))
        }
      </Geographies>

      {Object.entries(formattedLocations).map(([key, value]) => (
        <Marker key={key} coordinates={[value.longitude, value.latitude]}>
          <Popover>
            <PopoverTrigger>
              <g style={{ cursor: "pointer" }}>
                <circle r={5} fill="#f00" stroke="#fff" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-8}
                  style={{
                    fontSize: 12,
                    fontFamily: "system-ui",
                    fill: "#000",
                  }}
                >
                  {key} - {value.blocks.length}
                </text>
              </g>
            </PopoverTrigger>

            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />

                <PopoverHeader>Blocos {key}</PopoverHeader>

                <PopoverBody>
                  <ul>
                    {value.blocks.map((block) => (
                      <li key={block.title}>
                        <p>{block.title}</p>
                        <p>{block.location}</p>
                      </li>
                    ))}
                  </ul>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Marker>
      ))}
    </ComposableMap>
  );
}

export { MapView };
