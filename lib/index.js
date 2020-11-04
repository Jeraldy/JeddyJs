"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jeddy = exports.StatefulWidget = void 0;
const Reconcile_1 = require("./core/Reconcile");
const index_1 = require("./jredux/index");
const MediaQuery_1 = require("./core/MediaQuery");
class StatefulWidget {
    constructor(props) {
        this.state = {};
        this.props = {};
        this.props = props;
        if (props && props.reducers) {
            index_1.register(props.reducers);
        }
        MediaQuery_1.default();
        this.componentMounted();
    }
    connectedCallBack() { }
    updatedCallback() { }
    willUpdateCallBack() { }
    mapStoreToState(reduxState) { return {}; }
    render() { throw new Error("Method not implemented."); }
    setState(newState) {
        this.willUpdateCallBack();
        if (typeof this.state === "object") {
            this.state = Object.assign(Object.assign({}, this.state), newState);
        }
        else {
            this.state = newState;
        }
        let newTree = this.render();
        let oldTree = this.node;
        Reconcile_1.updateElement(document.getElementById('root'), Reconcile_1.generateVTree(newTree), Reconcile_1.generateVTree(oldTree));
        this.node = newTree;
        this.updatedCallback();
        return this.state;
    }
    componentMounted() {
        document.addEventListener("DOMContentLoaded", (_) => {
            this.connectedCallBack();
        });
    }
    connect() {
        this.node = this.render();
        return this.node;
    }
}
exports.StatefulWidget = StatefulWidget;
exports.Jeddy = {
    Init({ app }) {
        Reconcile_1.updateElement(document.getElementById('root'), Reconcile_1.generateVTree(app), 0);
    },
};
//# sourceMappingURL=index.js.map