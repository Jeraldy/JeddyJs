"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../dom/Div");
exports.default = (_a) => {
    var { cells } = _a, props = __rest(_a, ["cells"]);
    return Div_1.default(Object.assign({ class: "mdc-layout-grid__inner", children: cells || [] }, props));
};
//# sourceMappingURL=Index.js.map