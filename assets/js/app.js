function setView(view) {
    const container = document.getElementById("calendar-container");

    container.innerHTML = "";

    currentView = view;

    if (view === "month") renderMonth(container);
    if (view === "week") renderWeek(container);
    if (view === "day") renderDay(container);
}

document.querySelectorAll(".nav-btn")[0]
    .addEventListener("click", () => setView("month"));

document.querySelectorAll(".nav-btn")[1]
    .addEventListener("click", () => setView("week"));

document.querySelectorAll(".nav-btn")[2]
    .addEventListener("click", () => setView("day"));
