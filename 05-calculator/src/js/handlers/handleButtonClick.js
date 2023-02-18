import { applyInput } from "../utils/applyInput";

export function handleButtonClick(event) {
  const value = event?.target?.dataset?.value ?? "";

  applyInput(value);
}
