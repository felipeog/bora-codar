export function formatSeconds(initialSeconds) {
  if (isNaN(initialSeconds)) {
    return "00:00";
  }

  const minutes = String(Math.floor(initialSeconds / 60)).padStart(2, "0");
  const seconds = String(Math.floor(initialSeconds % 60)).padStart(2, "0");

  return `${minutes}:${seconds}`;
}
