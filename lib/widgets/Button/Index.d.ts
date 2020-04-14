import ButtonType from "./ButtonType";
import '../../styles/button.css';
import * as CSS from '../../css/index';
declare const _default: ({ label, icon, type, onclick, style }: {
    label?: string;
    icon?: (props: any) => HTMLElement;
    type?: ButtonType;
    onclick?: (e: Event) => void;
    style?: CSS.Properties<string | 0>;
}) => HTMLElement;
export default _default;
