"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../../core/Div");
var Row_1 = require("../../layouts/Row");
var Size_1 = require("../../utils/Size");
var TextView_1 = require("../../core/TextView");
var P_1 = require("../../core/P");
var Hr_1 = require("../../core/Hr");
var Index_1 = require("../Button/Index");
var ButtonType_1 = require("../Button/ButtonType");
var ActionButton_1 = require("../Button/ActionButton");
require("../../styles/dialog.css");
var RowAlignment_1 = require("../../layouts/RowAlignment");
exports.default = (function (_a) {
    var _b = _a.open, open = _b === void 0 ? false : _b, title = _a.title;
    var modal = Div_1.default({
        class: 'modal',
        style: {
            display: open ? "block" : "none",
            boxShadow: '-3px 3px 3px -3px rgba(0,0,0,.5)',
        },
        children: [
            Row_1.default({
                align: RowAlignment_1.default.Center,
                children: [
                    Div_1.default({
                        class: "modal-content",
                        style: {
                            width: Size_1.default._600px
                        },
                        children: [
                            Div_1.default({
                                class: "modal-header",
                                style: {
                                    padding: Size_1.default._8px
                                },
                                children: [
                                    Row_1.default({
                                        align: RowAlignment_1.default.SpaceBetween,
                                        children: [
                                            Div_1.default({
                                                style: {
                                                    marginTop: Size_1.default._10px
                                                },
                                                children: [
                                                    TextView_1.default("Title Goes Here")
                                                ]
                                            }),
                                            ActionButton_1.default({
                                                icon: 'close',
                                                onclick: function () { return modal.style.display = "none"; },
                                                props: {
                                                    style: {
                                                        marginTop: '-5px',
                                                    }
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Div_1.default({
                                class: "modal-body",
                                style: {
                                    height: Size_1.default._200px
                                },
                                children: [
                                    P_1.default({
                                        children: [TextView_1.default("Some text in the Modal Body")]
                                    })
                                ]
                            }),
                            Hr_1.default({}),
                            Div_1.default({
                                style: {
                                    padding: Size_1.default._8px
                                },
                                children: [
                                    Row_1.default({
                                        align: RowAlignment_1.default.End,
                                        children: [
                                            Index_1.default({
                                                type: ButtonType_1.default.OUTLINED, label: 'OKEY',
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
    initModal(modal);
    return modal;
});
function initModal(modal) {
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
//# sourceMappingURL=index.js.map