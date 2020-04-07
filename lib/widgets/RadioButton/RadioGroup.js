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
var Span_1 = require("../../core/Span");
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    return Span_1.default(__assign({}, props));
});
//# sourceMappingURL=RadioGroup.js.map