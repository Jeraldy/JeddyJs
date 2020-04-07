import Div from "../../core/Div"
import ActionButton from "../Button/ActionButton"
import Button from "../../core/Button"
import Link from "../../core/Link"
import TextView from "../../core/TextView"
import '../../styles/action.menu.css';
import Size from "../../utils/Size"

export default (id: string) => {
    return Div({
        class: "dropdown",
        style:{
            float:'left',
            zIndex: Size._1000px
        },
        children: [
            Button({ class: "dropbtn", }),
            Div({
                class: "dropdown-content",
                children: [
                    Link({ children: [TextView("Link 1")] }),
                    Link({ children: [TextView("Link 2")] }),
                    Link({ children: [TextView("Link 3")] })
                ]
            })
        ]
    })
}