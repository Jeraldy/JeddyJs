"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Select_1 = require("../../dom/Select");
const style = {
    minWidth: "150px",
    minHeight: "30px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    outline: 'none',
    backgroundColor: '#E6E6E6',
};
exports.default = (props = {}) => {
    props.style = Object.assign(Object.assign({}, style), props.style);
    return Select_1.default(Object.assign({}, props));
};
//# sourceMappingURL=index.js.map