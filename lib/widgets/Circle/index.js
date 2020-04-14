"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
exports.default = (function (_a) {
    var child = _a.child, radius = _a.radius, style = _a.style;
    style = __assign({ borderRadius: "100%", height: radius, width: radius }, style);
    return Div_1.default({ children: [child], style: style });
});
//# sourceMappingURL=index.js.map