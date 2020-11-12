import Div from "jeddy/dom/Div"
import P from "jeddy/dom/P";
import A from "jeddy/dom/A";
import PrettyCode from "../../../PrettyCode";
import Hr from "jeddy/dom/Hr";

const Step6 = () => {
    return Div({
        children: [
            P({
                children: ["Restructuring"],
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
                        href: "https://github.com/Jeraldy/jeddy-redux-quick-start"
                    })
                ],
                style: {
                    marginTop: "20px"
                }
            }),
            Div({
                children: [
                    `Since the framework for now supports only a single instance of a StatefulWidget (The Main), 
                    therefore keeping all your state in the top-level widget. 
                    This can sometimes get messy if you have a reasonable amounts of data changing over time. `,
                    A({ children: ["Redux"], href: "https://redux.js.org/" }),
                    ` provides an easy way to manage state by providing a single source of truth for your state.`
                ],
            }),
            Div({
                children: [
                    "Let's create some folders and files that will help us keep our app neat. Our new folder structure looks as follows.",
                ],
                style: {
                    marginTop: "20px"
                }
            }),
            Div({
                children: [
                    PrettyCode(
                        `
├── node_modules
├── public
│   └── index.html
├── src
│   ├── reducers                  // new folder
│   │   ├── counter.js
│   │   └── index.js
│   ├── widgets                   //  new folder
│   │   ├── Increment.js
│   │   └── Decrement.js   
│   ├── App.css                   // renamed index.css
│   ├── App.js                    // added new file
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js`
                    )
                ]
            }),
        ],
        style: {
            fontSize: "17px"
        }
    })
}

export default Step6;