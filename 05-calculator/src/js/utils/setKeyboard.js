import { elements } from "../objects/elements";
import { handleButtonClick } from "../handlers/handleButtonClick";

export function setKeyboard() {
  const buttons = [
    {
      label: "CE",
      value: "clearLastInput",
      className: "keyboard__button--ce",
    },
    {
      label: "C",
      value: "clearAll",
    },
    {
      label: "%",
      value: "percent",
    },
    {
      label: "÷",
      value: "divide",
      className: "keyboard__button--operator",
    },
    {
      label: "7",
      value: "number7",
    },
    {
      label: "8",
      value: "number8",
    },
    {
      label: "9",
      value: "number9",
    },
    {
      label: "×",
      value: "multiply",
      className: "keyboard__button--operator",
    },
    {
      label: "4",
      value: "number4",
    },
    {
      label: "5",
      value: "number5",
    },
    {
      label: "6",
      value: "number6",
    },
    {
      label: "−",
      value: "subtract",
      className: "keyboard__button--operator",
    },
    {
      label: "1",
      value: "number1",
    },
    {
      label: "2",
      value: "number2",
    },
    {
      label: "3",
      value: "number3",
    },
    {
      label: "+",
      value: "sum",
      className: "keyboard__button--operator",
    },
    {
      label: "±",
      value: "inverse",
    },
    {
      label: "0",
      value: "number0",
    },
    {
      label: ".",
      value: "decimal",
    },
    {
      label: "=",
      value: "equals",
      className: "keyboard__button--equals",
    },
  ];

  buttons.forEach((button) => {
    const buttonElement = document.createElement("button");

    buttonElement.textContent = button.label;
    buttonElement.classList.add("keyboard__button");
    buttonElement.setAttribute("data-value", button.value);
    buttonElement.addEventListener("click", handleButtonClick);

    if (button?.className) {
      buttonElement.classList.add(button.className);
    }

    elements.keyboard[button.value] = buttonElement;
    elements.keyboard.wrapper.appendChild(buttonElement);
  });
}
