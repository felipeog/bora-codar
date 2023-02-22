import { state } from "../objects/state";

/**
 * @param {('previous'|'next'|undefined)} direction
 * @returns number
 */
export function getMusicIndex(direction) {
  const currentIndex = state.playlist.indexOf(state.currentMusic);
  const lastIndex = state.playlist.length - 1;

  if (direction === "previous") {
    return currentIndex <= 0 ? lastIndex : currentIndex - 1;
  }

  if (direction === "next") {
    return currentIndex >= lastIndex ? 0 : currentIndex + 1;
  }

  return currentIndex;
}
