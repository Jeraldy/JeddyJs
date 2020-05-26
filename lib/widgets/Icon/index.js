"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const I_1 = require("../../dom/I");
const TextView_1 = require("../../dom/TextView");
exports.default = ({ name, style }) => {
    return I_1.default({
        class: 'material-icons',
        children: [TextView_1.default(name)],
        style,
    });
};
//# sourceMappingURL=index.js.map