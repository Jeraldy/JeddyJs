"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
exports.default = (function (props) {
    props.type = 'checkbox';
    if (!props.checked) {
        delete props.checked;
    }
    return Node_1.default(props, 'input');
});
//# sourceMappingURL=CheckBox.js.map