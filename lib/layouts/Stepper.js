"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = require("../dom/Div");
const Row_1 = require("./Row");
const Size_1 = require("../utils/Size");
const Center_1 = require("./Center");
const TextView_1 = require("../dom/TextView");
const Colors_1 = require("../utils/Colors");
const Column_1 = require("./Column");
const H5_1 = require("../dom/H5");
const index_1 = require("../widgets/Divider/index");
const index_2 = require("../widgets/Card/index");
const Index_1 = require("../widgets/Button/Index");
const ButtonType_1 = require("../widgets/Button/ButtonType");
const ActionButton_1 = require("../widgets/Button/ActionButton");
const RowAlignment_1 = require("./RowAlignment");
const Icons_1 = require("../utils/Icons");
const Stepper = ({ child, activeStep, callBack, steps }) => {
    return index_2.default({
        children: [
            Column_1.default({
                children: [
                    Row_1.default({
                        children: steps.map((title, index) => Step(title, index + 1, activeStep, callBack)),
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
                                        icon: Icons_1.default.keyboard_arrow_left,
                                        onclick: () => activeStep == 1 ? null : callBack(activeStep - 1)
                                    }),
                                    Index_1.default({
                                        type: ButtonType_1.default.RAISED, label: 'NEXT',
                                        onclick: () => activeStep == steps.length ? null : callBack(activeStep + 1)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ],
        style: { padding: Size_1.default._8px }
    });
};
function Step(title, index, activeStep, callBack) {
    return Row_1.default({
        align: RowAlignment_1.default.Start,
        children: [
            Div_1.default({
                style: {
                    height: activeStep == index ? Size_1.default._30px : Size_1.default._25px,
                    width: activeStep == index ? Size_1.default._30px : Size_1.default._25px,
                    borderRadius: Size_1.default._100P,
                    backgroundColor: '#FF6600',
                    border: '2px solid #FF6600',
                    color: Colors_1.default.white,
                    cursor: 'pointer'
                },
                children: [
                    Center_1.default({ child: TextView_1.default(`${index}`) })
                ],
                onClick: () => callBack(index)
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
exports.default = Stepper;
//# sourceMappingURL=Stepper.js.map