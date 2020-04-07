import DropDown from "../../core/DropDown"

const style = {
    minWidth: "150px",
    minHeight: "30px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    outline: 'none',
    backgroundColor: '#E6E6E6',
}

export default (props: any = {}) => {
    props.style = { ...style, ...props.style }
    return DropDown({
        ...props
    })
}
