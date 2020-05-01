import Div from "../../core/Div"

export default ({ children,...props }: { children: Array<any>, props: any }) => {
    return Div({
        className: "mdc-layout-grid__cell",
        children,
        ...props
    })
}