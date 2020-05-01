"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Div_1 = require("../../core/Div");
var index_1 = require("../TextField/index");
var TextView_1 = require("../../core/TextView");
var Span_1 = require("../../core/Span");
var Size_1 = require("../../utils/Size");
exports.default = (function (_a) {
    var _b = _a.currency, currency = _b === void 0 ? 'TZS' : _b, props = _a.props;
    var _c = __assign({}, props), _d = _c.value, value = _d === void 0 ? '0' : _d, rest = __rest(_c, ["value"]);
    return Div_1.default({
        children: [
            Span_1.default({
                children: [TextView_1.default(currency)],
                style: {
                    fontWeight: 'bold',
                    padding: Size_1.default._9px,
                }
            }),
            index_1.default(__assign(__assign({}, rest), { value: AddSeparator(value), style: {
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
});
function AddSeparator(value) {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
//# sourceMappingURL=index.js.map