"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _Table_1 = require("./_Table");
require("../../styles/data.table.css");
exports.default = (function (_a) {
    var data = _a.data, titles = _a.titles, actions = _a.actions, title = _a.title;
    return new _Table_1.default({ data: data, titles: titles, actions: actions, title: title });
});
//# sourceMappingURL=index.js.map