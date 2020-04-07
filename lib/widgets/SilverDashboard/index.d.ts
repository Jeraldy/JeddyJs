import '../../styles/silver.dashboard.css';
declare const SideMenu: ({ headNode, menus, headerStyle }: {
    headNode: any;
    menus: [];
    headerStyle: {};
}) => HTMLElement;
declare const Menu: ({ icon, title, menuItems, open, onclick }: {
    icon: "";
    title: "";
    menuItems: [];
    open: false;
    onclick: () => void;
}) => HTMLElement;
declare const MenuItem: ({ icon, title, active, onclick }: {
    icon: "";
    title: "";
    active: false;
    onclick: () => void;
}) => HTMLElement;
declare const Scaffold: ({ sideMenu, toolBar, main }: {
    sideMenu: any;
    toolBar: any;
    main: any;
}) => HTMLElement;
export { SideMenu, Menu, MenuItem, Scaffold };
