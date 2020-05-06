import Icons from "../../utils/Icons";
import * as CSS from "../../css";
declare const Collapsible: ({ clickCallBack, label, icon, children, stateKey, style, activeBarColor }: {
    clickCallBack: (stateKey: string) => void;
    label?: string;
    icon?: {
        icon: Icons;
        style: CSS.Properties<string | 0>;
    };
    children?: HTMLElement[];
    stateKey: string;
    style?: CSS.Properties<string | 0>;
    activeBarColor?: string;
}) => HTMLElement;
export default Collapsible;
