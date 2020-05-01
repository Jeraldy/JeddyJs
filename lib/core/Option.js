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
var TextView_1 = require("./TextView");
var Option = function (_a) {
    var value = _a.value, text = _a.text, attributes = _a.attributes;
    return Node_1.default(__assign({ children: [TextView_1.default(text || '')], value: value }, attributes), 'option');
};
exports.default = Option;
//# sourceMappingURL=Option.js.map