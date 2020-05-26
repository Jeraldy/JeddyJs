"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DateInput_1 = require("../../dom/DateInput");
const style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '8px'
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return DateInput_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map