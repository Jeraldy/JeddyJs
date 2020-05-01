import { StatefulWidget } from "../../tikiti/index";
import { SideMenu, Menu, MenuItem, Scaffold } from "./index";
import Div from "../../core/Div";
import Size from "../../utils/Size";
import Colors from "../../utils/Colors";
import TableExample from "../Table/Example";
import Row, { RowAlignment } from "../../layouts/Row";
import Image from "../../core/Img";
import TextView from "../../core/TextView";

class SilverDashboard extends StatefulWidget {
    constructor() {
        super()
        this.state = { aMenu: '', aSubMenu: '', page: '' }
        return this.connect()
    }

    activeSubmenu(menu, subMenu) {
        return this.state.aSubMenu == subMenu && this.state.aMenu == menu
    }

    render() {
        return Scaffold({
            toolBar: Div({
                style: {
                    backgroundColor: '#00796b',
                    height: Size._43px
                }
            }),
            sideMenu: SideMenu({
                headNode: Row({
                    align: RowAlignment.SpaceBetween,
                    children: [
                        Image({
                            src: 'https://needsscosmeticsurgery.files.wordpress.com/2012/12/without-makeup-face.jpg',
                            style: {
                                height: Size._25px,
                                width: Size._25px,
                                borderRadius: '100%'
                            }
                        }),
                        Div({
                            children:[
                                TextView("deusjeraldy@gmail.com")
                            ]
                        })
                    ]
                }),
                headerStyle: {
                    backgroundColor: '#004d40',
                    color: Colors.white,
                    height: Size._20px,
                },
                menus: [
                    Menu({
                        icon: 'settings',
                        title: 'Settings',
                        open: this.state.aMenu == 'Settings',
                        onclick: () => this.setEffect({ aMenu: 'Settings' }),
                        menuItems: [
                            MenuItem({
                                icon: 'add',
                                title: 'Add',
                                active: this.activeSubmenu('Settings', 'Add'),
                                onclick: () => {
                                    this.setState({ page: 'Settings Add' })
                                    this.setEffect({ aSubMenu: 'Add' })
                                },
                            }),
                            MenuItem({
                                icon: 'share',
                                title: 'Share',
                                active: this.activeSubmenu('Settings', 'Share'),
                                onclick: () => {
                                    this.setState({ page: 'Settings Share' })
                                    this.setEffect({ aSubMenu: 'Share' })
                                }
                            })
                        ]
                    }),
                    Menu({
                        icon: 'home',
                        title: 'Shop',
                        open: this.state.aMenu == 'Shop',
                        onclick: () => this.setEffect({ aMenu: 'Shop' }),
                        menuItems: [
                            MenuItem({
                                icon: 'alarm',
                                title: 'Alarm',
                            })
                        ]
                    }),
                ]
            }),
            main: Div({
                children: [new TableExample()],
                style: {
                    marginLeft: '17em',
                    backgroundColor: Colors.body,
                    height: '90%',
                    padding: Size._2px
                }
            })
        })
    }
}

export default SilverDashboard;