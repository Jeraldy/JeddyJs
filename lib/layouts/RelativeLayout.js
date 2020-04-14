"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var style = {
    position: 'relative',
    height: '100%',
    width: '100%'
};
exports.default = (function (_a) {
    var children = _a.children;
    return Div_1.default({ children: children, style: style });
});
function Locate(_a) {
    var child = _a.child, x = _a.x, y = _a.y, zIndex = _a.zIndex;
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