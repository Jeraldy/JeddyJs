"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const I_1 = require("../../core/I");
const TextView_1 = require("../../core/TextView");
exports.default = ({ name, style }) => {
    return I_1.default({
        className: 'material-icons',
        children: [TextView_1.default(name)],
        style,
    });
};
//# sourceMappingURL=index.js.map