import { Controller } from "@hotwired/stimulus";
import { useClickOutside } from "stimulus-use";

export default class extends Controller {
    static targets = ['overlay', 'menuContainer'];

    static values = {
        open: Boolean,
    };

    static classes = ['overlayOpen', 'menuContainerOpen'];

    connect() {
        useClickOutside(this, { element: this.menuContainerTarget });
    }

    openMenu() {
        this.openValue = true;
    }

    closeMenu() {
        this.openValue = false;
    }

    handleMenuContainerClickOutside(e) {
        e.preventDefault();

        if (!this.openValue) {
            return;
        }

        this.closeMenu();
    }

    openValueChanged() {
        if (this.openValue) {
            this.overlayTarget.classList.add(...this.overlayOpenClasses);
            this.menuContainerTarget.classList.add(...this.menuContainerOpenClasses);
            document.body.style.overflow = 'hidden';
        } else {
            this.overlayTarget.classList.remove(...this.overlayOpenClasses);
            this.menuContainerTarget.classList.remove(...this.menuContainerOpenClasses);
            document.body.style.overflow = 'auto';
        }
    }
}
