import { connect } from "jeddy/jredux"
import HTMLTemplate from "../../dom/HtmlTemplate"

const Pager = ({ activePage, description }) => ActivePage(activePage, description)

function ActivePage(activePage, description) {
    return HTMLTemplate(activePage, description)
}

const m = (state) => ({ ...state.domElementsReducer })
export default connect(m)(Pager)