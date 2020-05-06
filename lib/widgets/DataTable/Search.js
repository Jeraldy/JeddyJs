"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextInput_1 = require("../../core/TextInput");
const Div_1 = require("../../core/Div");
const Label_1 = require("../../core/Label");
const I_1 = require("../../core/I");
const TextView_1 = require("../../core/TextView");
require("../../styles/table.search.input.css");
exports.default = (props) => {
    let style = {};
    if (props.query) {
        //@ts-ignore
        style.width = '300px';
    }
    return Div_1.default({
        children: [
            TextInput_1.default({
                id: "search-input",
                placeholder: "Search",
                className: "browser-default search-field",
                value: props.query,
                autocomplete: "off",
                ariaLabel: "Search box",
                onKeyUp: (e) => props.filter(e),
                style
            }),
            Label_1.default({
                For: "search-input",
                children: [
                    I_1.default({
                        className: "material-icons search-icon",
                        children: [
                            TextView_1.default("search")
                        ]
                    })
                ],
                style: {
                    position: 'relative',
                    right: '55px',
                    top: '-3px'
                }
            })
        ]
    });
};
//# sourceMappingURL=Search.js.map