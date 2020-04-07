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
exports.getValue = function (id) {
    // @ts-ignore
    return document.getElementById(id).value;
};
exports.setValue = function (params) {
    if (params === void 0) { params = {}; }
    //@ts-ignore
    var _a = __assign({}, params), id = _a.id, value = _a.value;
    //@ts-ignore
    document.getElementById(id).value = value;
};
//# sourceMappingURL=utils.js.map