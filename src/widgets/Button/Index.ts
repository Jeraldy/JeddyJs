import Button from "../../core/Button"
import ButtonTypes from "./ButtonTypes"
import Div from "../../core/Div"
import Span from "../../core/Span"
import TextView from "../../core/TextView"
import '../../styles/button.css';

type buttonType = ButtonTypes.FLAT | ButtonTypes.OUTLINED
    | ButtonTypes.RAISED | ButtonTypes.UNELEVETED

export default ({ label, icon, type, onclick }:
    {
        label?: string, icon?: string,
        type?: buttonType, onclick?: (e: Event) => void
    }) => {
    return Button({
        class: type || ButtonTypes.UNELEVETED,
        children: [
            Div({ class: 'mdc-button__ripple' }),
            Span({
                class: 'mdc-button__label',
                children: [
                    TextView(label || '')
                ]
            })
        ],
        onclick: onclick || function () { }
    })
}