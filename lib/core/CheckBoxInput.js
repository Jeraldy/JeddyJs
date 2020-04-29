"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var CheckBoxInput = function (props) {
    props.type = 'checkbox';
    if (!props.checked) {
        delete props.checked;
    }
    return Node_1.default(props, 'input');
};
exports.default = CheckBoxInput;
//# sourceMappingURL=CheckBoxInput.js.map