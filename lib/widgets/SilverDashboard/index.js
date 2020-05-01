"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Aside_1 = require("../../core/Aside");
var Header_1 = require("../../core/Header");
var TextView_1 = require("../../core/TextView");
var Nav_1 = require("../../core/Nav");
var Ul_1 = require("../../core/Ul");
var Li_1 = require("../../core/Li");
var A_1 = require("../../core/A");
var I_1 = require("../../core/I");
var Span_1 = require("../../core/Span");
var Section_1 = require("../../core/Section");
require("../../styles/silver.dashboard.css");
var SideMenu = function (_a) {
    var headNode = _a.headNode, menus = _a.menus, headerStyle = _a.headerStyle;
    return Aside_1.default({
        className: 'sidebar',
        children: [
            Header_1.default({
                children: [headNode],
                style: __assign(__assign({}, headerStyle), { width: '15em' })
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
var Menu = function (_a) {
    var icon = _a.icon, title = _a.title, menuItems = _a.menuItems, open = _a.open, onclick = _a.onclick;
    var style = open ? {
        transform: 'translateX(0)',
        transition: 'all 0.5s ease'
    } : {};
    var _menuItems = function () {
        return Ul_1.default({
            className: 'nav-flyout',
            children: menuItems,
            style: style
        });
    };
    return Li_1.default({
        children: [
            A_1.default({
                href: '#',
                children: [
                    I_1.default({ className: 'material-icons', children: [TextView_1.default(icon)] }),
                    Span_1.default({ children: [TextView_1.default(title)] })
                ],
                style: {
                    backgroundColor: open ? 'rgba(0, 0, 0, 0.9)' : ''
                }
            }),
            menuItems ? _menuItems() : null,
        ],
        onClick: function () { onclick(); } || function () { },
        style: {
            border: '1px solid black'
        }
    });
};
exports.Menu = Menu;
var MenuItem = function (_a) {
    var icon = _a.icon, title = _a.title, active = _a.active, onclick = _a.onclick;
    return Li_1.default({
        children: [
            A_1.default({
                href: '#',
                children: [
                    I_1.default({ className: 'material-icons', children: [TextView_1.default(icon)] }),
                    TextView_1.default(title)
                ],
                style: {
                    backgroundColor: active ? 'rgba(255, 255, 255, 0.05)' : ''
                }
            }),
        ],
        onClick: function () { onclick(); } || function () { },
        style: {
            border: '1px solid #19222A'
        }
    });
};
exports.MenuItem = MenuItem;
var Scaffold = function (_a) {
    var sideMenu = _a.sideMenu, toolBar = _a.toolBar, main = _a.main;
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