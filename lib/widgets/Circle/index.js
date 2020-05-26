"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../dom/Div");
exports.default = ({ child, radius, style }) => {
    style = Object.assign({ borderRadius: "100%", height: radius, width: radius }, style);
    return Div_1.default({ children: [child], style });
};
//# sourceMappingURL=index.js.map