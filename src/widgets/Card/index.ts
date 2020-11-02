import Div from "../../dom/Div"
import { NodeArgs } from "../../core/CommonArgs";

export interface args extends NodeArgs { }

export default (args?: args) => {
    const style = {
        background: '#fff',
        borderRadius: "2px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        ...args.style
    }
    delete args.style
    return Div({ style,...args })
}