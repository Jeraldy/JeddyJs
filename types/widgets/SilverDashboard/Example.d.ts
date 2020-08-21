export default SilverDashboard;
declare class SilverDashboard {
    state: {
        aMenu: string;
        aSubMenu: string;
        page: string;
    };
    activeSubmenu(menu: any, subMenu: any): boolean;
    render(): HTMLElement;
}
