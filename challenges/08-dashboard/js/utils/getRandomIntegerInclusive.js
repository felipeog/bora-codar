function getRandomIntegerInclusive(min, max) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  const integer =
    Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;

  return integer;
}

export { getRandomIntegerInclusive };
