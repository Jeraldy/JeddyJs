import Button from "../../core/Button"
import TextView from "../../core/TextView"
import '../../styles/action.button.css';

export default ({ icon, props, onclick }: { icon: string, props?: any, onclick: () => void }) => {
    return Button({
        class: "mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded",
        children: [
            TextView(icon)
        ],
        onclick: onclick || function () { },
        ...props
    })
}

