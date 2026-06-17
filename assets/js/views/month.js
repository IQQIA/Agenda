export function renderMonth(container) {

    const grid = document.createElement("div");
    grid.className = "month-grid";

    for (let i = 0; i < 42; i++) {
        const cell = document.createElement("div");
        cell.className = "month-cell";

        // placeholder numéro (temporaire)
        cell.innerHTML = `<span>${i + 1}</span>`;

        grid.appendChild(cell);
    }

    container.appendChild(grid);
}
