"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("../../core/Button");
var ButtonTypes_1 = require("./ButtonTypes");
var Div_1 = require("../../core/Div");
var Span_1 = require("../../core/Span");
var TextView_1 = require("../../core/TextView");
require("../../styles/button.css");
exports.default = (function (_a) {
    var label = _a.label, icon = _a.icon, type = _a.type, onclick = _a.onclick;
    return Button_1.default({
        class: type || ButtonTypes_1.default.UNELEVETED,
        children: [
            Div_1.default({ class: 'mdc-button__ripple' }),
            Span_1.default({
                class: 'mdc-button__label',
                children: [
                    TextView_1.default(label || '')
                ]
            })
        ],
        onclick: onclick || function () { }
    });
});
//# sourceMappingURL=Index.js.map