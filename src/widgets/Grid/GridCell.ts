import Div from "../../dom/Div"

export default ({ children,...props }: { children: Array<any>, props: any }) => {
    return Div({
        class: "mdc-layout-grid__cell",
        children,
        ...props
    })
}