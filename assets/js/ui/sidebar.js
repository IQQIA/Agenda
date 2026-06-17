export function changeSelected(btn) {

        // remove selected everywhere
        document.querySelectorAll("[data-view]").forEach(b => {
            b.classList.remove("selected");
        });

        // add selected to clicked
        btn.classList.add("selected");

        // switch view
        setView(btn.dataset.view);

}
