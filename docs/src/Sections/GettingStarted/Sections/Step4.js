import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Html from "../../../Html";

const Step4 = () => {
    return Div({
        children: [
            P({
                children: ["UI Update"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            P({
                style: {
                    fontWeight: "bold",
                    fontSize: "15px"
                }
            }),
            Div({
                children: [
                    ` Let’s create two buttons to trigger our increment and decrement actions.`
                ],
            }),
            Div({
                children: [
                    PrettyCode(
                        `
import Button from "jeddy/dom/Button";

Button({
    children: ["Increment"],
    onClick: () => this.handleIncrement()
})

Button({
    children: ["Decrement"],
    onClick: () => this.handleDecrement()
})`
                    )
                ]
            }),
            Html(
                `Let’s Putting them togather into a render function. 
                We display the counts using <code>Counter: \${this.state.counter}</code>.
                We have used the <code>Center</code> layout to diplay our buttons at the center of the page.
                Learn more about layouts from the Layouts section.`
            ),
            PrettyCode(`
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";

render() {
    return Center({
        child: Div({
            children: [
                \`Counter: \${this.state.counter}\`,
                Button({
                    children: ["Increment"],
                    onClick: () => this.handleIncrement()
                }),
                Button({
                    children: ["Decrement"],
                    onClick: () => this.handleDecrement()
                }),
            ]
        })
    })
}
`),
            Div({
                children: [
                    `After adding the above logic our final code will be as follows.`
                ],
            }),
            PrettyCode(`
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";

class Main extends StatefulWidget {
    constructor() {
        super()
        this.state = { 
            counter: 0 
        }
        return this.connect()
    }

    handleIncrement() {
        this.setState({ 
            counter: this.state.counter + 1 
        })
    }

    handleDecrement() {
        this.setState({ 
            counter: this.state.counter - 1 
        })
    }

    render() {
        return Center({
            child: Div({
                children: [
                    \`Counter: \${this.state.counter}\`,
                    Button({
                        children: ["Increment"],
                        onClick: () => this.handleIncrement()
                    }),
                    Button({
                        children: ["Decrement"],
                        onClick: () => this.handleDecrement()
                    }),
                ]
            })
        })
    }
}

Jeddy.Init({ app: new Main() });`),
        ],
        style: {
            fontSize: "17px"
        }
    })
}

export default Step4;