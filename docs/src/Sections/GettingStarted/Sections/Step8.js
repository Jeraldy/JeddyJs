import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import A from "jeddy/dom/A";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Br from "jeddy/dom/Br";
import Strong from "jeddy/dom/Strong";
import Html from "../../../Html";

const Step8 = () => {
    return Div({
        children: [
            P({
                children: ["Refactoring"],
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
            Div({
                children: [
                    `We have refactored our code to separate the Increment and Decrement buttons.
                    Separating these two button might seem trivial for a relatively simple app like this. But this is a common pattern for real apps which normally have lots of widgets and complex logic.
                   `
                ],
            }),
            Div({
                children: [
                    PrettyCode(
                        `
├── Widgets
    ├── Increment.js
    └── Decrement.js`
                    )
                ]
            }),
            Div({
                children: [
                    Strong({
                        children: ["src/widgets/Increment.js"],
                        style: { color: "#2196F3" }
                    }),
                ]
            }),
            PrettyCode(`
import { actions } from '../Reducers/Counter';
import Button from 'jeddy/dom/Button';
import { dispatch } from 'jeddy/jredux';
const { handleIncrement } = actions

const Increment = () => {
    return Button({
        class: 'btn',
        children: ['Increment'],
        onclick: () => dispatch(handleIncrement())
    })
}

export default Increment;`),
            Div({
                children: [
                    Strong({
                        children: ["src/widgets/Decrement.js"],
                        style: { color: "#2196F3" }
                    }),
                ]
            }),
            PrettyCode(`
import { actions } from '../Reducers/Counter';
import Button from 'jeddy/dom/Button';
import { dispatch } from 'jeddy/jredux';
const { handleDecrement } = actions

const Decrement = () => {
    return Button({
        class: 'btn',
        children: ['Decrement'],
        onclick: () => dispatch(handleDecrement())
    })
}

export default Decrement;`),
            Div({
                children: [
                    Strong({
                        children: ["src/App.js"],
                        style: { color: "#2196F3" }
                    }),
                ]
            }),
            Html(`
<ul>
<li>This just combines the Increment and Decrement widgets to create a single widget.</li>
<li>You can notice that we have a connect function at the bottom, this gives us a way to access the state
and pull out the counterReducer.</li>
<li>The ES6 spread operator(...) unpacks the state into its individual props.</li>
<li>Therefore the counter variable becomes available to our widget like this <code>({ counter })</code>.</li>
</ul>
`),
            PrettyCode(`
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Row from "jeddy/layouts/Row";
import Br from "jeddy/dom/Br";
import RowAlignment from "jeddy/layouts/RowAlignment";
import Increment from "./Widgets/Increment";
import Decrement from "./Widgets/Decrement";
import { connect } from "jeddy/jredux";
import './App.css';

const App = ({ counter }) => {
    return Center({
        child: Div({
            children: [
                Div({
                    children: ['Counter', Br(), \`\${ counter }\`],
                    style: {
                        textAlign: 'center',
                        fontSize: '6rem',
                        fontWeight: 'bold'
                    }
                }),
                Row({
                    children: [Increment(), Decrement()],
                    align: RowAlignment.SpaceBetween
                })
            ]
        })
    })
}

const mapStateToProps = (state) => {
    return { 
        ...state.counterReducer
    }
}

export default connect(mapStateToProps)(App)`)
        ],
        style: { fontSize: "17px" }
    })
}

export default Step8;