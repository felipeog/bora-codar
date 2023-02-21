import { Box } from "@chakra-ui/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import geography from "../consts/topo.json";
import { useFilterStore } from "../stores/filterStore";
import { MapPopover } from "./MapPopover";

function MapView() {
  const filteredBlocks = useFilterStore((state) => state.filteredBlocks);
  const locationsByState = filteredBlocks.reduce((acc, cur) => {
    const state = cur.location.split(" - ")[1];

    if (acc[state]) {
      return {
        ...acc,
        [state]: {
          ...acc[state],
          blocks: [...acc[state].blocks, cur],
        },
      };
    }

    return {
      ...acc,
      [state]: {
        state: state,
        longitude: cur.longitude,
        latitude: cur.latitude,
        blocks: [cur],
      },
    };
  }, {});
  const locations = Object.values(locationsByState).sort((a, b) => {
    if (a.latitude < b.latitude) {
      return 1;
    }

    if (a.latitude > b.latitude) {
      return -1;
    }

    return 0;
  });

  if (!locations.length) {
    return "Sem resultados.";
  }

  const geographyStyle = {
    fill: "var(--chakra-colors-blue-50)",
    stroke: "var(--chakra-colors-blue-200)",
    strokeWidth: 0.5,
    outline: "none",
    transition: "100ms",
  };

  return (
    <Box marginTop={4}>
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
                tabIndex={-1}
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

        {locations.map((location) => (
          <Marker
            key={location.state}
            coordinates={[location.longitude, location.latitude]}
          >
            <MapPopover location={location} />
          </Marker>
        ))}
      </ComposableMap>
    </Box>
  );
}

export { MapView };
