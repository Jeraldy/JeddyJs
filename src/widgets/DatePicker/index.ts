import DatePicker from "../../core/DatePicker";

const style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius:'5px',
    padding:'8px'
}

export default (props: any = {}) => {
    props.style = { ...style, ...props.style }
    return DatePicker({ ...props })
}