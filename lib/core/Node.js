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
exports.default = (function (props, tag) {
    if (props === void 0) { props = {}; }
    //@ts-ignore
    var _a = __assign({}, props), children = _a.children, style = _a.style, rest = __rest(_a, ["children", "style"]);
    var node = document.createElement(tag);
    if (children) {
        children.forEach(function (child) {
            if (child) {
                node.appendChild(child);
            }
        });
    }
    if (style) {
        for (var key in style) {
            node.style[key] = style[key];
        }
    }
    for (var _i = 0, _b = Object.keys(rest); _i < _b.length; _i++) {
        var key = _b[_i];
        if (rest[key]) {
            if (typeof rest[key] === 'function') {
                node[key] = rest[key];
            }
            else {
                node.setAttribute(key, rest[key]);
            }
        }
    }
    return node;
});
//# sourceMappingURL=Node.js.map