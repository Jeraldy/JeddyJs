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
var Script = function (_a) {
    var children = _a.children, async = _a.async, charSet = _a.charSet, defer = _a.defer, src = _a.src, type = _a.type, attributes = _a.attributes;
    return Node_1.default(__assign({ children: children, async: async ? "async" : "", charset: charSet, defer: defer,
        src: src,
        type: type }, attributes), 'script');
};
exports.default = Script;
//# sourceMappingURL=Script.js.map