import Div from "../../core/Div"

export default (props: any = {}) => {
    return Div({
        ...props,
        style: {
            background: '#fff',
            borderRadius: "2px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        }
    })
}