import React from 'react';
import styles from '../../CssModules/Main.module.css';
class Main extends React.Component {
    render() {
        window.addEventListener('scroll', onScroll);
        function onScroll() {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
            var element = document.getElementById('nav_block');
            if (windowRelativeBottom < 1145) {
                element === null || element === void 0 ? void 0 : element.setAttribute('style', 'height: 35px');
            }
            else {
                element === null || element === void 0 ? void 0 : element.setAttribute('style', 'height: 55px');
            }
        }
        return (React.createElement("div", { className: styles.main_style },
            React.createElement("div", { id: 'nav_block', className: styles.nav_block },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "/" },
                            React.createElement("div", { className: styles.elem_list_logo }))),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/", className: styles.elem_list_home }, " Home")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/", className: styles.elem_list_catalog }, "Catalog")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/", className: styles.elem_list_about }, "About")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/", className: styles.elem_list_help }, "Help"))))));
    }
}
export default Main;
