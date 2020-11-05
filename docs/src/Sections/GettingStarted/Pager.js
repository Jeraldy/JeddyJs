import { connect } from "jeddy/jredux"
import HTMLTemplate from "../../dom/HtmlTemplate"

const Pager = ({ activePage, description }) => ActivePage(activePage, description)

function ActivePage(activePage, description) {
    switch (activePage) {
        case "A1":
            return "Holla"
    }
    return HTMLTemplate(activePage, description)
}

const m = (state) => ({ ...state.domEl })
export default connect(m)(Pager)