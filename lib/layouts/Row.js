"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../core/Div");
const RowAlignment_1 = require("./RowAlignment");
const style = (wrapContent, bgColor, align) => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment_1.default.Start,
        backgroundColor: bgColor || ''
    };
};
const Row = ({ children, align, id, backgroundColor, wrapContent = true }) => {
    return Div_1.default({ children, style: style(wrapContent, backgroundColor, align), id });
};
exports.default = Row;
//# sourceMappingURL=Row.js.map