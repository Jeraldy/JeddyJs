"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Size_1 = require("../../utils/Size");
exports.default = {
    all: (size) => {
        return { margin: size };
    },
    only: ({ left, right, top, bottom }) => {
        return {
            marginLeft: left || Size_1.default._0px,
            marginRight: right || Size_1.default._0px,
            marginTop: top || Size_1.default._0px,
            marginBottom: bottom || Size_1.default._0px
        };
    }
};
//# sourceMappingURL=EdgeInsets.js.map