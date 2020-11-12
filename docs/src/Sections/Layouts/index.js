import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Menu from "./Menu/index";
import Div from "jeddy/dom/Div";
import { connect } from "jeddy/jredux";
import _Row from "./Sections/_Row";
import _Center from "./Sections/_Center";
import Device from "jeddy/utils/Device";

const Layouts = ({ activePart, device, isSmallMenuOpen }) => {
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
            Div({ children: [Menu()] }),
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
        case "Row": return _Row()
        case "Center": return _Center()
    }
    return "Not implemented.!"
}

const mapStateToProps = (state) => ({
    ...state.layoutReducer,
    isSmallMenuOpen: state.gettingStartedReducer.isSmallMenuOpen,
    device: state.RMediaQuery.device
})

export default connect(mapStateToProps)(Layouts);