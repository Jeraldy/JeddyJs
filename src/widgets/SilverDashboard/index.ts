import Aside from '../../core/Aside';
import Header from '../../core/Header';
import TextView from '../../core/TextView';
import Nav from '../../core/Nav';
import UnorderedList from '../../core/Ul';
import ListItem from '../../core/Li';
import Link from '../../core/A';
import I from '../../core/I';
import Span from '../../core/Span';
import Section from '../../core/Section';
import '../../styles/silver.dashboard.css';

const SideMenu = (
    {
        headNode,
        menus,
        headerStyle
    }: {
        headNode: any,
        menus: [],
        headerStyle: {}
    }) => {
    return Aside({
        className: 'sidebar',
        children: [
            Header({
                children: [headNode],
                style: { ...headerStyle, width: '15em' }
            }),
            Nav({
                className: 'sidebar-nav',
                children: [
                    UnorderedList({ children: menus })
                ]
            })
        ]
    })
}

const Menu = ({ icon, title, menuItems, open, onclick }
    : { icon: '', title: '', menuItems: [], open: false, onclick: () => void }) => {

    const style = open ? {
        transform: 'translateX(0)',
        transition: 'all 0.5s ease'
    } : {}

    const _menuItems = () => {
        return UnorderedList({
            className: 'nav-flyout',
            children: menuItems,
            style
        })
    }

    return ListItem({
        children: [
            Link({
                href: '#',
                children: [
                    I({ className: 'material-icons', children: [TextView(icon)] }),
                    Span({ children: [TextView(title)] })
                ],
                style: {
                    backgroundColor: open ? 'rgba(0, 0, 0, 0.9)' : ''
                }
            }),
            menuItems ? _menuItems() : null,
        ],
        onClick: function () { onclick() } || function () { },
        style: {
            border: '1px solid black'
        }
    })
}

const MenuItem = ({ icon, title, active, onclick }:
    { icon: '', title: '', active: false, onclick: () => void }) => {
    return ListItem({
        children: [
            Link({
                href: '#',
                children: [
                    I({ className: 'material-icons', children: [TextView(icon)] }),
                    TextView(title)
                ],
                style: {
                    backgroundColor: active ? 'rgba(255, 255, 255, 0.05)' : ''
                }
            }),
        ],
        onClick: function () { onclick() } || function () { },
        style: {
            border: '1px solid #19222A'
        }
    })
}

const Scaffold = ({ sideMenu, toolBar, main }: { sideMenu: any, toolBar: any, main: any }) => {
    return Section({
        className: 'app',
        children: [
            toolBar,
            sideMenu,
            main
        ]
    })
}

export {
    SideMenu,
    Menu,
    MenuItem,
    Scaffold
};