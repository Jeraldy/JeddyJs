"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
require("../../styles/loader.css");
var Size_1 = require("../../utils/Size");
exports.default = (function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.radius, radius = _c === void 0 ? Size_1.default._50px : _c, _d = _b.thickness, thickness = _d === void 0 ? Size_1.default._5px : _d, _e = _b.color, color = _e === void 0 ? '#FF6600' : _e;
    return Div_1.default({
        class: 'loader',
        style: {
            height: radius,
            width: radius,
            border: thickness + " solid #f3f3f3",
            borderTop: thickness + " solid " + color,
        }
    });
});
//# sourceMappingURL=index.js.map