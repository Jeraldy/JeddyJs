"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const Option = ({ value, text, attributes } = {}) => {
    return Node_1.default(Object.assign({ children: [text || ''], value }, attributes), 'option');
};
exports.default = Option;
//# sourceMappingURL=Option.js.map