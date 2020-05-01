"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("../../core/Button");
var ButtonType_1 = require("./ButtonType");
var Div_1 = require("../../core/Div");
var Span_1 = require("../../core/Span");
var TextView_1 = require("../../core/TextView");
require("../../styles/button.css");
exports.default = (function (_a) {
    var label = _a.label, icon = _a.icon, type = _a.type, onclick = _a.onclick, style = _a.style;
    return Button_1.default({
        className: type || ButtonType_1.default.UNELEVETED,
        children: buttonChidren(type, label),
        onClick: onclick || function () { },
        style: style
    });
});
function buttonChidren(type, label) {
    if (type === ButtonType_1.default.DEFAULT) {
        return [TextView_1.default(label || '')];
    }
    return [
        Div_1.default({ className: 'mdc-button__ripple' }),
        Span_1.default({
            className: 'mdc-button__label',
            children: [TextView_1.default(label || '')]
        })
    ];
}
//# sourceMappingURL=Index.js.map