import Div from "../core/Div"
import Row from "./Row"
import Size from "../utils/Size"
import Center from "./Center"
import TextView from "../core/TextView"
import Colors from "../utils/Colors"
import Column from "./Column"
import H5 from "../core/H5"
import Divider from "../widgets/Divider/index"
import Card from "../widgets/Card/index"
import Button from "../widgets/Button/Index"
import ButtonType from "../widgets/Button/ButtonType"
import ActionButton from "../widgets/Button/ActionButton"
import RowAlignment from "./RowAlignment"

export default ({ child, activeStep, callBack, steps }:
    {
        child: any,
        activeStep: number,
        callBack: (activeStep: number) => void,
        steps: Array<string>
    }) => {

    return Card({
        children: [
            Column({
                children: [
                    Row({
                        children: steps.map((title, index) => Step(title, index + 1, activeStep, callBack)),
                        align: RowAlignment.SpaceEvenly
                    }),
                    Divider(),
                    Div({ children: [child] }),
                    Divider(),
                    Div({
                        children: [
                            Row({
                                align: RowAlignment.SpaceBetween,
                                children: [
                                    ActionButton({
                                        icon: 'keyboard_arrow_left',
                                        onclick: () => activeStep == 1 ? null : callBack(activeStep - 1)
                                    }),
                                    Button({
                                        type: ButtonType.RAISED, label: 'NEXT',
                                        onclick: () => activeStep == steps.length ? null : callBack(activeStep + 1)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ],
        style: {
            padding: Size._8px
        }
    })
}


function Step(title: string, index: number, activeStep: number, callBack: (activeStep: number) => void) {
    return Row({
        align: RowAlignment.Start,
        children: [
            Div({
                style: {
                    height: activeStep == index ? Size._30px : Size._25px,
                    width: activeStep == index ? Size._30px : Size._25px,
                    borderRadius: '100%',
                    backgroundColor: '#FF6600',
                    border: '2px solid #FF6600',
                    color: Colors.white,
                    cursor: 'pointer'
                },
                children: [
                    Center({
                        child: TextView(`${index}`)
                    })
                ],
                onclick: () => callBack(index)
            }),
            Div({
                children: [
                    H5({ children: [TextView(title)], })
                ],
                style: {
                    color: activeStep == index ? Colors.black : '#ccc',
                    margin: Size._10px,
                    marginRight: Size._0px,
                }
            }),
        ]
    })
}
