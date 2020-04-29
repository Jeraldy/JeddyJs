"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var RowAlignment_1 = require("./RowAlignment");
var style = function (align) {
    return {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: align || RowAlignment_1.default.Start
    };
};
var Row = function (_a) {
    var children = _a.children, align = _a.align, id = _a.id;
    return Div_1.default({ children: children, style: style(align), id: id });
};
exports.default = Row;
//# sourceMappingURL=Row.js.map