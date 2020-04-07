"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (props, tag) {
    if (props === void 0) { props = {}; }
    var node = document.createElement(tag);
    //@ts-ignore
    if (props.children) {
        //@ts-ignore
        props.children.forEach(function (child) {
            if (child !== null) {
                node.appendChild(child);
            }
        });
        //@ts-ignore
        delete props.children;
    }
    var style = '';
    //@ts-ignore
    if (props.style) {
        //@ts-ignore
        var _style = props.style;
        for (var key in _style) {
            style += resolveCamelCase(key) + ':' + _style[key] + ';';
        }
        //@ts-ignore
        props.style = style;
    }
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        //@ts-ignore
        if (typeof props[key] === 'function') {
            //@ts-ignore
            if (props[key] !== null) {
                //@ts-ignore
                node[key] = props[key];
            }
        }
        else {
            //@ts-ignore
            node.setAttribute(key, props[key]);
        }
    }
    //node.setAttribute("id", Math.random().toString(36))
    return node;
});
function resolveCamelCase(key) {
    return key.replace(/([A-Z])/g, '-$1').toLowerCase();
}
//# sourceMappingURL=Node.js.map