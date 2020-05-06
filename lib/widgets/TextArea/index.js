"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextArea_1 = require("../../core/TextArea");
const style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '5px'
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return TextArea_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map