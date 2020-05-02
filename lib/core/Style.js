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
    var _b = _a === void 0 ? {} : _a, media = _b.media, type = _b.type, children = _b.children, attributes = _b.attributes;
    return Node_1.default(__assign({ type: type,
        media: media,
        children: children }, attributes), 'style');
};
exports.default = Style;
//# sourceMappingURL=Style.js.map