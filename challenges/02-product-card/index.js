// TODO: Add responsiveness
// TODO: Optimize sprites file

const spriteHeight = 253;

const image = document.querySelector(".rotate__image");
const range = document.querySelector(".rotate__range");

range.addEventListener("input", (event) => {
  const newValue = event?.target?.value ?? 0;

  image.style.backgroundPositionY = `${Number(newValue) * spriteHeight}px`;
});
