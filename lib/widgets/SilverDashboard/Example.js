"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../tikiti/index");
const index_2 = require("./index");
const Div_1 = require("../../core/Div");
const Size_1 = require("../../utils/Size");
const Colors_1 = require("../../utils/Colors");
const Example_1 = require("../Table/Example");
const Row_1 = require("../../layouts/Row");
const Img_1 = require("../../core/Img");
const TextView_1 = require("../../core/TextView");
class SilverDashboard extends index_1.StatefulWidget {
    constructor() {
        super();
        this.state = { aMenu: '', aSubMenu: '', page: '' };
        return this.connect();
    }
    activeSubmenu(menu, subMenu) {
        return this.state.aSubMenu == subMenu && this.state.aMenu == menu;
    }
    render() {
        return index_2.Scaffold({
            toolBar: Div_1.default({
                style: {
                    backgroundColor: '#00796b',
                    height: Size_1.default._43px
                }
            }),
            sideMenu: index_2.SideMenu({
                headNode: Row_1.default({
                    align: Row_1.RowAlignment.SpaceBetween,
                    children: [
                        Img_1.default({
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
                        onclick: () => this.setEffect({ aMenu: 'Settings' }),
                        menuItems: [
                            index_2.MenuItem({
                                icon: 'add',
                                title: 'Add',
                                active: this.activeSubmenu('Settings', 'Add'),
                                onclick: () => {
                                    this.setState({ page: 'Settings Add' });
                                    this.setEffect({ aSubMenu: 'Add' });
                                },
                            }),
                            index_2.MenuItem({
                                icon: 'share',
                                title: 'Share',
                                active: this.activeSubmenu('Settings', 'Share'),
                                onclick: () => {
                                    this.setState({ page: 'Settings Share' });
                                    this.setEffect({ aSubMenu: 'Share' });
                                }
                            })
                        ]
                    }),
                    index_2.Menu({
                        icon: 'home',
                        title: 'Shop',
                        open: this.state.aMenu == 'Shop',
                        onclick: () => this.setEffect({ aMenu: 'Shop' }),
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
    }
}
exports.default = SilverDashboard;
//# sourceMappingURL=Example.js.map