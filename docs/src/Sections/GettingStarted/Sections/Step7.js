import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import A from "jeddy/dom/A";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Br from "jeddy/dom/Br";
import Strong from "jeddy/dom/Strong";

const Step7 = () => {
    return Div({
        children: [
            P({
                children: ["Creating reducers"],
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
                        href: "https://github.com/Jeraldy/jredux-quick-start"
                    })
                ],
                style: {
                    marginTop: "20px"
                }
            }),
            Div({
                children: [
                    A({ children: ["Reducers"], href: "https://redux.js.org/" }),
                    ` simply contains the actions/functions that mutates the state.`, Br(),
                    `e will be dispatching/calling those actions from our widgets to increment/decrement the counter.
                     This code should look familiar, we have just initialized our counter to zero as previously. 
                    We have defined our functions to Increment and Decrement the counter respectively. 
                   `
                ],
            }),
            Div({
                children: [
                    Strong({
                        children: ["src/reducers/counter.js"],
                        style: { color: "#2196F3" }
                    })
                ],
                style: { marginTop: "20px" }
            }),
            Div({
                children: [
                    PrettyCode(
                        `
import { createReducer } from "jeddy/jredux";

const counterReducer = createReducer({
    name: 'counter',
    initialState: {
         counter: 0 
    },
    reducers: {
        handleIncrement: (state) => {
            return { 
                counter: state.counter + 1 
            }
        },
        handleDecrement: (state) => {
            return { 
                counter: state.counter - 1 
            }
        }
    }
})

export const { reducer, actions } = counterReducer;`
                    )
                ]
            }),
            Div({
                children: [
                    Strong({
                        children: ["src/reducers/index.js"],
                        style: { color: "#2196F3" }
                    }),
                    ` is the main entry of our reducers,
                    so all reducers should be registered here.`,
                ]
            }),
            PrettyCode(`
import { reducer as counterReducer } from './counter';

export default { counterReducer };

            `)
        ],
        style: { fontSize: "17px" }
    })
}

export default Step7;