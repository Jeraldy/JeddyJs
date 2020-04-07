"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
exports.default = (function (props) {
    props.type = 'radio';
    props.name = props.group || '';
    delete props.group;
    props.checked = props.controller == props.value;
    if (!props.checked) {
        delete props.checked;
    }
    delete props.controller;
    return Node_1.default(props, 'input');
});
//# sourceMappingURL=RadioButton.js.map