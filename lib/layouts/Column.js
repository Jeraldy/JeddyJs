"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var style = function (_a) {
    var align = _a.align;
    return {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: align
    };
};
exports.default = (function (_a) {
    var children = _a.children, align = _a.align;
    return Div_1.default({ children: children, style: style({ align: align }) });
});
//# sourceMappingURL=Column.js.map