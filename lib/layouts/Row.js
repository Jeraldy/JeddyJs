"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var RowAlignment_1 = require("./RowAlignment");
var style = function (wrapContent, bgColor, align) {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment_1.default.Start,
        backgroundColor: bgColor || ''
    };
};
var Row = function (_a) {
    var children = _a.children, align = _a.align, id = _a.id, backgroundColor = _a.backgroundColor, _b = _a.wrapContent, wrapContent = _b === void 0 ? true : _b;
    return Div_1.default({ children: children, style: style(wrapContent, backgroundColor, align), id: id });
};
exports.default = Row;
//# sourceMappingURL=Row.js.map