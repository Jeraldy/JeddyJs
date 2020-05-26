import Aside from '../../dom/Aside';
import Header from '../../dom/Header';
import TextView from '../../dom/TextView';
import Nav from '../../dom/Nav';
import UnorderedList from '../../dom/Ul';
import ListItem from '../../dom/Li';
import Link from '../../dom/A';
import I from '../../dom/I';
import Span from '../../dom/Span';
import Section from '../../dom/Section';
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
        class: 'sidebar',
        children: [
            Header({
                children: [headNode],
                style: { ...headerStyle, width: '15em' }
            }),
            Nav({
                class: 'sidebar-nav',
                children: [
                    UnorderedList({ children: menus })
                ]
            })
        ]
    })
}

const Menu = ({
    icon,
    title,
    menuItems,
    open,
    onclick
}: {
    icon: '',
    title: '',
    menuItems: [],
    open: false,
    onclick: () => void
}) => {

    const style = open ? {
        transform: 'translateX(0)',
        transition: 'all 0.5s ease'
    } : {}

    const _menuItems = () => {
        return UnorderedList({
            class: 'nav-flyout',
            children: menuItems,
            style
        })
    }

    return ListItem({
        children: [
            Link({
                href: '#',
                children: [
                    I({
                        class: 'material-icons',
                        children: [TextView(icon)]
                    }),
                    Span({ children: [TextView(title)] })
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
    })
}

const MenuItem = ({ icon, title, active, onclick }:
    { icon: '', title: '', active: false, onclick: () => void }) => {
    return ListItem({
        children: [
            Link({
                href: '#',
                children: [
                    I({
                        class: 'material-icons',
                        children: [TextView(icon)]
                    }),
                    TextView(title)
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
    })
}

const Scaffold = ({ sideMenu, toolBar, main }:
     { sideMenu: any, toolBar: any, main: any }) => {
    return Section({
        class: 'app',
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