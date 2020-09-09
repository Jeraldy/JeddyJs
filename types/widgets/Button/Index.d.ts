import ButtonType from "./ButtonType";
import '../../styles/button.css';
import Icon from "../Icon";
import * as CSS from '../../css/index';
declare const _default: ({ label, icon, type, onclick, style }: {
    label?: string;
    icon?: typeof Icon;
    type?: ButtonType;
    onclick?: () => void;
    style?: CSS.Properties;
}) => HTMLElement;
export default _default;
