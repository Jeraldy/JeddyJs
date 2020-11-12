import Div from "jeddy/dom/Div"
import Center from "jeddy/layouts/Center";
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";
import Card from "jeddy/widgets/Card";
import { actions } from "../reducers/domElementsReducer";
import { dispatch, connect } from "jeddy/jredux";
import Span from "jeddy/dom/Span";
import Device from "jeddy/utils/Device";

const { toggleLandingPage } = actions

const Landing = ({ device }) => {
    const isSmall = (device <= Device.MOBILE && device != 0)
    return Div({
        children: [
            Center({
                child: Div({
                    children: [
                        Row({
                            children: [
                                Div({
                                    children: [
                                        Div({
                                            children: ["Jeddy",
                                                Span({
                                                    children: [".js"],
                                                    style: {
                                                        color: "white",
                                                        backgroundColor: "#f3e5f5",
                                                        borderRadius: "4px",
                                                        padding: "2px",
                                                    }
                                                })
                                            ],
                                            style: {
                                                fontWeight: "bold",
                                                marginBottom: "20px",
                                                color: "#42a5f5"
                                            }
                                        }),
                                        Row({
                                            children: [
                                                Div({
                                                    children: [
                                                        "Create Web UIs using pure javascript (No HTML Tags). Jeddy  helps you write clean, reusable and maintainable code."
                                                    ],
                                                    style: {
                                                        fontSize: "18px",
                                                        width: isSmall ? "" : "500px",
                                                        textAlign: "center",
                                                        marginBottom: "20px"
                                                    }
                                                })
                                            ],
                                            align: RowAlign.Center
                                        }),
                                        Div({
                                            children: ["Reactive Web UI"]
                                        }),
                                        Div({
                                            children: ["Development Framework"]
                                        })
                                    ],
                                    style: {
                                        fontSize: isSmall ? "40px" : "70px",
                                        color: "black",
                                        textAlign: "center"
                                    }
                                })
                            ],
                        }),
                        Div({
                            children: [
                                Row({
                                    children: [
                                        Card({
                                            style: {
                                                height: isSmall ? "30px" : "50px",
                                                width: isSmall ? "150px" : "200px",
                                                borderRadius: "20px",
                                                border: "2px solid #B1FF7C",
                                                cursor: "pointer"
                                            },
                                            children: [
                                                Center({
                                                    child: "GIT HUB"
                                                })
                                            ],
                                            onClick: () => {
                                                let win = window.open("https://github.com/Jeraldy/JeddyJs", '_blank');
                                                win.focus();
                                            }
                                        }),
                                        Div({ style: { width: isSmall ? "10px" : "0px" } }),
                                        Card({
                                            style: {
                                                height: isSmall ? "30px" : "50px",
                                                width: isSmall ? "150px" : "200px",
                                                borderRadius: "20px",
                                                backgroundColor: "#42a5f5",
                                                border: "2px solid #42a5f5",
                                                color: "white",
                                                cursor: "pointer"
                                            },
                                            children: [
                                                Center({
                                                    child: "GET STARTED"
                                                })
                                            ],
                                            onClick: () => dispatch(toggleLandingPage()),
                                            role: "button"
                                        })
                                    ],
                                    align: RowAlign.SpaceEvenly
                                })
                            ],
                            style: {
                                marginTop: "50px"
                            }
                        })
                    ]
                })
            })
        ],
        style: {
            padding: "50px",
            paddingTop: "90px"
        }
    })
}

const s = (state) => ({ ...state.RMediaQuery })
export default connect(s)(Landing);