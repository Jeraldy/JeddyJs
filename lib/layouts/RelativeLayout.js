"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../core/Div");
const Size_1 = require("../utils/Size");
const style = {
    position: 'relative',
    height: Size_1.default._100P,
    width: Size_1.default._100P
};
exports.default = ({ children }) => {
    return Div_1.default({ children, style });
};
function Locate({ child, x, y, zIndex }) {
    return Div_1.default({
        children: [child],
        style: {
            position: 'absolute',
            top: y,
            left: x,
            zIndex: zIndex || 0
        }
    });
}
exports.Locate = Locate;
//# sourceMappingURL=RelativeLayout.js.map