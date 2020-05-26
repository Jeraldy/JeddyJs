import Button from "../../dom/Button"
import TextView from "../../dom/TextView"
import '../../styles/action.button.css';

export default ({ icon, props, onclick }: { icon: string, props?: any, onclick: () => void }) => {
    return Button({
        className: "mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded",
        children: [
            TextView(icon)
        ],
        onClick: onclick || function () { },
        ...props
    })
}

