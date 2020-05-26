import Div from "../../dom/Div"
import EdgeInsets from "./EdgeInsets";
import * as CSS from "../../css/index";

//type EdgeInsets = _EdgeInsets
export default ({
    child, 
    padding
}: {
    child: HTMLElement | Text,
    padding: typeof EdgeInsets
}) => {
    return Div({ 
        children: [child || null], 
        //style: padding
    })
}