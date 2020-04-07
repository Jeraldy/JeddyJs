import Div from "../core/Div"
import Column from "./Column"
import Row from "./Row"

const style = {
    height: '100%',
    width: '100%',
    border:'2px solid red'
}

export default ({ top, left, right, bottom, center }:
    { top?: any, bottom?: any, left?: any, right?: any, center: any }) => {

    return Div({
        children: [
            Column({
                children: [
                    top || null,
                    Row({
                        children: [
                            left || null,
                            center || null,
                            right || null
                        ]
                    }),
                    bottom || null
                ]
            })
        ],
        style
    })

}