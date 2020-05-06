"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CheckBoxInput_1 = require("../../core/CheckBoxInput");
const style = {
    minWidth: "20px",
    minHeight: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    outline: 'none',
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return CheckBoxInput_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map