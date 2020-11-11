import Div from "jeddy/dom/Div";
import Row from "jeddy/layouts/Row";
import { connect } from "jeddy/jredux";
import Toolbar from "./Toolbar/index";
import Menu from "./Menu/index";
import "./style.css";
import DomElements from "./Sections/DomElements/index";
import GettingStarted from "./Sections/GettingStarted/index";
import Widgets from "./Sections/Widgets/index";
import Layouts from "./Sections/Layouts/index";
import Footer from "./Footer/index";
import Landing from "./Landing/index";

const App = ({ activeMenu, isLandingPage }) => {
    if (isLandingPage) {
        return Div({
            children: [
                Toolbar(),
                Landing(),
                // Footer()
            ],
            style: { width: "100vw", height: "100%" }
        })
    }
    return Div({
        children: [
            Toolbar(),
            Menu(),
            Div({
                children: [activeSection(activeMenu)],
                style: {
                    paddingLeft: "100px",
                    margin: "80px 50px 60px 220px"
                }
            }),
            Footer()
        ],
        style: { width: "100%", backgroundColor: "white" }
    })
}

function activeSection(section) {
    switch (section) {
        case "Getting Started":
            return GettingStarted()
        case "Dom Elements":
            return DomElements()
        case "Widgets":
            return Widgets()
        case "Layouts":
            return Layouts()
    }
    return "Not Available for now.!"
}

const mapStateToProps = (state) => ({ ...state.domElementsReducer })

export default connect(mapStateToProps)(App)