import { renderMonth } from "./views/month.js";
import { renderWeek } from "./views/week.js";
import { renderDay } from "./views/day.js";
import { changeSelected } from "./ui/sidebar.js";

let currentView = "month";

export function setView(view) {
    const container = document.getElementById("calendar-container");

    container.innerHTML = "";
    currentView = view;

    if (view === "month") renderMonth(container);
    if (view === "week") renderWeek(container);
    if (view === "day") renderDay(container);
}

// bind UI
document.querySelectorAll("[data-view]").forEach(btn => {
    btn.addEventListener("click", () => {
        setView(btn.dataset.view);
        changeSelected(btn);
    });
});

export function getCurrentView() {
    return currentView;
}
