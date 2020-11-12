import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";

const Step5 = () => {
    return Div({
        children: [
            P({
                children: ["Styling"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            Div({
                children: [
                    `Styling in JeddyJs is simple. You can write inline css or write a separate file and then import it.
                    We have imported index.css which contans some css to style our buttons.
                    You can also add inline styles like the way we have styled the div which displays the counts.`
                ],
            }),
            Div({
                children: [
                    PrettyCode(
                        `
import './index.css';

Button({
    class: 'btn', //added
    children: ["Increment"],
    onClick: () => this.handleIncrement()
})`)
                ]
            }),
            Div({
                children: ["Inline styling"]
            }),
            PrettyCode(
`Div({
    children: ['Counter', Br(), \`\${this.state.counter}\`],
    style: {
        textAlign: 'center',
        fontSize: '6rem',
        fontWeight: 'bold'
    }
})`
            ),
            Div({
                children: [
                    `After adding the above styles our final code will look as follows.`
                ],
            }),
            PrettyCode(`
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";
import Br from "jeddy/dom/Br";
import './index.css';

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
                    Div({
                        children: ['Counter', Br(), \`\${this.state.counter}\`],
                        style: {
                            textAlign: 'center',
                            fontSize: '6rem',
                            fontWeight: 'bold'
                        }
                    }),
                    Div({
                        children: [
                            Button({
                                class: 'btn',
                                children: ["Increment"],
                                onClick: () => this.handleIncrement()
                            }),
                            Button({
                                class: 'btn',
                                children: ["Decrement"],
                                onClick: () => this.handleDecrement()
                            }),
                        ]
                    })
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

export default Step5;