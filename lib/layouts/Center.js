"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const Size_1 = require("../utils/Size");
const style = {
    height: Size_1.default._100P,
    width: Size_1.default._100P,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
exports.default = ({ child }) => {
    return Div_1.default({ children: [child], style });
};
//# sourceMappingURL=Center.js.map