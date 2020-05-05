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
var Div_1 = require("../core/Div");
var StatckPane = function (_a) {
    var children = _a.children, style = _a.style;
    return Div_1.default({
        children: children.map(function (child) {
            child.style.position = 'absolute';
            return child;
        }),
        style: __assign(__assign({}, style), { position: 'relative' })
    });
};
exports.default = StatckPane;
//# sourceMappingURL=StackPane.js.map