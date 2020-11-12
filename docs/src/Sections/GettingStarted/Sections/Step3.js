import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";

const Step3 = () => {
    return Div({
        children: [
            P({
                children: ["Event Listeners"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            Div({
                children: [
                    ` Let’s create a counter variable inside the state to keep track of our counts.
                    When this variable changes, parts of the UI bindend to this varible will be updated accordingly.`
                ],
            }),
            Div({
                children: [
                    PrettyCode(
                        `
this.state = {
    counter: 0
};`
                    )
                ]
            }),
            Div({
                children: [
                    `The following are the functions to increment and decrement the counter respectively.
                    We are using the set state function to notify any listerners that the state has changed for them
                    to reflect the update accordingly.`
                ],
            }),
            PrettyCode(`
handleIncrement() {
    this.setState({
        counter: this.state.counter + 1
    })
}

handleDecrement() {
    this.setState({
        counter: this.state.counter - 1
    })
}`),
            Div({
                children: [
                    `After adding the above logic our final code will look as follows.`
                ],
            }),
            PrettyCode(`
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";

class Main extends StatefulWidget {
        constructor() {
        super()
        // our counter variable to hold the counts
        this.state = {
            counter: 0 
        };
        return this.connect()
    }
    
    // incrementing the counter
    handleIncrement() {
        this.setState({ 
            counter: this.state.counter + 1 
        })
    }
    
    // decrementing the counter
    handleDecrement() {
        this.setState({ 
            counter: this.state.counter - 1 
        })
    }

    render() {
        return Div({
            children: [
                "Hello World"
            ]
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

export default Step3;