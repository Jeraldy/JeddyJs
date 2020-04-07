import Div from "../../core/Div"
import TextField from "../TextField/index"
import TextView from "../../core/TextView"
import Span from "../../core/Span"
import Size from "../../utils/Size"

const style = {
    fontWeight: 'bold',
    padding: Size._9px,
}

export default ({ currency = 'TZS', props }: { currency: string, props: any }) => {
    let { value = '0', ...rest } = { ...props }
    return Div({
        children: [
            Span({ children: [TextView(currency)], style }),
            TextField({
                ...rest, value: AddSeparator(value),
                style: {
                    border: '1px solid white',
                    borderRadius: '0px',
                    marginTop: Size._1px
                }
            })
        ],
        style: {
            backgroundColor: '#ccc',
            borderRadius: Size._5px,
            paddingRight: Size._1px,
            height: Size._36px
        }
    })
}

function AddSeparator(value: any) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}
