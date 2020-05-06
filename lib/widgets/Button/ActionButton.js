"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = require("../../core/Button");
const TextView_1 = require("../../core/TextView");
require("../../styles/action.button.css");
exports.default = ({ icon, props, onclick }) => {
    return Button_1.default(Object.assign({ className: "mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded", children: [
            TextView_1.default(icon)
        ], onClick: onclick || function () { } }, props));
};
//# sourceMappingURL=ActionButton.js.map