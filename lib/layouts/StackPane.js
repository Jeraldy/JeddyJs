"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../core/Div");
const StatckPane = ({ children, style }) => {
    return Div_1.default({
        children: children.map(child => {
            child.style.position = 'absolute';
            return child;
        }),
        style: Object.assign(Object.assign({}, style), { position: 'relative' })
    });
};
exports.default = StatckPane;
//# sourceMappingURL=StackPane.js.map