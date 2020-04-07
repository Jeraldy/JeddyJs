"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../tikiti/index");
var index_2 = require("./index");
var Div_1 = require("../../core/Div");
var Size_1 = require("../../utils/Size");
var Colors_1 = require("../../utils/Colors");
var Example_1 = require("../Table/Example");
var Row_1 = require("../../layouts/Row");
var Image_1 = require("../../core/Image");
var TextView_1 = require("../../core/TextView");
var SilverDashboard = /** @class */ (function (_super) {
    __extends(SilverDashboard, _super);
    function SilverDashboard() {
        var _this = _super.call(this) || this;
        _this.state = { aMenu: '', aSubMenu: '', page: '' };
        return _this.connect();
    }
    SilverDashboard.prototype.activeSubmenu = function (menu, subMenu) {
        return this.state.aSubMenu == subMenu && this.state.aMenu == menu;
    };
    SilverDashboard.prototype.render = function () {
        var _this = this;
        return index_2.Scaffold({
            toolBar: Div_1.default({
                style: {
                    backgroundColor: '#00796b',
                    height: Size_1.default._43px,
                }
            }),
            sideMenu: index_2.SideMenu({
                headNode: Row_1.default({
                    align: Row_1.RowAlignment.SpaceBetween,
                    children: [
                        Image_1.default({
                            src: 'https://needsscosmeticsurgery.files.wordpress.com/2012/12/without-makeup-face.jpg',
                            style: {
                                height: Size_1.default._25px,
                                width: Size_1.default._25px,
                                borderRadius: '100%'
                            }
                        }),
                        Div_1.default({
                            children: [
                                TextView_1.default("deusjeraldy@gmail.com")
                            ]
                        })
                    ]
                }),
                headerStyle: {
                    backgroundColor: '#004d40',
                    color: Colors_1.default.white,
                    height: Size_1.default._20px,
                },
                menus: [
                    index_2.Menu({
                        icon: 'settings',
                        title: 'Settings',
                        open: this.state.aMenu == 'Settings',
                        onclick: function () { return _this.setEffect({ aMenu: 'Settings' }); },
                        menuItems: [
                            index_2.MenuItem({
                                icon: 'add',
                                title: 'Add',
                                active: this.activeSubmenu('Settings', 'Add'),
                                onclick: function () {
                                    _this.setState({ page: 'Settings Add' });
                                    _this.setEffect({ aSubMenu: 'Add' });
                                },
                            }),
                            index_2.MenuItem({
                                icon: 'share',
                                title: 'Share',
                                active: this.activeSubmenu('Settings', 'Share'),
                                onclick: function () {
                                    _this.setState({ page: 'Settings Share' });
                                    _this.setEffect({ aSubMenu: 'Share' });
                                }
                            })
                        ]
                    }),
                    index_2.Menu({
                        icon: 'home',
                        title: 'Shop',
                        open: this.state.aMenu == 'Shop',
                        onclick: function () { return _this.setEffect({ aMenu: 'Shop' }); },
                        menuItems: [
                            index_2.MenuItem({
                                icon: 'alarm',
                                title: 'Alarm',
                            })
                        ]
                    }),
                ]
            }),
            main: Div_1.default({
                children: [new Example_1.default()],
                style: {
                    marginLeft: '17em',
                    backgroundColor: Colors_1.default.body,
                    height: '90%',
                    padding: Size_1.default._2px
                }
            })
        });
    };
    return SilverDashboard;
}(index_1.StatefulWidget));
exports.default = SilverDashboard;
//# sourceMappingURL=Example.js.map