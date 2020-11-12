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
import Device from "jeddy/utils/Device";
import Fab from "./Menu/Fab";
import MenuMobile from "./Menu/MenuMobile";

const App = ({ activeMenu, isLandingPage, device }) => {
    const isSmall = device <= Device.TABLET
    if (isLandingPage) {
        return Div({
            children: [
                Toolbar(),
                Landing(),
                Footer()
            ],
            style: { height: "100%" }
        })
    }
    return Div({
        children: [
            Toolbar(),
            isSmall ? MenuMobile() : Menu(),
            Div({
                children: [
                    activeSection(activeMenu)
                ],
                style: {
                    padding: "10px",
                    paddingTop: isSmall ? "10px" : "80px",
                    paddingLeft: isSmall ? "" : "300px"
                }
            }),
            isSmall ? Fab() : null,
            Footer()
        ],
        style: { backgroundColor: "white" }
    })
}

function activeSection(section) {
    switch (section) {
        case "Getting Started":
            return GettingStarted()
        case "Elements":
            return DomElements()
        case "Widgets":
            return Widgets()
        case "Layouts":
            return Layouts()
    }
    return "Not Available for now.!"
}

const mapStateToProps = (state) => ({
    ...state.domElementsReducer,
    ...state.RMediaQuery
})

export default connect(mapStateToProps)(App)