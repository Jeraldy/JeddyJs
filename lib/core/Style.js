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
var Node_1 = require("./Node");
var Style = function (_a) {
    var media = _a.media, type = _a.type, children = _a.children, attributes = _a.attributes;
    return Node_1.default(__assign({ type: type,
        media: media,
        children: children }, attributes), 'style');
};
exports.default = Style;
//# sourceMappingURL=Style.js.map