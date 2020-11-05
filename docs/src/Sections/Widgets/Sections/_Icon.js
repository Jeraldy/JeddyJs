import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";


const _Icon = () => {
    return Div({
        children: [
            P({
                children: ["Icons"],
                style: { fontWeight: "bold", fontSize: "20px" }
            }),
            Hr(),
            P({
                children: ["Installation"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            Div({
                children: [
                    `We have included Google Material Design Icons. 
                    To be able to use these icons, you must include this line in the <head> portion of your HTML code
                    `,
                ]
            }),
            PrettyCode(
                ` <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`,
                'html'
            ),
            P({
                children: ["Usage"],
                style: { fontWeight: "bold", fontSize: "15px" }
            }),
            PrettyCode(`
import Icon from "jeddy/widgets/Icon";
import Icons from "jeddy/utils/Icons";;

Icon({
    name: Icons.home,
    style: { /* styles here */}
})
`),
            Div({
                children: [
                    `In case the Icon name isn't available in the icons utils. You pass its name directly as follows.`,
                ]
            }),
            PrettyCode(`
import Icon from "jeddy/widgets/Icon";

Icon({
    name: "home",
    style: { /* styles here */}
})
`),
        ],
        style: { fontSize: "17px" }
    })
}

export default _Icon;