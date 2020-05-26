"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const CheckBoxInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "checkbox" }), 'input');
};
exports.default = CheckBoxInput;
//# sourceMappingURL=CheckBoxInput.js.map