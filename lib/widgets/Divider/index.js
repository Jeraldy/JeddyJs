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
var Size_1 = require("../../utils/Size");
var style = {
    backgroundColor: '#ccc',
    height: Size_1.default._1px,
    margin: Size_1.default._8px,
};
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    props.style = __assign(__assign({}, style), props.style);
    return Div_1.default(__assign({}, props));
});
//# sourceMappingURL=index.js.map