"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var Column_1 = require("./Column");
var Row_1 = require("./Row");
var style = {
    height: '100%',
    width: '100%',
    border: '2px solid red'
};
exports.default = (function (_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom, center = _a.center;
    return Div_1.default({
        children: [
            Column_1.default({
                children: [
                    top || null,
                    Row_1.default({
                        children: [
                            left || null,
                            center || null,
                            right || null
                        ]
                    }),
                    bottom || null
                ]
            })
        ],
        style: style
    });
});
//# sourceMappingURL=BorderPane.js.map