import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import A from "jeddy/dom/A";
import Html from "../../../Html";

const Step10 = () => {
    return Div({
        children: [
            P({
                children: ["Deployment"],
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
                style: { marginTop: "20px" }
            }),
            PrettyCode(`$ npm run build`),
            Div({
                children: [
                    Html(`
                   <p>After running the above command you will find the build folder
                   in your workspace which contains site contents ready for hosting.
                   Please read <a href="https://webpack.js.org/guides/production/" rel="nofollow">Webpack guide</a>
                   for further optimization tips.</p>
                `),
                ],
            }),
        ],
        style: { fontSize: "17px" }
    })
}

export default Step10;