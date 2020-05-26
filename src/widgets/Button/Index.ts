import Button from "../../dom/Button"
import ButtonType from "./ButtonType"
import Div from "../../dom/Div"
import Span from "../../dom/Span"
import TextView from "../../dom/TextView"
import '../../styles/button.css';
import Icon from "../Icon"
import * as CSS from '../../css/index';

export default ({ label, icon, type, onclick, style }:
    {
        label?: string, icon?: typeof Icon,
        type?: ButtonType, onclick?: () => void,
        style?: CSS.Properties
    }) => {

    return Button({
        class: type || ButtonType.UNELEVETED,
        children: buttonChidren(type, label),
        onClick: onclick || function () { },
        style
    })
}

function buttonChidren(type: ButtonType, label: string) {
    if (type === ButtonType.DEFAULT) {
        return [TextView(label || '')]
    }
    return [
        Div({ class: 'mdc-button__ripple' }),
        Span({
            class: 'mdc-button__label',
            children: [TextView(label || '')]
        })
    ]
}