import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import Card from "jeddy/widgets/Card";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import RowAlign from "jeddy/layouts/RowAlign";
import Row from "jeddy/layouts/Row";
import Center from "jeddy/layouts/Center";
import Span from "jeddy/dom/Span";

const _Row = () => {
    return Div({
        children: [
            P({
                children: ["Row"],
                style: { fontWeight: "bold", fontSize: "20px" }
            }),
            Hr(),
            P({
                children: ["Usage"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            Div({
                children: [
                    `This is a Flexbox which helps you align your contents in different ways horizonatlly.
                    Its aim is to provide a more efficient way to lay out, align and distribute space among items in a container, 
                    even when their size is unknown and/or dynamic.`
                ]
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";

Row({
    children:["Children here"],
    align: RowAlign.Start,
    wrapContent: true // Specifies whether the flex items should wrap or not
     //... Any valid attribute/event
})`),
            P({
                children: ["Examples"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            P({
                children: ["1. Default Alignment"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";

Row({
    children:["Children here"],
    //align: RowAlign.Start,
    //wrapContent: true
})`),
            Div({
                children: [
                    Row({
                        children: [
                            TextBox("1"),
                            TextBox("2"),
                            TextBox("3")
                        ]
                    })
                ],
                style: { backgroundColor: "#D7EEEC", padding: "4px", padding: "4px" }
            }),
            P({
                children: ILabel("2.RowAlign.SpaceEvenly"),
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";

Row({
    children:["Children here"],
    align: RowAlign.SpaceEvenly,
})`),
            Div({
                children: [
                    Row({
                        children: [
                            TextBox("1"),
                            TextBox("2"),
                            TextBox("3")
                        ],
                        align: RowAlign.SpaceEvenly
                    })
                ],
                style: { backgroundColor: "#D7EEEC", padding: "4px", }
            }),
            P({
                children: ILabel("3.RowAlign.SpaceBetween"),
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";

Row({
    children:["Children here"],
    align: RowAlign.SpaceBetween,
})`),
            Div({
                children: [
                    Row({
                        children: [
                            TextBox("1"),
                            TextBox("2"),
                            TextBox("3")
                        ],
                        align: RowAlign.SpaceBetween
                    })
                ],
                style: { backgroundColor: "#D7EEEC", padding: "4px", }
            }),
            P({
                children:ILabel("4.RowAlign.Center"),
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";

Row({
    children:["Children here"],
    align: RowAlign.Center,
})`),
            Div({
                children: [
                    Row({
                        children: [
                            TextBox("1"),
                            TextBox("2"),
                            TextBox("3")
                        ],
                        align: RowAlign.Center
                    })
                ],
                style: { backgroundColor: "#D7EEEC", padding: "4px", }
            }),
            P({
                children: ILabel("5.RowAlign.End"),
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Row from "jeddy/layouts/Row";
import RowAlign from "jeddy/layouts/RowAlign";

Row({
    children:["Children here"],
    align: RowAlign.End,
})`),
            Div({
                children: [
                    Row({
                        children: [
                            TextBox("1"),
                            TextBox("2"),
                            TextBox("3")
                        ],
                        align: RowAlign.End
                    })
                ],
                style: { backgroundColor: "#D7EEEC", padding: "4px", }
            })
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

function ILabel(a) {
    return [
        `${a.split(".")[0]}. `,
        Span({
            children: [`${a.split(".")[1]}.`],
            style: { color: "#2e7d32" }
        }),
        Span({
            children: [a.split(".")[2]],
            style: { color: "#03a9f4", fontStyle: "italic" }
        })
    ]
}
export default _Row;