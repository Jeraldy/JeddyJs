"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const RowAlignment_1 = require("./RowAlignment");
const _style = (wrapContent, bgColor, align) => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment_1.default.Start,
        backgroundColor: bgColor || ''
    };
};
const Row = ({ children, align, id, backgroundColor, wrapContent = true, style }) => {
    return Div_1.default({
        children,
        style: Object.assign(Object.assign({}, _style(wrapContent, backgroundColor, align)), style),
        id
    });
};
exports.default = Row;
//# sourceMappingURL=Row.js.map