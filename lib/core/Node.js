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
exports.default = (props = {}, tag) => {
    //@ts-ignore
    const _a = Object.assign({}, props), { children, style } = _a, rest = __rest(_a, ["children", "style"]);
    let node = document.createElement(tag);
    if (children) {
        children.forEach((child) => {
            if (child) {
                node.appendChild(child);
            }
        });
    }
    if (style) {
        for (let key in style) {
            node.style[key] = style[key];
        }
    }
    for (let key of Object.keys(rest)) {
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
};
//# sourceMappingURL=Node.js.map