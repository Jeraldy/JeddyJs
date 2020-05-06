"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const H1_1 = require("../../core/H1");
const TextView_1 = require("../../core/TextView");
const Search_1 = require("./Search");
const Row_1 = require("../../layouts/Row");
const Size_1 = require("../../utils/Size");
const Div_1 = require("../../core/Div");
const Center_1 = require("../../layouts/Center");
const RowAlignment_1 = require("../../layouts/RowAlignment");
exports.default = (props) => {
    const actions = props.actions;
    const title = props.title || '';
    delete props.actions;
    delete props.title;
    return Div_1.default({
        children: [
            Row_1.default({
                align: RowAlignment_1.default.SpaceBetween,
                children: [
                    Div_1.default({
                        children: [
                            Center_1.default({
                                child: H1_1.default({
                                    children: [
                                        TextView_1.default(title)
                                    ],
                                    style: {
                                        paddingLeft: Size_1.default._16px,
                                        color: 'gray'
                                    }
                                })
                            })
                        ]
                    }),
                    Row_1.default({
                        align: RowAlignment_1.default.End,
                        children: [
                            Search_1.default(props),
                            ...actions
                        ]
                    })
                ]
            })
        ],
        style: {
            paddingTop: Size_1.default._8px
        }
    });
};
//# sourceMappingURL=TableHeader.js.map