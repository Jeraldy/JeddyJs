import Button from "../../core/Button"
import ButtonType from "./ButtonType"
import Div from "../../core/Div"
import Span from "../../core/Span"
import TextView from "../../core/TextView"
import '../../styles/button.css';
import Icon from "../Icon"

// type buttonType = ButtonTypes.FLAT | ButtonTypes.OUTLINED
//     | ButtonTypes.RAISED | ButtonTypes.UNELEVETED

export default ({ label, icon, type, onclick }:
    {
        label?: string, icon?: typeof Icon,
        type?: ButtonType, onclick?: (e: Event) => void
    }) => {

    return Button({
        class: type || ButtonType.UNELEVETED,
        children: [
            Div({ class: 'mdc-button__ripple' }),
            Span({
                class: 'mdc-button__label',
                children: [TextView(label || '')]
            })
        ],
        onclick: onclick || function () { }
    })
}