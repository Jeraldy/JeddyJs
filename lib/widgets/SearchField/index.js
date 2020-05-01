"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
var index_1 = require("../Icon/index");
var index_2 = require("../TextField/index");
var Icons_1 = require("../../utils/Icons");
exports.default = (function () {
    return Div_1.default({
        className: 'search-container',
        style: {
            float: 'right',
            backgroundColor: "white",
            color: "black",
            border: "1px solid #ccc",
            borderRadius: "4px",
            paddingLeft: "8px",
            marginBottom: "5px",
            height: "30px"
        },
        children: [
            index_1.default({
                name: Icons_1.default.search,
                style: {
                    position: 'relative',
                    top: '5px',
                    color: '#ccc'
                }
            }),
            index_2.default({
                placeholder: "Search",
                style: {
                    border: 'hidden',
                    height: '10px',
                    position: 'relative',
                    top: '-5px'
                },
            }),
        ]
    });
});
//# sourceMappingURL=index.js.map