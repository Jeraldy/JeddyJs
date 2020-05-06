"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../../core/Div");
const TextView_1 = require("../../core/TextView");
const Size_1 = require("../../utils/Size");
const Button_1 = require("../../core/Button");
require("./style.css");
const style = {
    backgroundColor: '#4D5573',
    color: 'white',
    cursor: 'pointer',
    padding: Size_1.default._8px,
    width: Size_1.default._220px,
    border: '1px solid #4D5573'
};
const _style = {
    backgroundColor: '#424242',
    color: 'white',
    height: '0px'
};
exports.default = ({ title }) => {
    return MenuItem(title);
};
function MenuItem(title) {
    const btn = Button_1.default({ className: "collapsible", children: [TextView_1.default(title)] });
    btn.addEventListener("click", function () {
        const contents = document.getElementsByClassName('content');
        const content = this.nextSibling;
        //@ts-ignore
        for (let el of contents) {
            if (el != content) {
                //@ts-ignore
                el.style.visibility = 'hidden';
                //@ts-ignore
                el.style.opacity = '0';
                //@ts-ignore
                el.style.height = '0px';
            }
        }
        //@ts-ignore
        let cstyle = content.style;
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
                className: "content",
                children: [TextView_1.default(" Contets for " + title)],
                style: {
                    height: Size_1.default._0px
                }
            })]
    });
}
//# sourceMappingURL=index.js.map