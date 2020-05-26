"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const Column_1 = require("./Column");
const Row_1 = require("./Row");
const style = {
    height: '100%',
    width: '100%',
    border: '2px solid red'
};
exports.default = ({ top, left, right, bottom, center }) => {
    return Div_1.default({
        children: [
            Column_1.default({
                children: [
                    top || null,
                    Row_1.default({
                        children: [
                            left || null,
                            center || null,
                            right || null
                        ]
                    }),
                    bottom || null
                ]
            })
        ],
        style
    });
};
//# sourceMappingURL=BorderPane.js.map