import { doughnutChart } from "../charts/doughnutChart";
import { state } from "../objects/state";
import { getCssVariableValue } from "../utils/getCssVariableValue";

function renderMonth() {
  const selector = ".card--month .doughnut";
  const percetange = state.month.actual / state.month.expected;
  const gradient = {
    start: getCssVariableValue("--month_gradient_start"),
    end: getCssVariableValue("--month_gradient_end"),
  };

  doughnutChart(selector, percetange, gradient);
  // TODO: render legend
}

export { renderMonth };
