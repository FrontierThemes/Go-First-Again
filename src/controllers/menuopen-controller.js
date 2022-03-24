import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    openMenu() {
        this.dispatch('open-menu');
    }
}
