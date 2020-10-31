"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const RowAlignment_1 = require("./RowAlignment");
const _style = (wrapContent, align) => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlignment_1.default.Start,
    };
};
const Row = (args) => {
    const style = args.style || {};
    return Div_1.default(Object.assign(Object.assign({}, args), { style: Object.assign(Object.assign({}, _style(args.wrapContent, args.align)), style) }));
};
exports.default = Row;
//# sourceMappingURL=Row.js.map