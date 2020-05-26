"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = require("../../dom/Button");
const ButtonType_1 = require("./ButtonType");
const Div_1 = require("../../dom/Div");
const Span_1 = require("../../dom/Span");
const TextView_1 = require("../../dom/TextView");
require("../../styles/button.css");
exports.default = ({ label, icon, type, onclick, style }) => {
    return Button_1.default({
        class: type || ButtonType_1.default.UNELEVETED,
        children: buttonChidren(type, label),
        onClick: onclick || function () { },
        style
    });
};
function buttonChidren(type, label) {
    if (type === ButtonType_1.default.DEFAULT) {
        return [TextView_1.default(label || '')];
    }
    return [
        Div_1.default({ class: 'mdc-button__ripple' }),
        Span_1.default({
            class: 'mdc-button__label',
            children: [TextView_1.default(label || '')]
        })
    ];
}
//# sourceMappingURL=Index.js.map