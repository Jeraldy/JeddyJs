"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scaffold = exports.MenuItem = exports.Menu = exports.SideMenu = void 0;
const Aside_1 = require("../../dom/Aside");
const Header_1 = require("../../dom/Header");
const TextView_1 = require("../../dom/TextView");
const Nav_1 = require("../../dom/Nav");
const Ul_1 = require("../../dom/Ul");
const Li_1 = require("../../dom/Li");
const A_1 = require("../../dom/A");
const I_1 = require("../../dom/I");
const Span_1 = require("../../dom/Span");
const Section_1 = require("../../dom/Section");
require("../../styles/silver.dashboard.css");
const SideMenu = ({ headNode, menus, headerStyle }) => {
    return Aside_1.default({
        class: 'sidebar',
        children: [
            Header_1.default({
                children: [headNode],
                style: Object.assign(Object.assign({}, headerStyle), { width: '15em' })
            }),
            Nav_1.default({
                class: 'sidebar-nav',
                children: [
                    Ul_1.default({ children: menus })
                ]
            })
        ]
    });
};
exports.SideMenu = SideMenu;
const Menu = ({ icon, title, menuItems, open, onclick }) => {
    const style = open ? {
        transform: 'translateX(0)',
        transition: 'all 0.5s ease'
    } : {};
    const _menuItems = () => {
        return Ul_1.default({
            class: 'nav-flyout',
            children: menuItems,
            style
        });
    };
    return Li_1.default({
        children: [
            A_1.default({
                href: '#',
                children: [
                    I_1.default({
                        class: 'material-icons',
                        children: [TextView_1.default(icon)]
                    }),
                    Span_1.default({ children: [TextView_1.default(title)] })
                ],
                style: {
                    backgroundColor: open ? 'rgba(0, 0, 0, 0.9)' : ''
                }
            }),
            menuItems ? _menuItems() : null,
        ],
        onClick: onclick ? () => onclick() : () => { },
        style: {
            border: '1px solid black'
        }
    });
};
exports.Menu = Menu;
const MenuItem = ({ icon, title, active, onclick }) => {
    return Li_1.default({
        children: [
            A_1.default({
                href: '#',
                children: [
                    I_1.default({
                        class: 'material-icons',
                        children: [TextView_1.default(icon)]
                    }),
                    TextView_1.default(title)
                ],
                style: {
                    backgroundColor: active ? 'rgba(255, 255, 255, 0.05)' : ''
                }
            }),
        ],
        onClick: onclick ? () => onclick() : () => { },
        style: {
            border: '1px solid #19222A'
        }
    });
};
exports.MenuItem = MenuItem;
const Scaffold = ({ sideMenu, toolBar, main }) => {
    return Section_1.default({
        class: 'app',
        children: [
            toolBar,
            sideMenu,
            main
        ]
    });
};
exports.Scaffold = Scaffold;
//# sourceMappingURL=index.js.map