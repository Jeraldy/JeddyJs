"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var Select = function (props) {
    var value = props.value;
    if (value) {
        delete props.value;
        var node = Node_1.default(props, 'select');
        //@ts-ignore
        node.value = value;
        return node;
    }
    return Node_1.default(props, 'select');
};
exports.default = Select;
//# sourceMappingURL=Select.js.map