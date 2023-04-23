import { doughnutChart } from "../charts/doughnutChart";
import { state } from "../objects/state";
import { getCssVariableValue } from "../utils/getCssVariableValue";

function renderSales() {
  const selector = ".card--sales .doughnut";
  const percetange = state.sales.actual / state.sales.expected;
  const gradient = {
    start: getCssVariableValue("--sales_gradient_start"),
    end: getCssVariableValue("--sales_gradient_end"),
  };

  doughnutChart(selector, percetange, gradient);
  // TODO: render legend
}

export { renderSales };
