import H1 from "../../core/H1"
import TextView from "../../core/TextView"
import Search from "./Search"
import Row from "../../layouts/Row"
import Size from "../../utils/Size"
import Div from "../../core/Div"
import Center from "../../layouts/Center"
import Colors from "../../utils/Colors"
import RowAlignment from "../../layouts/RowAlignment"

export default (props: any) => {

    const actions = props.actions
    const title = props.title || ''
    delete props.actions
    delete props.title

    return Div({
        children: [
            Row({
                align: RowAlignment.SpaceBetween,
                children: [
                    Div({
                        children: [
                            Center({
                                child: H1({
                                    children: [
                                        TextView(title)
                                    ],
                                    style:{
                                        paddingLeft: Size._16px,
                                        color: 'gray'
                                    }
                                })
                            })
                        ]
                    }),
                    Row({
                        align: RowAlignment.End,
                        children: [
                             Search(props),
                            ...actions
                        ]
                    })
                ]
            })
        ],
        style: {
            paddingTop: Size._8px
        }
    })
}