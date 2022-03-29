/**
 * Header component. 
 * 
 * @since 1.0.0
 * @returns {Object}
 */
export default function Header() {
    let prevScrollPosition = window.scrollY;

    return {
        hide: false,
        showShadow: false,
        /**
         * Applies CSS classes to the root element based on the scroll position.
         * 
         * @since 1.0.0
         */
        applyScrolledStyles() {
            const currentScrollPosition = window.scrollY;
            this.hide = prevScrollPosition < currentScrollPosition;
            this.showShadow = currentScrollPosition > this.$root.offsetHeight;
            prevScrollPosition = currentScrollPosition;
        }
    };
}
