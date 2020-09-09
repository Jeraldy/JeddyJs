import Icons from "../../utils/Icons";
import * as CSS from "../../css";
declare const Collapsible: ({ clickCallBack, label, icon, children, stateKey, style, activeBarColor }: {
    clickCallBack: (stateKey: string) => void;
    label?: string;
    icon?: {
        icon: Icons;
        style: CSS.Properties;
    };
    children?: Array<HTMLElement>;
    stateKey: string;
    style?: CSS.Properties;
    activeBarColor?: CSS.Color;
}) => HTMLElement;
export default Collapsible;
