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
const Reconcile_1 = require("./core/Reconcile");
const index_1 = require("./jredux/index");
const redux_1 = require("redux");
class StatefulWidget {
    constructor(props) {
        this.state = {};
        this.props = {};
        this.props = props;
        if (props && props.reducers) {
            index_1.replaceReducer(redux_1.combineReducers(Object.assign({}, props.reducers)));
        }
        this.componentMounted();
    }
    componentDidMount() { }
    componentDidUpdate() { }
    componetWillUpdate() { }
    mapStoreToState(reduxState) { return {}; }
    render() { throw new Error("Method not implemented."); }
    setState(newState) {
        return __awaiter(this, void 0, void 0, function* () {
            this.componetWillUpdate();
            this.state = Object.assign(Object.assign({}, this.state), newState);
            let newTree = Reconcile_1.generateHTree(this.render());
            let oldTree = Reconcile_1.generateHTree(this.node);
            Reconcile_1.updateElement(document.getElementById('root'), newTree, oldTree);
            this.componentDidUpdate();
            return this.state;
        });
    }
    componentMounted() {
        document.addEventListener("DOMContentLoaded", (_) => {
            this.componentDidMount();
        });
    }
    connect() {
        this.node = this.render();
        return this.node;
    }
}
exports.StatefulWidget = StatefulWidget;
exports.Jeddy = {
    Init({ app, root }) {
        Reconcile_1.updateElement(root, Reconcile_1.generateHTree(app));
    },
};
//# sourceMappingURL=index.js.map