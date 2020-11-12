import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Menu from "./Menu/index";
import Div from "jeddy/dom/Div";
import { connect, dispatch } from "jeddy/jredux";
import _Card from "./Sections/_Card";
import _Icon from "./Sections/_Icon";
import Device from "jeddy/utils/Device";

const Widget = ({ activePart, device, isSmallMenuOpen }) => {
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
                        width: isSmallMenuOpen ? "200px" : "0px",
                        position: "fixed",
                        top: "140px",
                        overflowY: "scroll",
                        transition: "width .2s",
                        zIndex: 1
                    }
                }),
                Card({
                    children: [activeSection(activePart)],
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
            Div({
                children: [Menu()]
            }),

            Card({
                children: [activeSection(activePart)],
                style: {
                    marginLeft: "50px",
                    borderRadius: "8px",
                    padding: "10px",
                    marginRight: "50px"
                }
            })
        ],
        wrapContent: false
    })
}

function activeSection(activePart) {
    switch (activePart) {
        case "Card": return _Card()
        case "Icon": return _Icon()
    }
    return "Not implemented.!"
}

const mapStateToProps = (state) => ({
    ...state.widgetReducer,
    isSmallMenuOpen: state.gettingStartedReducer.isSmallMenuOpen,
    device: state.RMediaQuery.device
})

export default connect(mapStateToProps)(Widget);