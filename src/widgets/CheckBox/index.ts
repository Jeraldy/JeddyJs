import CheckBox from "../../core/CheckBox"

const style = {
    minWidth: "20px",
    minHeight: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    outline: 'none',
}

export default (props: any = {}) => {
    props.style = { ...style, ...props.style }
    return CheckBox({
        ...props
    })
}
