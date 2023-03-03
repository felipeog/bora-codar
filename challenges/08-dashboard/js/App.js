import { DonutChart } from "./components/DonutChart.js";
import { Card } from "./components/Card.js";

export const App = {
  components: {
    DonutChart,
    Card,
  },
  data() {
    const salesGoal = Math.random() * 100;
    const salesActual = Math.random() * salesGoal;
    const salesPercentage = (salesActual / salesGoal) * 100;

    const monthGoal = Math.random() * 100_000;
    const monthActual = Math.random() * monthGoal;
    const monthPercentage = (monthActual / monthGoal) * 100;

    return {
      nps: Math.random() * 200 - 100,
      sales: {
        goal: salesGoal,
        actual: salesActual,
        percentage: salesPercentage,
      },
      month: {
        goal: monthGoal,
        actual: monthActual,
        percentage: monthPercentage,
      },
      weekSales: {
        sunday: Math.random() * 100,
        monday: Math.random() * 100,
        tueday: Math.random() * 100,
        wednesday: Math.random() * 100,
        thursday: Math.random() * 100,
        friday: Math.random() * 100,
        saturday: Math.random() * 100,
      },
    };
  },
  template: /*html*/ `
    <div class="App">
      <div className="container">
        <Card>
          nps: {{ nps }}
        </Card>

        <Card>
          <DonutChart :percentage="sales.percentage" />
          goal: {{ sales.goal }} <br /> actual: {{ sales.actual }}
        </Card>

        <Card>
          <DonutChart :percentage="month.percentage" />
          goal: {{ month.goal }} <br /> actual: {{ month.actual }}
        </Card>

        <Card>
          sunday: {{ weekSales.sunday }} <br />
          monday: {{ weekSales.monday }} <br />
          tueday: {{ weekSales.tueday }} <br />
          wednesday: {{ weekSales.wednesday }} <br />
          thursday: {{ weekSales.thursday }} <br />
          friday: {{ weekSales.friday }} <br />
          saturday: {{ weekSales.saturday }} <br />
        </Card>
      </div>
    </div>
  `,
};
