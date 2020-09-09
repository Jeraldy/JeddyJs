"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Icons_1 = require("../../utils/Icons");
const Div_1 = require("../../dom/Div");
const Row_1 = require("../../layouts/Row");
const Icon_1 = require("../Icon");
const RowAlignment_1 = require("../../layouts/RowAlignment");
const Size_1 = require("../../utils/Size");
const TextView_1 = require("../../dom/TextView");
const Colors_1 = require("../../utils/Colors");
const Collapsible = ({ clickCallBack, label, icon, children = [], stateKey, style, activeBarColor }) => {
    const _stateKey = stateKey.split(",");
    const isActive = _stateKey[_stateKey.length - 2] == label;
    let context = Div_1.default({
        children: [
            Div_1.default({
                children: [
                    Row_1.default({
                        children: [
                            Div_1.default({
                                children: [
                                    Row_1.default({
                                        children: [
                                            icon ? Icon_1.default({ name: icon.icon, style: icon.style }) : null,
                                            Div_1.default({
                                                children: [
                                                    TextView_1.default(label || '')
                                                ],
                                                style: {
                                                    marginLeft: Size_1.default._8px,
                                                    marginTop: Size_1.default._5px,
                                                }
                                            })
                                        ],
                                    }),
                                ],
                            }),
                            children.length > 0 ? Icon_1.default({ name: stateKey.includes(label) ? Icons_1.default.keyboard_arrow_down : Icons_1.default.keyboard_arrow_right }) : null,
                        ],
                        align: RowAlignment_1.default.SpaceBetween
                    })
                ],
                style: Object.assign({ backgroundColor: Colors_1.default.grey_lighten4, cursor: 'pointer', padding: Size_1.default._8px, paddingTop: Size_1.default._5px, borderTop: '1px solid #FFFFFF', fontWeight: isActive ? 'bolder' : 'lighter' }, style),
                onClick: () => {
                    if (stateKey.includes(`${label},`)) {
                        stateKey = stateKey.split(`${label},`).join("");
                    }
                    else {
                        stateKey += `${label},`;
                    }
                    const mainMenus = context.getAttribute('mainNodes');
                    if (mainMenus) {
                        if (mainMenus.includes(`${label}`)) {
                            mainMenus.split(",").forEach(ref => {
                                if (ref !== label) {
                                    stateKey = stateKey.split(`${ref},`).join("");
                                }
                            });
                        }
                    }
                    clickCallBack(stateKey);
                }
            }),
            Div_1.default({
                style: {
                    height: calcHeight(stateKey, label),
                    cursor: 'pointer',
                    transition: 'height .2s',
                    overflow: 'hidden',
                    borderLeft: `5px solid ${activeBarColor || Colors_1.default.grey}`,
                },
                children
            }),
        ],
        attrs: {
            ref: label
        }
    });
    return context;
};
exports.default = Collapsible;
function calcHeight(stateKey, label) {
    let height = '0px';
    if (stateKey.includes(`${label},`)) {
        height = '100%';
    }
    return height;
}
//# sourceMappingURL=index.js.map