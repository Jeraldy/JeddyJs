"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../dom/Div");
const CollapsibleGroup = ({ children }) => {
    let mainNodes = children.map(child => child.getAttribute('ref'));
    return Div_1.default({
        children: children.map(child => {
            child.setAttribute('mainNodes', mainNodes.toString());
            return child;
        })
    });
};
exports.default = CollapsibleGroup;
//# sourceMappingURL=CollapsibleGroup.js.map