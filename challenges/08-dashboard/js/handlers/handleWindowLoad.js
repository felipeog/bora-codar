import { renderMonth } from "../renderers/renderMonth";
import { renderNps } from "../renderers/renderNps";
import { renderSales } from "../renderers/renderSales";
import { renderWeek } from "../renderers/renderWeek";

function handleWindowLoad() {
  renderMonth();
  renderNps();
  renderSales();
  renderWeek();
}

export { handleWindowLoad };
