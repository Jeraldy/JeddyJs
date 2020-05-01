"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var I_1 = require("../../core/I");
var TextView_1 = require("../../core/TextView");
exports.default = (function (_a) {
    var name = _a.name, style = _a.style;
    return I_1.default({
        className: 'material-icons',
        children: [TextView_1.default(name)],
        style: style,
    });
});
//# sourceMappingURL=index.js.map