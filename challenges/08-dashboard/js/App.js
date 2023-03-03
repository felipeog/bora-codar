import { DonutChart } from "./components/DonutChart.js";

export const App = {
  components: {
    DonutChart,
  },
  template: /*html*/ `
    <div class="App">
      <DonutChart percentage="0" />
      <DonutChart percentage="0.11" />
      <DonutChart percentage="0.1" />
      <DonutChart percentage="1" />
      <DonutChart percentage="10" />
      <DonutChart percentage="50" />
      <DonutChart percentage="90" />
      <DonutChart percentage="99." />
      <DonutChart percentage="99.99" />
      <DonutChart percentage="99.9999" />
      <DonutChart percentage="100" />
    </div>
  `,
};
