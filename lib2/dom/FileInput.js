"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../core/Node");
const FileInput = (args) => {
    return Node_1.default(Object.assign(Object.assign({}, args), { type: "file" }), 'input');
};
exports.default = FileInput;
//# sourceMappingURL=FileInput.js.map