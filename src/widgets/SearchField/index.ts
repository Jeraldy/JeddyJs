import Div from "../../core/Div"
import Icon from "../Icon/index"
import TextField from "../TextField/index"

export default () => {
    return Div({
        class: 'search-container',
        style: {
            float: 'right',
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "4px",
            paddingLeft: "8px",
            marginBottom: "5px",
            height: "30px"
        },
        children: [
            Icon({
                name: 'search',
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
            }),
        ]
    })
}