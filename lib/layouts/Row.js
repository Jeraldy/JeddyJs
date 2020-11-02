"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const RowAlign_1 = require("./RowAlign");
const _style = (wrapContent, align) => {
    return {
        display: 'flex',
        flexWrap: wrapContent ? 'wrap' : 'nowrap',
        justifyContent: align || RowAlign_1.default.Start,
    };
};
const Row = (args) => {
    const style = args.style || {};
    return Div_1.default(Object.assign(Object.assign({}, args), { style: Object.assign(Object.assign({}, _style(args.wrapContent, args.align)), style) }));
};
exports.default = Row;
//# sourceMappingURL=Row.js.map