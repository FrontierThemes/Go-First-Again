import "./css/index.css";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

import Header from "./components/Header";

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('Header', Header);
});

Alpine.plugin(focus);
Alpine.start();
