import Div from "../../dom/Div"
import Icon from "../Icon/index"
import TextField from "../TextField/index"
import Icons from "../../utils/Icons"
import { NodeArgs } from '../../core/Args';

export interface args extends NodeArgs {
  value?: string,
  placeholder?: string,
  autocomplete?: string,
  ariaLabel?: string
}

export default (args?: args) => {
    return Div({
        class: 'search-container',
        style: {
            float: 'right',
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "4px",
            height: "30px"
        },
        children: [
            Icon({
                name: Icons.search,
                style: {
                    position: 'relative',
                    top: '5px',
                    color: '#ccc'
                }
            }),
            TextField({
                placeholder: "Search",
                style: {
                    border: 'hidden',
                    height: '10px',
                    position: 'relative',
                    top: '-5px'
                },
                ...args
            }),
        ]
    })
}