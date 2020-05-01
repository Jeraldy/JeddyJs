import Div from "../../core/Div"

export default ({ cells, ...props }: { cells: Array<any>, props: any }) => {
    return Div({
        className: "mdc-layout-grid__inner",
        children: cells || [],
        ...props
    })
}