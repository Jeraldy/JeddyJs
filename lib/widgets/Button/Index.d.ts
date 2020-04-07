import ButtonTypes from "./ButtonTypes";
import '../../styles/button.css';
declare const _default: ({ label, icon, type, onclick }: {
    label?: string;
    icon?: string;
    type?: ButtonTypes;
    onclick?: (e: Event) => void;
}) => HTMLElement;
export default _default;
