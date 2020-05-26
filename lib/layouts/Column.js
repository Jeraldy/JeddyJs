"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const Size_1 = require("../utils/Size");
const style = ({ align }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        width: Size_1.default._100P,
        alignItems: align
    };
};
exports.default = ({ children, align }) => {
    return Div_1.default({ children, style: style({ align }) });
};
//# sourceMappingURL=Column.js.map