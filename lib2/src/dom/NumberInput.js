"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const NumberInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "number" }), 'input');
};
exports.default = NumberInput;
//# sourceMappingURL=NumberInput.js.map