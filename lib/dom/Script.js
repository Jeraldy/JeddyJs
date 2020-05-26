"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const Script = ({ children, async, charSet, defer, src, type, attributes } = {}) => {
    return Node_1.default(Object.assign({ children, async: async ? "async" : "", charset: charSet, defer,
        src,
        type }, attributes), 'script');
};
exports.default = Script;
//# sourceMappingURL=Script.js.map