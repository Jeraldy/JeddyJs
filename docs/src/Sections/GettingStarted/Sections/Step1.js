import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import A from "jeddy/dom/A";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Br from "jeddy/dom/Br";

const Step1 = () => {
    return Div({
        children: [
            P({
                children: ["Main State"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            P({
                children: ["Prerequisites"],
                style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                }
            }),
            Div({
                children: [
                    `
                    We’ll assume that you have some familiarity with HTML and JavaScript, 
                    but you should be able to follow along even if you’re coming from a 
                    different programming language. We’ll also assume that you’re familiar
                    with programming concepts like functions, objects, arrays, 
                    and to a lesser extent, classes.
                    `,
                ]
            }),
            P({
                children: ["Environment Setup"],
                style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                }
            }),
            Div({
                children: [
                    "For successful development of JeddyJs apps you need NodeJs, NPM and Git installed on your system.",
                    Br(),
                    `
                    To validate the installation run the following commands.
                    If they run successful then you should get the version of node, npm and git installed.
                    In case you get an error install them first before proceeding to the next step.
                    `
                ]
            }),
            PrettyCode(`
$ node -v
$ npm -v
$ git --version`),
            P({
                children: ["Installation"],
                style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                }
            }),
            Div({
                children: [
                    `We’re going to create a simple counter application using two approaches. 
                    In the first part, We’ll use a simple stateful widget, and later we’ll enhance it by using `,
                    A({ children: ["Redux."], href: "https://redux.js.org/" }),
                    `The second approach is recommended for better state management and performance.`
                ],
            }),
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
                        href: "https://github.com/Jeraldy/jeddy-quick-start"
                    })
                ],
                style: {
                    marginTop: "20px"
                }
            }),
            Div({
                children: [
                    PrettyCode(
                        `
# Clone the quick start repository
$ git clone https://github.com/Jeraldy/jeddy-quick-start

# Go into the repository
$ cd jeddy-quick-start

# Install the dependencies and run
$ npm install && npm start`
                    )
                ]
            }),
            Div({
                children: [
                    "After running the above commands, your app will be running on ",
                    A({
                        children: ["http://localhost:9000/"],
                        href: "http://localhost:9000/"
                    })
                ]
            })
        ],
        style: {
            fontSize: "17px"
        }
    })
}

export default Step1;