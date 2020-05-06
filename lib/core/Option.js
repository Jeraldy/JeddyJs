"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
const TextView_1 = require("./TextView");
const Option = ({ value, text, attributes } = {}) => {
    return Node_1.default(Object.assign({ children: [TextView_1.default(text || '')], value }, attributes), 'option');
};
exports.default = Option;
//# sourceMappingURL=Option.js.map