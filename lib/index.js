"use strict";
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
        this.componetWillUpdate();
        this.state = Object.assign(Object.assign({}, this.state), newState);
        let newTree = this.render();
        let oldTree = this.node;
        Reconcile_1.updateElement(document.getElementById('root'), Reconcile_1.generateHTree(newTree), Reconcile_1.generateHTree(oldTree));
        this.node = newTree;
        this.componentDidUpdate();
        return this.state;
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
        Reconcile_1.updateElement(root, Reconcile_1.generateHTree(app), 0);
    },
};
//# sourceMappingURL=index.js.map