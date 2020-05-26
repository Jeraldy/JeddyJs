import I from "../../dom/I"
import TextView from "../../dom/TextView"
import Icons from "../../utils/Icons"
import * as CSS from "../../css";

export default ({ name, style }: { name: Icons, style?: CSS.Properties }) => {
    return I({
        class: 'material-icons',
        children: [TextView(name)],
        style,
    })
}