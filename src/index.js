import "./css/index.css";
import Header from "./components/Header";

document.addEventListener('alpine:init', () => {
    Alpine.data('Header', Header);
});
