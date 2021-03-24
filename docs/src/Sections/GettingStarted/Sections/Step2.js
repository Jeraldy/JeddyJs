import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";
import Html from "../../../Html";

const Step2 = () => {
    return Div({
        children: [
            P({
                children: ["Folder Structure"],
                style: {
                    fontWeight: "bold",
                    fontSize: "20px"
                }
            }),
            Hr(),
            Div({
                children: [
                    PrettyCode(
                        `
├── node_modules
├── public
│   └── index.html
├── src
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js
                        `
                    )
                ]
            }),
            Div({
                children: [
                    Html(`
                    <p><strong style="color:#21A3F4">public/index.html</strong>:
When running, our app will render its content into the <code>div#root</code>, therefore this div
should not be removed. The script tag with <code>app.bundle.js</code> is needed to load our compiled js files. This is a regular <em>html</em> file so feel free to add any global css, icons etc.<br>
`),
                    PrettyCode(`
<body>
    <div id="root"></div>
    <script src="app.bundle.js"></script>
</body>`, "html"),
                    Html(`<strong style="color:#21A3F4">src/index.js</strong>:
This is the main entry of our app. The <code>render</code>  method returns a description of what you want to see on the screen. </br>
The <code>Main</code> class has a mutable state since it extends a <code>StatefulWidget</code>,
this gives our app the power to act on user interactivity, 
and therefore updating the corresponding parts of the UI bindend to the state mutated. 
All we have to do is to ensure the state is notified for changes by using 
<code>this.setState</code>, you'll learn more about states on the next sections.
                    `)
                ],
            }),
            PrettyCode(`
            import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";

class Main extends StatefulWidget {
    constructor() {
        super()
    }
    render() {
        return Div({
            children: ["Hello World"]
        })
    }
}

Jeddy.Init({ app: new Main() });
            `),
        ],
        style: {
            fontSize: "17px"
        }
    })
}

export default Step2;