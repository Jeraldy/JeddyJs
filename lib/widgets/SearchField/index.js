"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
var index_1 = require("../Icon/index");
var index_2 = require("../TextField/index");
exports.default = (function () {
    return Div_1.default({
        class: 'search-container',
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
                name: 'search',
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