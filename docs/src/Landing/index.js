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
                                                        "Create Web UIs using pure javascript (No HTML Tags). It helps you write clean, reusable and maintainable code."
                                                    ],
                                                    style: {
                                                        fontSize: "18px",
                                                        //width: "500px",
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
                                        fontSize: (device <= Device.MOBILE && device != 0) ? "40px" : "70px",
                                        color: "black",
                                        textAlign: "center"
                                    }
                                })
                            ],
                        }),
                        // Div({
                        //     children: [
                        //         Row({
                        //             children: [
                        //                 Card({
                        //                     style: {
                        //                         height: "50px",
                        //                         width: "200px",
                        //                         borderRadius: "20px",
                        //                         border: "2px solid #B1FF7C",
                        //                         cursor: "pointer"
                        //                     },
                        //                     children: [
                        //                         Center({
                        //                             child: "GIT HUB"
                        //                         })
                        //                     ],
                        //                     onClick: () => {
                        //                         let win = window.open("https://github.com/Jeraldy/JeddyJs", '_blank');
                        //                         win.focus();
                        //                     }
                        //                 }),
                        //                 Card({
                        //                     style: {
                        //                         height: "50px",
                        //                         width: "200px",
                        //                         borderRadius: "20px",
                        //                         backgroundColor: "#42a5f5",
                        //                         color: "white",
                        //                         cursor: "pointer"
                        //                     },
                        //                     children: [
                        //                         Center({
                        //                             child: "GET STARTED"
                        //                         })
                        //                     ],
                        //                     onClick: () => dispatch(toggleLandingPage())
                        //                 })
                        //             ],
                        //             align: RowAlign.SpaceEvenly
                        //         })
                        //     ],
                        //     style: {
                        //         marginTop: "50px"
                        //     }
                        // })
                    ]
                })
            })
        ],
        style: {
            padding: "50px",
            ///height: "70%"
        }
    })
}

const s = (state) => ({ ...state.RMediaQuery })
export default connect(s)(Landing);