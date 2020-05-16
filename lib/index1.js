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
const reconcile_1 = require("./reconcile");
class StatefulWidget {
    constructor(props) {
        this.props = {};
        this.state = {};
        this.props = props;
        this.componentMounted();
    }
    mapStoreToState(reduxState) { return {}; }
    componentDidMount() { }
    componentDidUpdate() { }
    componetWillUpdate() { }
    render() { throw new Error("Method not implemented."); }
    setState(NewState, e) {
        return __awaiter(this, void 0, void 0, function* () {
            this.componetWillUpdate();
            this.state = Object.assign(Object.assign({}, this.state), NewState);
            let newNode = this.render();
            reconcile_1.updateElement(document.getElementById("root"), reconcile_1.converToHFun(newNode), reconcile_1.converToHFun(this.node));
            this.node = newNode;
            this.componentDidUpdate();
            return this.state;
        });
    }
    componentMounted() {
        document
            .addEventListener("DOMContentLoaded", (_) => this.componentDidMount());
    }
    connect() {
        this.node = this.render();
        return this.node;
    }
}
exports.StatefulWidget = StatefulWidget;
exports.Jeddy = {
    Init(entryNode) {
        console.log(reconcile_1.converToHFun(entryNode));
        reconcile_1.updateElement(document.getElementById("root"), reconcile_1.converToHFun(entryNode));
    }
};
//# sourceMappingURL=index1.js.map