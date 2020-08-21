import ButtonType from "./ButtonType";
import '../../styles/button.css';
import * as CSS from '../../css/index';
declare const _default: ({ label, icon, type, onclick, style }: {
    label?: string;
    icon?: ({ name, style }: {
        name: import("../../utils/Icons").default;
        style?: CSS.Properties<string | 0>;
    }) => any;
    type?: ButtonType;
    onclick?: () => void;
    style?: CSS.Properties<string | 0>;
}) => any;
export default _default;
