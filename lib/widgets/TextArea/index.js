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
var AreaInput_1 = require("../../core/AreaInput");
var style = {
    outline: 'none',
    border: '1px solid #ccc',
    borderRadius: '5px'
};
exports.default = (function (props) {
    if (props === void 0) { props = {}; }
    props.style = __assign(__assign({}, style), props.style);
    return AreaInput_1.default(__assign({}, props));
});
//# sourceMappingURL=index.js.map