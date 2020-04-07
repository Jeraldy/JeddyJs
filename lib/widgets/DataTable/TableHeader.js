"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var H1_1 = require("../../core/H1");
var TextView_1 = require("../../core/TextView");
var Search_1 = require("./Search");
var Row_1 = require("../../layouts/Row");
var Size_1 = require("../../utils/Size");
var Div_1 = require("../../core/Div");
var Center_1 = require("../../layouts/Center");
var RowAlignment_1 = require("../../layouts/RowAlignment");
exports.default = (function (props) {
    var actions = props.actions;
    var title = props.title || '';
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
                        children: __spreadArrays([
                            Search_1.default(props)
                        ], actions)
                    })
                ]
            })
        ],
        style: {
            paddingTop: Size_1.default._8px
        }
    });
});
//# sourceMappingURL=TableHeader.js.map