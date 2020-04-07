"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
var TextView_1 = require("../../core/TextView");
var Size_1 = require("../../utils/Size");
var Button_1 = require("../../core/Button");
require("./style.css");
var style = {
    backgroundColor: '#4D5573',
    color: 'white',
    cursor: 'pointer',
    padding: Size_1.default._8px,
    width: Size_1.default._220px,
    border: '1px solid #4D5573'
};
var _style = {
    backgroundColor: '#424242',
    color: 'white',
    height: '0px'
};
exports.default = (function (_a) {
    var title = _a.title;
    return MenuItem(title);
});
function MenuItem(title) {
    var btn = Button_1.default({ class: "collapsible", children: [TextView_1.default(title)] });
    btn.addEventListener("click", function () {
        var contents = document.getElementsByClassName('content');
        var content = this.nextSibling;
        //@ts-ignore
        for (var _i = 0, contents_1 = contents; _i < contents_1.length; _i++) {
            var el = contents_1[_i];
            if (el != content) {
                el.style.visibility = 'hidden';
                el.style.opacity = '0';
                el.style.height = '0px';
            }
        }
        //@ts-ignore
        var cstyle = content.style;
        if (cstyle.visibility == 'visible') {
            cstyle.visibility = 'hidden';
            cstyle.opacity = '0';
            cstyle.height = '0px';
        }
        else {
            cstyle.visibility = 'visible';
            cstyle.opacity = '1';
            cstyle.height = Size_1.default._100px;
        }
    });
    return Div_1.default({
        children: [btn, Div_1.default({
                class: "content",
                children: [TextView_1.default(" Contets for " + title)],
                style: {
                    height: Size_1.default._0px
                }
            })]
    });
}
//# sourceMappingURL=index.js.map