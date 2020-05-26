import AreaInput from "../../dom/TextArea"

const style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius:'5px'
}

export default (props: any = {}) => {
    props.style = { ...style, ...props.style }
    return AreaInput({
        ...props
    })
}