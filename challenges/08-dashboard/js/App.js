import { DonutChart } from "./components/DonutChart.js";

export const App = {
  components: {
    DonutChart,
  },
  template: `
    <div class="App">
      <DonutChart percentage="0" />
      <DonutChart percentage="0.1111" />
      <DonutChart percentage="0.1" />
      <DonutChart percentage="10" />
      <DonutChart percentage="50" />
      <DonutChart percentage="90" />
      <DonutChart percentage="99.9" />
      <DonutChart percentage="99.9999" />
      <DonutChart percentage="100" />
    </div>
  `,
};
