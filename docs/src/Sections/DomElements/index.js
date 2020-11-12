import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Pager from "./Pager";
import Menu from "./Menu";
import { connect } from "jeddy/jredux";
import Div from "jeddy/dom/Div";
import Device from "jeddy/utils/Device";

export default connect((state) => ({
    ...state.gettingStartedReducer,
    ...state.RMediaQuery
}))
    (({ device, isSmallMenuOpen }) => {
        const isSmall = (device <= Device.TABLET && device != 0)
        if (isSmall) {
            return Div({
                children: [
                    Card({
                        children: [
                            isSmallMenuOpen ? Div({
                                children: [Menu()],
                            }) : null
                        ],
                        style: {
                            width: isSmallMenuOpen ? "220px" : "0px",
                            position: "fixed",
                            top: "140px",
                            overflowY: "scroll",
                            height:"70vh",
                            transition: "width .2s",
                            zIndex: 1
                        }
                    }),
                    Card({
                        children: [Pager()],
                        style: {
                            borderRadius: "8px",
                            padding: "10px",
                        }
                    })
                ]
            })
        }
        return Row({
            children: [
                Menu(),
                Card({
                    children: [Pager()],
                    style: {
                        marginLeft: "50px",
                        borderRadius: "8px",
                        padding: "10px"
                    }
                })
            ],
            wrapContent: false
        })
    })