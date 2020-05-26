import Div from "../../dom/Div"

export default ({ grid, ...props }: { grid: any, props: any }) => {
    return Div({
        class: "mdc-layout-grid",
        children: [grid],
        ...props
    })
}