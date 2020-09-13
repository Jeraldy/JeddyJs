"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../dom/Div");
exports.default = ({ children, style }) => {
    style = Object.assign({ background: '#fff', borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }, style);
    return Div_1.default({ children, style });
};
//# sourceMappingURL=index.js.map