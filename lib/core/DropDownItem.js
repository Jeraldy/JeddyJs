"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var TextView_1 = require("./TextView");
exports.default = (function (props) {
    props.children = [TextView_1.default(props.text || '')];
    delete props.text;
    return Node_1.default(props, 'option');
});
//# sourceMappingURL=DropDownItem.js.map