"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
exports.default = (args) => {
    if (args.type == null) {
        throw new Error("Input type is required");
    }
    return Node_1.default(Object.assign(Object.assign({}, args), { type: args.type }), 'input');
};
//# sourceMappingURL=Input.js.map