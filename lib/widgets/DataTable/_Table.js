"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var Table_1 = require("../../core/Table");
var Thead_1 = require("../../core/Thead");
var Tr_1 = require("../../core/Tr");
var Tbody_1 = require("../../core/Tbody");
var TextView_1 = require("../../core/TextView");
var Td_1 = require("../../core/Td");
var TableHeader_1 = require("./TableHeader");
var index_2 = require("../Divider/index");
var Div_1 = require("../../core/Div");
var Section_1 = require("../../core/Section");
var Footer_1 = require("../../core/Footer");
var Span_1 = require("../../core/Span");
var ActionButton_1 = require("../Button/ActionButton");
var DIMS;
(function (DIMS) {
    DIMS[DIMS["SIZE"] = 10] = "SIZE";
})(DIMS || (DIMS = {}));
var _Table = /** @class */ (function (_super) {
    __extends(_Table, _super);
    function _Table(props) {
        var _this = _super.call(this, props) || this;
        _this.state = __assign(__assign({}, _this.props), { query: '', start: 0, end: DIMS.SIZE });
        _this.filterTable = _this.filterTable.bind(_this);
        return _this.connect();
    }
    _Table.prototype.filterTable = function (e) {
        var _data = [];
        //@ts-ignore
        var query = e.target.value;
        //@ts-ignore
        this.props.data.forEach(function (row) {
            for (var j = 0; j < row.length; j++) {
                if (typeof row[j] != 'object') {
                    if (row[j].toString().toLowerCase().includes(query.toLowerCase())) {
                        _data.push(row);
                        break;
                    }
                }
            }
        });
        this.setState({ data: _data, query: query }, e);
    };
    _Table.prototype.nextData = function () {
        var start = this.state.start + DIMS.SIZE;
        var end = this.state.end + DIMS.SIZE;
        var data = this.state.data.slice(start, end);
        if (data.length > 0) {
            this.setState({ start: start, end: end });
        }
    };
    _Table.prototype.prevData = function () {
        var start = this.state.start - DIMS.SIZE;
        var end = this.state.end - DIMS.SIZE;
        var data = this.state.data.slice(start, end);
        if (data.length > 0) {
            this.setState({ start: start, end: end });
        }
    };
    _Table.prototype.render = function () {
        var _this = this;
        var data = this.state.data.slice(this.state.start, this.state.end);
        return Section_1.default({
            class: "md-ui component-data-table",
            children: [
                TableHeader_1.default({
                    filter: function (e) { return _this.filterTable(e); },
                    query: this.state.query,
                    actions: __spreadArrays(this.state.actions),
                    title: this.state.title
                }),
                index_2.default({ style: { backgroundColor: '#e0e0e0' } }),
                Div_1.default({
                    class: "main-table-wrapper",
                    children: [
                        Table_1.default({
                            class: "main-table-content",
                            children: [
                                Thead_1.default({
                                    class: "data-table-header",
                                    children: [
                                        Tr_1.default({
                                            class: "data-table-row",
                                            children: this.state.titles.map(function (v) { return TD(v.title, v.style); })
                                        })
                                    ]
                                }),
                                Tbody_1.default({
                                    class: "data-table-content",
                                    children: data.map(function (row) {
                                        return Tr_1.default({
                                            class: "data-table-row",
                                            children: row.map(function (v) { return TD(v); })
                                        });
                                    })
                                })
                            ]
                        })
                    ]
                }),
                Footer_1.default({
                    class: "main-table-footer",
                    children: [
                        // Span({
                        //     class: "rows-selection",
                        //     children: [
                        //         Span({ class: "rows-selection-label", children: [TextView("Rows per page:")] }),
                        //         Span({
                        //             class: "rows-selection-dropdown",
                        //             children: [
                        //                 TextView("10"),
                        //                 Icon({ name: "arrow_drop_down" })
                        //             ]
                        //         })
                        //     ]
                        // }),
                        Span_1.default({
                            class: "rows-amount",
                            //@ts-ignore
                            children: [TextView_1.default("Showing: " + (this.state.start + 1) + "-" + (data.length + this.state.start) + " of " + this.props.data.length)]
                        }),
                        Span_1.default({
                            class: "table-pagination",
                            children: [
                                ActionButton_1.default({
                                    icon: "keyboard_arrow_left",
                                    onclick: function () { return _this.prevData(); }
                                }),
                                ActionButton_1.default({
                                    icon: "keyboard_arrow_right",
                                    onclick: function () { return _this.nextData(); }
                                }),
                            ]
                        })
                    ]
                })
            ]
        });
    };
    return _Table;
}(index_1.StatefulWidget));
function TD(title, style) {
    return Td_1.default({
        children: [
            typeof title != 'object' ? TextView_1.default(title) : title
        ],
        style: style
    });
}
exports.default = _Table;
//# sourceMappingURL=_Table.js.map