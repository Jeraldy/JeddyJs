import Button from "../../core/Button"
import ButtonType from "./ButtonType"
import Div from "../../core/Div"
import Span from "../../core/Span"
import TextView from "../../core/TextView"
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
        className: type || ButtonType.UNELEVETED,
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
        Div({ className: 'mdc-button__ripple' }),
        Span({
            className: 'mdc-button__label',
            children: [TextView(label || '')]
        })
    ]
}