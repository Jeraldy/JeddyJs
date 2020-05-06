"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextInput_1 = require("../../core/TextInput");
const style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px'
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return TextInput_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map