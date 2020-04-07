"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Div_1 = require("../core/Div");
var style = {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
exports.default = (function (_a) {
    var child = _a.child;
    return Div_1.default({ children: [child], style: style });
});
//# sourceMappingURL=Center.js.map