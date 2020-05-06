"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../tikiti/index");
const Div_1 = require("../../core/Div");
const Size_1 = require("../../utils/Size");
const indexts_1 = require("./indexts");
const axios_1 = require("axios");
const Menu_1 = require("../Menu/Menu");
const MenuItem_1 = require("../Menu/MenuItem");
const ActionButton_1 = require("../Button/ActionButton");
class TableExample extends index_1.StatefulWidget {
    constructor() {
        super();
        this.state = { data: [] };
        return this.connect();
    }
    componentDidMount() {
        this.generateData();
    }
    generateData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(`https://jsonplaceholder.typicode.com/users`);
            var data = [];
            response.data.forEach((row) => {
                data.push([
                    row.id,
                    row.name,
                    row.username,
                    row.website,
                    row.phone,
                    row.email,
                    "A",
                ]);
            });
            this.setState({ data });
        });
    }
    action(id) {
        return Div_1.default({
            class: 'mdc-menu-surface--anchor',
            children: [
                ActionButton_1.default({
                    icon: 'more_vert',
                    onclick: () => Menu_1.toggleMenu(id),
                }),
                Menu_1.default({
                    id,
                    menuItems: [
                        MenuItem_1.default({ label: 'Details - ' + id }),
                        MenuItem_1.default({ label: 'Edit', }),
                        MenuItem_1.default({ label: 'Remove', }),
                        MenuItem_1.default({ label: 'Item x', })
                    ]
                })
            ],
        });
    }
    render() {
        return indexts_1.default({
            title: 'Customers',
            titles: [
                { title: '#', style: { width: Size_1.default._10px } },
                { title: 'Name' },
                { title: 'Username' },
                { title: 'Website' },
                { title: 'Phone' },
                { title: 'Email' },
                { title: '', style: { width: Size_1.default._2px } },
            ],
            data: this.state.data,
            actions: [
                ActionButton_1.default({ icon: "add", props: { style: { color: 'gray' } } }),
                ActionButton_1.default({ icon: "more_vert", props: { style: { color: 'gray' } } }),
            ]
        });
    }
}
exports.default = TableExample;
//# sourceMappingURL=Example.js.map