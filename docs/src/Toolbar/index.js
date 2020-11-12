import Div from "jeddy/dom/Div";
import Card from "jeddy/widgets/Card";
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";
import Center from "jeddy/layouts/Center";
import { connect, dispatch } from "jeddy/jredux";
import Img from "jeddy/dom/Img";
import LOGO from "../Assets/logo.png";
console.log(LOGO)
import { actions } from "../reducers/domElementsReducer";
const {  toggleLandingPage } = actions
const TopBar = ({ }) => {
    return Card({
        children: [
            Row({
                children: [
                    Row({
                        children: [
                            Div({
                                children: [
                                    Center({
                                        child: Img({
                                            height: "40px",
                                            width: "30px",
                                            src: `${LOGO}`,
                                            onClick: () => dispatch(toggleLandingPage())
                                        })
                                    })
                                ],
                                style: {
                                    padding: "10px",
                                    cursor: "pointer"
                                },
                            }),
                            Div({
                                children: [
                                    Center({ child: "Jeddy" })
                                ],
                                style: {
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    padding: "10px",
                                    cursor: "pointer"
                                },
                                onClick: () => dispatch(toggleLandingPage())
                            }),
                        ]
                    }),
                    Div({
                        children: [
                            Center({
                                child: Div({
                                    children: [
                                        Center({
                                            child: Img({
                                                src: "data:image/png;base64,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",
                                                height: "40px",
                                                width: "40px"
                                            })
                                        })
                                    ],
                                    style: {
                                        height: "22px",
                                        width: "22px",
                                        padding: "2px",
                                        cursor: "pointer",
                                    }
                                })
                            })
                        ],
                        style: {
                            paddingRight: "10px"
                        },
                        onClick: () => window.location.href = "https://github.com/Jeraldy/JeddyJs"
                    })
                ],
                align: RowAlign.SpaceBetween,
                wrapContent: false
            })
        ],
        style: {
            height: '60px',
            position: "fixed",
            width: "100%",
        //    top: "0",
            zIndex: "1"
        }
    })
}

const mapStateToProps = (state) => {
    return { state }
}
export default connect(mapStateToProps)(TopBar)