"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("../jredux/reducer");
const index_1 = require("../jredux/index");
const Device_1 = require("../utils/Device");
const { setMediaQuery } = reducer_1.actions;
function updateMediaQuery() {
    let device = 0;
    if (window.matchMedia("(max-width: 321px)").matches) {
        device = Device_1.default.TINY;
    }
    else if (window.matchMedia("(max-width: 480px)").matches) {
        device = Device_1.default.MOBILE;
    }
    else if (window.matchMedia("(max-width: 768px)").matches) {
        device = Device_1.default.TABLET;
    }
    else if (window.matchMedia("(max-width: 1024px)").matches) {
        device = Device_1.default.LAPTOP;
    }
    else if (window.matchMedia("(max-width: 1200px)").matches) {
        device = Device_1.default.DESKTOP;
    }
    else if (window.matchMedia("(max-width: 1201px)").matches) {
        device = Device_1.default.TV;
    }
    index_1.dispatch(setMediaQuery(Object.assign({ device }, window.screen)));
}
updateMediaQuery();
exports.default = () => window.onresize = updateMediaQuery;
//# sourceMappingURL=MediaQuery.js.map