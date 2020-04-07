import I from "../../core/I"
import TextView from "../../core/TextView"

export default (props: any) => {
    //@ts-ignore
    const { name, ...other } = { ...props }
    return I({
        class: 'material-icons',
        children: [TextView(name)],
        ...other,
    })
}