"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Size_1 = require("../../utils/Size");
exports.default = {
    all: function (size) {
        return { margin: size };
    },
    only: function (_a) {
        var left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
        return {
            marginLeft: left || Size_1.default._0px,
            marginRight: right || Size_1.default._0px,
            marginTop: top || Size_1.default._0px,
            marginBottom: bottom || Size_1.default._0px
        };
    }
};
//# sourceMappingURL=EdgeInsets.js.map