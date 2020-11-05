import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import A from "jeddy/dom/A";
import Html from "../../../Html";
import Strong from "jeddy/dom/Strong";

const Step9 = () => {
    return Div({
        children: [
            P({
                children: ["Redux State"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            Div({
                children: [
                    "Please find a live demo for this ",
                    A({
                        children: ["here, "],
                        href: "https://jeddy-counter.netlify.app/"
                    }),
                    "And the source code ",
                    A({
                        children: ["here."],
                        href: "https://github.com/Jeraldy/jeddy-redux-quick-start"
                    })
                ],
                style: {
                    marginTop: "20px"
                }
            }),
            P({
                children: ["Connecting reducers"],
                style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                }
            }),
            Div({
                children: [
                    Html(`
                   <ul>
<li>At this point every thing is all setup, but our widgets constellation doesn't recognise the presence of reducers.</li>
<li>Now lets do that in the <em>src/index.js</em></li>
<li>We import the root reducer from <em>'./reducers/index'</em> and then passing it
to our main widget so that it becomes available down the tree.</li>
<li>We are calling the <em>updateState</em> inside the <code>connectedCallBack</code> to subscribe for the subsequent updates and activate the initial state.</li>
<li>The <code>connectedCallBack</code> is a life cycle method which gets invoked when our main widget gets connected to the dom tree.</li>
</ul>`),
                    Strong({
                        children: ["src/index.js"],
                        style: { color: "#2196F3" }
                    }),
                ],
            }),
            Div({
                children: [
                    PrettyCode(
                        `
import { Jeddy, StatefulWidget } from "jeddy";
import reducers from './Reducers/index';
import { updateState } from "jeddy/jredux";
import App from "./App";

class Main extends StatefulWidget {
    constructor(props) {
        super(props)
        return this.connect()
    }
    connectedCallBack() { updateState(this) }
    render() { return App() }
}

Jeddy.Init({ app: new Main({ reducers }) });`)
                ]
            }),
        ],
        style: {
            fontSize: "17px"
        }
    })
}

export default Step9;