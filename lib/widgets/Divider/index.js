"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../dom/Div");
const Size_1 = require("../../utils/Size");
const style = {
    backgroundColor: '#ccc',
    height: Size_1.default._1px,
    margin: Size_1.default._8px,
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return Div_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map