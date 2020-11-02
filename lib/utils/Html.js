"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (html) => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html").body;
    return [...doc.childNodes];
};
//# sourceMappingURL=Html.js.map