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
const TextView_1 = require("../dom/TextView");
exports.default = (props = {}, tag) => {
    //@ts-ignore
    const _a = Object.assign({}, props), { children, style, attributes } = _a, rest = __rest(_a, ["children", "style", "attributes"]);
    let node = document.createElement(tag);
    if (children) {
        children.forEach((child) => {
            if (child) {
                if (typeof child == 'string') {
                    node.appendChild(TextView_1.default(child));
                }
                else {
                    node.appendChild(child);
                    //@ts-ignore
                    // if (child.nodeName == "OPTION" && props.value == child.value) {
                    //   //@ts-ignore
                    //   child.setAttribute('selected', 'selected');
                    // }
                }
            }
        });
    }
    if (style) {
        for (let key in style) {
            node.style[key] = style[key];
        }
    }
    if (attributes) {
        for (let key in attributes) {
            node.setAttribute(key, attributes[key]);
        }
    }
    for (let key of Object.keys(rest)) {
        if (rest[key]) {
            if (typeof rest[key] === 'function') {
                node[key.toLowerCase()] = rest[key];
            }
            else {
                node.setAttribute(key, rest[key]);
            }
        }
    }
    return node;
};
//# sourceMappingURL=Node.js.map