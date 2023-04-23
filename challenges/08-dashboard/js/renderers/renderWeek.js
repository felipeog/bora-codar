import { barChart } from "../charts/barChart";
import { state } from "../objects/state";
import { getCssVariableValue } from "../utils/getCssVariableValue";

function renderWeek() {
  const selector = ".card--week .bar";
  const week = state.week;
  const gradient = {
    start: getCssVariableValue("--week_gradient_start"),
    end: getCssVariableValue("--week_gradient_end"),
  };

  barChart(selector, week, gradient);
  // TODO: render left side
}

export { renderWeek };
