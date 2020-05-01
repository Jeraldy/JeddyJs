"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var Size_1 = require("../utils/Size");
var style = {
    height: Size_1.default._100P,
    width: Size_1.default._100P,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
exports.default = (function (_a) {
    var child = _a.child;
    return Div_1.default({ children: [child], style: style });
});
//# sourceMappingURL=Center.js.map