"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Aside_1 = require("../../core/Aside");
const Header_1 = require("../../core/Header");
const TextView_1 = require("../../core/TextView");
const Nav_1 = require("../../core/Nav");
const Ul_1 = require("../../core/Ul");
const Li_1 = require("../../core/Li");
const A_1 = require("../../core/A");
const I_1 = require("../../core/I");
const Span_1 = require("../../core/Span");
const Section_1 = require("../../core/Section");
require("../../styles/silver.dashboard.css");
const SideMenu = ({ headNode, menus, headerStyle }) => {
    return Aside_1.default({
        className: 'sidebar',
        children: [
            Header_1.default({
                children: [headNode],
                style: Object.assign(Object.assign({}, headerStyle), { width: '15em' })
            }),
            Nav_1.default({
                className: 'sidebar-nav',
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
            className: 'nav-flyout',
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
                        className: 'material-icons',
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
                        className: 'material-icons',
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
        className: 'app',
        children: [
            toolBar,
            sideMenu,
            main
        ]
    });
};
exports.Scaffold = Scaffold;
//# sourceMappingURL=index.js.map