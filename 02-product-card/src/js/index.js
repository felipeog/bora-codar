// TODO: add responsiveness
// TODO: optimize sprites file

const image = document.querySelector(".rotate__image");
const range = document.querySelector(".rotate__range");

range.addEventListener("input", (event) => {
  image.style.backgroundPositionY = `${event.target.value * 253}px`;
});
