import Row from "jeddy/layouts/Row"
import Card from "jeddy/widgets/Card";
import Menu from "./Menu/index";
import Div from "jeddy/dom/Div";
import { connect } from "jeddy/jredux";
import _Row from "./Sections/_Row";
import _Center from "./Sections/_Center";

const Layouts = ({ activePart }) => {
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
    console.log(activePart)
    switch (activePart) {
        case "Row": return _Row()
        case "Center": return _Center()
    }
    return "Not implemented.!"
}

const mapStateToProps = (state) => ({ ...state.layoutReducer })

export default connect(mapStateToProps)(Layouts);