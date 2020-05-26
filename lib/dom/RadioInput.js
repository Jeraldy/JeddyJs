"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const RadioInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "radio" }), 'input');
};
exports.default = RadioInput;
//# sourceMappingURL=RadioInput.js.map