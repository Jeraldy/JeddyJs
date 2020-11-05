import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import Card from "jeddy/widgets/Card";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Center from "jeddy/layouts/Center";

const _Center = () => {
    return Div({
        children: [
            P({
                children: ["Center"],
                style: { fontWeight: "bold", fontSize: "20px" }
            }),
            Hr(),
            P({
                children: ["Usage"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            Div({
                children: [
                    `This is a Flexbox which helps you center your elements.
                    Its aim is to provide a more efficient way to lay out, align and distribute space among items in a container, 
                    even when their size is unknown and/or dynamic.`
                ]
            }),
            PrettyCode(`
import Center from "jeddy/layouts/Center";

Center({
    child: "child to center",
})`),
            P({
                children: ["Example"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Center from "jeddy/layouts/Center";
import Card from "jeddy/widgets/Card";

Card({
    children: [
        Center({ child: "1" })
    ],
    style: {
        height: "80px",
        width: "80px",
        fontSize: "15px",
        fontWeight: "bold"
    }
})`),
            Div({
                children: [
                    TextBox("1")
                ],
                style: { backgroundColor: "#D7EEEC", padding: "50px" }
            }),
        ],
        style: { fontSize: "17px" }
    })
}

function TextBox(text) {
    return Card({
        children: [
            Center({ child: text })
        ],
        style: {
            height: "80px",
            width: "80px",
            fontSize: "15px",
            fontWeight: "bold"
        }
    })
}

export default _Center;