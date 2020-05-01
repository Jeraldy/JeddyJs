import I from "../../core/I"
import TextView from "../../core/TextView"
import Icons from "../../utils/Icons"
import * as CSS from "../../css";

export default ({ name, style }: { name: Icons, style?: CSS.Properties }) => {
    return I({
        className: 'material-icons',
        children: [TextView(name)],
        style,
    })
}