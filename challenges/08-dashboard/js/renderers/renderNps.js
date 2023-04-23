import { elements } from "../objects/elements";
import { state } from "../objects/state";

function renderNps() {
  const grade = getGrade(state.nps);

  elements.npsEmoji.textContent = grade.emoji;
  elements.npsGrade.textContent = grade.label;
  elements.npsGrade.style.color = grade.color;
  elements.npsScore.textContent = `NPS Score ${state.nps}`;
}

function getGrade(nps) {
  const grades = {
    bad: {
      emoji: "😞",
      label: "Ruim",
      color: "var(--nps_grade_bad)",
    },
    regular: {
      emoji: "😐",
      label: "Regular",
      color: "var(--nps_grade_regular)",
    },
    great: {
      emoji: "🙂",
      label: "Bom",
      color: "var(--nps_grade_great)",
    },
    excellent: {
      emoji: "😀",
      label: "Excelente!",
      color: "var(--nps_grade_excellent)",
    },
  };

  if (nps < 0) {
    return grades.bad;
  }

  if (nps < 30) {
    return grades.regular;
  }

  if (nps < 70) {
    return grades.great;
  }

  return grades.excellent;
}

export { renderNps };
