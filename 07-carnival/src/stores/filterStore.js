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
    filteredBlocks = filterBlocks({
      key: "title",
      search: state.title,
      blocks: filteredBlocks,
    });
  }

  if (state.location) {
    filteredBlocks = filterBlocks({
      key: "location",
      search: state.location,
      blocks: filteredBlocks,
    });
  }

  return { filteredBlocks };
}

function filterBlocks({ key, search, blocks }) {
  const normalizedSearch = normalizeString(search);

  return blocks.filter((block) => {
    const normalizedValue = normalizeString(block[key]);

    return normalizedValue.includes(normalizedSearch);
  });
}

function normalizeString(string) {
  return string
    .normalize("NFD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "");
}

export { useFilterStore };
