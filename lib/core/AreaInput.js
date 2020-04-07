"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
exports.default = (function (props) {
    props.ref = Math.random()
        .toString(36)
        .substring(7)
        .toString();
    return Node_1.default(props, 'textarea');
});
//# sourceMappingURL=AreaInput.js.map