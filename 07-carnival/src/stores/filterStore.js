import { create } from "zustand";

import { blocks } from "../consts/blocks";

const useFilterStore = create((set) => ({
  title: null,
  setTitle: (title) => set(() => ({ title })),
  location: null,
  setLocation: (location) => set(() => ({ location })),
  filteredBlocks: blocks,
  applyFilters: () => set(applyFilters),
}));

function applyFilters(state) {
  let filteredBlocks = blocks;

  if (state.title) {
    filteredBlocks = filteredBlocks.filter((block) =>
      block.title.includes(state.title)
    );
  }

  if (state.location) {
    filteredBlocks = filteredBlocks.filter(
      (block) => block.location === state.location
    );
  }

  return { filteredBlocks };
}

export { useFilterStore };
