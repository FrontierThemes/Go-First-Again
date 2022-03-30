/**
 * Header component. 
 * 
 * @since 1.0.0
 * @returns {Object}
 */
export default function Header() {
    let prevScrollPosition = window.scrollY;

    return {
        isHidden: false,
        isFixed: false,
        /**
         * Sets the fixed and hidden property values according to the window scroll position.
         * 
         * @since 1.0.0
         */
        setFixedOrHidden() {
            const currentScrollPosition = window.scrollY;
            this.isFixed = currentScrollPosition > 0;
            this.isHidden = prevScrollPosition < currentScrollPosition;
            prevScrollPosition = currentScrollPosition;
        }
    };
}
