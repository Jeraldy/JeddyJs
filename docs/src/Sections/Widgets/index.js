import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Menu from "./Menu/index";
import Div from "jeddy/dom/Div";
import { connect } from "jeddy/jredux";
import _Card from "./Sections/_Card";
import _Icon from "./Sections/_Icon";

const Widget = ({ activePart }) => {
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

const mapStateToProps = (state) => ({ ...state.widgetReducer })

export default connect(mapStateToProps)(Widget);