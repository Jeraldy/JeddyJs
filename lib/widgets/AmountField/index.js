"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../core/Div");
const index_1 = require("../TextField/index");
const TextView_1 = require("../../core/TextView");
const Span_1 = require("../../core/Span");
const Size_1 = require("../../utils/Size");
exports.default = ({ currency = 'TZS', props }) => {
    let _a = Object.assign({}, props), { value = '0' } = _a, rest = __rest(_a, ["value"]);
    return Div_1.default({
        children: [
            Span_1.default({
                children: [TextView_1.default(currency)],
                style: {
                    fontWeight: 'bold',
                    padding: Size_1.default._9px,
                }
            }),
            index_1.default(Object.assign(Object.assign({}, rest), { value: AddSeparator(value), style: {
                    border: '1px solid white',
                    borderRadius: '0px',
                    marginTop: Size_1.default._1px
                } }))
        ],
        style: {
            backgroundColor: '#ccc',
            borderRadius: Size_1.default._5px,
            paddingRight: Size_1.default._1px,
            height: Size_1.default._36px
        }
    });
};
function AddSeparator(value) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
//# sourceMappingURL=index.js.map