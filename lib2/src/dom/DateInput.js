"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const DateInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "date" }), 'input');
};
exports.default = DateInput;
//# sourceMappingURL=DateInput.js.map