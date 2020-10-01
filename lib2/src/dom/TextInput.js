"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const TextInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "text" }), 'input');
};
exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map