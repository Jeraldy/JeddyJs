"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var Row_1 = require("./Row");
var Size_1 = require("../utils/Size");
var Center_1 = require("./Center");
var TextView_1 = require("../core/TextView");
var Colors_1 = require("../utils/Colors");
var Column_1 = require("./Column");
var H5_1 = require("../core/H5");
var index_1 = require("../widgets/Divider/index");
var index_2 = require("../widgets/Card/index");
var Index_1 = require("../widgets/Button/Index");
var ButtonTypes_1 = require("../widgets/Button/ButtonTypes");
var ActionButton_1 = require("../widgets/Button/ActionButton");
var RowAlignment_1 = require("./RowAlignment");
exports.default = (function (_a) {
    var child = _a.child, activeStep = _a.activeStep, callBack = _a.callBack, steps = _a.steps;
    return index_2.default({
        children: [
            Column_1.default({
                children: [
                    Row_1.default({
                        children: steps.map(function (title, index) { return Step(title, index + 1, activeStep, callBack); }),
                        align: RowAlignment_1.default.SpaceEvenly
                    }),
                    index_1.default(),
                    Div_1.default({ children: [child] }),
                    index_1.default(),
                    Div_1.default({
                        children: [
                            Row_1.default({
                                align: RowAlignment_1.default.SpaceBetween,
                                children: [
                                    ActionButton_1.default({
                                        icon: 'keyboard_arrow_left',
                                        onclick: function () { return activeStep == 1 ? null : callBack(activeStep - 1); }
                                    }),
                                    Index_1.default({
                                        type: ButtonTypes_1.default.RAISED, label: 'NEXT',
                                        onclick: function () { return activeStep == steps.length ? null : callBack(activeStep + 1); }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ],
        style: {
            padding: Size_1.default._8px
        }
    });
});
function Step(title, index, activeStep, callBack) {
    return Row_1.default({
        align: RowAlignment_1.default.Start,
        children: [
            Div_1.default({
                style: {
                    height: activeStep == index ? Size_1.default._30px : Size_1.default._25px,
                    width: activeStep == index ? Size_1.default._30px : Size_1.default._25px,
                    borderRadius: '100%',
                    backgroundColor: '#FF6600',
                    border: '2px solid #FF6600',
                    color: Colors_1.default.white,
                    cursor: 'pointer'
                },
                children: [
                    Center_1.default({
                        child: TextView_1.default("" + index)
                    })
                ],
                onclick: function () { return callBack(index); }
            }),
            Div_1.default({
                children: [
                    H5_1.default({ children: [TextView_1.default(title)], })
                ],
                style: {
                    color: activeStep == index ? Colors_1.default.black : '#ccc',
                    margin: Size_1.default._10px,
                    marginRight: Size_1.default._0px,
                }
            }),
        ]
    });
}
//# sourceMappingURL=Stepper.js.map