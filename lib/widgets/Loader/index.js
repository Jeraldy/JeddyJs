"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../core/Div");
require("../../styles/loader.css");
const Size_1 = require("../../utils/Size");
exports.default = ({ radius = Size_1.default._50px, thickness = Size_1.default._5px, color = '#FF6600' } = {}) => {
    return Div_1.default({
        className: 'loader',
        style: {
            height: radius,
            width: radius,
            border: `${thickness} solid #f3f3f3`,
            borderTop: `${thickness} solid ${color}`,
        }
    });
};
//# sourceMappingURL=index.js.map