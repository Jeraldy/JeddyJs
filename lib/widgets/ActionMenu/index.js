"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
var Button_1 = require("../../core/Button");
var Link_1 = require("../../core/Link");
var TextView_1 = require("../../core/TextView");
require("../../styles/action.menu.css");
var Size_1 = require("../../utils/Size");
exports.default = (function (id) {
    return Div_1.default({
        class: "dropdown",
        style: {
            float: 'left',
            zIndex: Size_1.default._1000px
        },
        children: [
            Button_1.default({ class: "dropbtn", }),
            Div_1.default({
                class: "dropdown-content",
                children: [
                    Link_1.default({ children: [TextView_1.default("Link 1")] }),
                    Link_1.default({ children: [TextView_1.default("Link 2")] }),
                    Link_1.default({ children: [TextView_1.default("Link 3")] })
                ]
            })
        ]
    });
});
//# sourceMappingURL=index.js.map