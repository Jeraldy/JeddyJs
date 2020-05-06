"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../index");
const Table_1 = require("../../core/Table");
const Thead_1 = require("../../core/Thead");
const Tr_1 = require("../../core/Tr");
const Tbody_1 = require("../../core/Tbody");
const TextView_1 = require("../../core/TextView");
const Td_1 = require("../../core/Td");
const TableHeader_1 = require("./TableHeader");
const index_2 = require("../Divider/index");
const Div_1 = require("../../core/Div");
const Section_1 = require("../../core/Section");
const Footer_1 = require("../../core/Footer");
const Span_1 = require("../../core/Span");
const ActionButton_1 = require("../Button/ActionButton");
var DIMS;
(function (DIMS) {
    DIMS[DIMS["SIZE"] = 10] = "SIZE";
})(DIMS || (DIMS = {}));
class _Table extends index_1.StatefulWidget {
    constructor(props) {
        super(props);
        this.state = Object.assign(Object.assign({}, this.props), { query: '', start: 0, end: DIMS.SIZE });
        this.filterTable = this.filterTable.bind(this);
        return this.connect();
    }
    filterTable(e) {
        var _data = [];
        //@ts-ignore
        let query = e.target.value;
        this.props.data.forEach((row) => {
            for (var j = 0; j < row.length; j++) {
                if (typeof row[j] != 'object') {
                    if (row[j].toString().toLowerCase().includes(query.toLowerCase())) {
                        _data.push(row);
                        break;
                    }
                }
            }
        });
        this.setState({ data: _data, query }, e);
    }
    nextData() {
        let start = this.state.start + DIMS.SIZE;
        let end = this.state.end + DIMS.SIZE;
        let data = this.state.data.slice(start, end);
        if (data.length > 0) {
            this.setState({ start, end });
        }
    }
    prevData() {
        let start = this.state.start - DIMS.SIZE;
        let end = this.state.end - DIMS.SIZE;
        let data = this.state.data.slice(start, end);
        if (data.length > 0) {
            this.setState({ start, end });
        }
    }
    render() {
        const data = this.state.data.slice(this.state.start, this.state.end);
        return Section_1.default({
            className: "md-ui component-data-table",
            children: [
                TableHeader_1.default({
                    filter: (e) => this.filterTable(e),
                    query: this.state.query,
                    actions: [...this.state.actions],
                    title: this.state.title
                }),
                index_2.default({ style: { backgroundColor: '#e0e0e0' } }),
                Div_1.default({
                    className: "main-table-wrapper",
                    children: [
                        Table_1.default({
                            className: "main-table-content",
                            children: [
                                Thead_1.default({
                                    className: "data-table-header",
                                    children: [
                                        Tr_1.default({
                                            className: "data-table-row",
                                            children: this.state.titles.map((v) => TD(v.title, v.style))
                                        })
                                    ]
                                }),
                                Tbody_1.default({
                                    className: "data-table-content",
                                    children: data.map((row) => Tr_1.default({
                                        className: "data-table-row",
                                        children: row.map((v) => TD(v))
                                    }))
                                })
                            ]
                        })
                    ]
                }),
                Footer_1.default({
                    className: "main-table-footer",
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
                            className: "rows-amount",
                            children: [TextView_1.default(`Showing: ${this.state.start + 1}-${data.length + this.state.start} of ${this.props.data.length}`)]
                        }),
                        Span_1.default({
                            className: "table-pagination",
                            children: [
                                ActionButton_1.default({
                                    icon: "keyboard_arrow_left",
                                    onclick: () => this.prevData()
                                }),
                                ActionButton_1.default({
                                    icon: "keyboard_arrow_right",
                                    onclick: () => this.nextData()
                                }),
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
function TD(title, style) {
    return Td_1.default({
        children: [
            typeof title != 'object' ? TextView_1.default(title) : title
        ],
        style
    });
}
exports.default = _Table;
//# sourceMappingURL=_Table.js.map