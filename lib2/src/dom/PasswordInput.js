"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const PasswordInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "password" }), 'input');
};
exports.default = PasswordInput;
//# sourceMappingURL=PasswordInput.js.map