import '../../styles/silver.dashboard.css';
declare const SideMenu: ({ headNode, menus, headerStyle }: {
    headNode: any;
    menus: [];
    headerStyle: {};
}) => any;
declare const Menu: ({ icon, title, menuItems, open, onclick }: {
    icon: "";
    title: "";
    menuItems: [];
    open: false;
    onclick: () => void;
}) => any;
declare const MenuItem: ({ icon, title, active, onclick }: {
    icon: "";
    title: "";
    active: false;
    onclick: () => void;
}) => any;
declare const Scaffold: ({ sideMenu, toolBar, main }: {
    sideMenu: any;
    toolBar: any;
    main: any;
}) => any;
export { SideMenu, Menu, MenuItem, Scaffold };
