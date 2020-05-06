"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const Style = ({ media, type, children, attributes } = {}) => {
    return Node_1.default(Object.assign({ type,
        media,
        children }, attributes), 'style');
};
exports.default = Style;
//# sourceMappingURL=Style.js.map