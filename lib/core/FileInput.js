"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var FileInput = function (props) {
    props.type = 'file';
    return Node_1.default(props, 'input');
};
exports.default = FileInput;
//# sourceMappingURL=FileInput.js.map