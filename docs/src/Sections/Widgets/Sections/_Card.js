import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import Card from "jeddy/widgets/Card";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";

const _Card = () => {
    return Div({
        children: [
            P({
                children: ["Card"],
                style: { fontWeight: "bold", fontSize: "20px" }
            }),
            Hr(),
            P({
                children: ["Usage"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            Div({
                children: [
                    `Cards are a convenient means of displaying content composed
                     of different types of objects. They’re also well-suited for presenting 
                    similar objects whose size or supported actions can vary considerably,
                     like photos with captions of variable length.`
                ]
            }),
            PrettyCode(`
import Card from "jeddy/widgets/Card";

Card({
    children:["Children here"],
    style: { 
        // Styles here
     },
     //... Any valid attribute/event
})`),
            P({
                children: ["Example"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            Div({
                children: [
                    Card({
                        style: {
                            height: "200px",
                            width: "200px"
                        }
                    })
                ],
                style: {
                    backgroundColor: "#D7EEEC",
                    padding: "20px",
                }
            })
        ],
        style: { fontSize: "17px" }
    })
}

export default _Card;