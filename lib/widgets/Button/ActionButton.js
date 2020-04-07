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
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = require("../../core/Button");
var TextView_1 = require("../../core/TextView");
require("../../styles/action.button.css");
exports.default = (function (_a) {
    var icon = _a.icon, props = _a.props, onclick = _a.onclick;
    return Button_1.default(__assign({ class: "mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded", children: [
            TextView_1.default(icon)
        ], onclick: onclick || function () { } }, props));
});
//# sourceMappingURL=ActionButton.js.map