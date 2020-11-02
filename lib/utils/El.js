"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
exports.default = (args) => {
    if (args.tag == null) {
        throw new Error("Element tag is required");
    }
    return Node_1.default(args, args.tag);
};
//# sourceMappingURL=El.js.map