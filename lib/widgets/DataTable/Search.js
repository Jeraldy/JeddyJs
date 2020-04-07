"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextInput_1 = require("../../core/TextInput");
var Div_1 = require("../../core/Div");
var Label_1 = require("../../core/Label");
var I_1 = require("../../core/I");
var TextView_1 = require("../../core/TextView");
require("../../styles/table.search.input.css");
exports.default = (function (props) {
    var style = {};
    if (props.query) {
        //@ts-ignore
        style.width = '300px';
    }
    return Div_1.default({
        children: [
            TextInput_1.default({
                id: "search-input",
                placeholder: "Search",
                class: "browser-default search-field",
                value: props.query,
                autocomplete: "off",
                ariaLabel: "Search box",
                //@ts-ignore
                onkeyup: function (e) { return props.filter(e); },
                style: style
            }),
            Label_1.default({
                for: "search-input",
                children: [
                    I_1.default({
                        class: "material-icons search-icon",
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
});
//# sourceMappingURL=Search.js.map