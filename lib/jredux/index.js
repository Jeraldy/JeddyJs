"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const reducer_1 = require("./reducer");
const Div_1 = require("../dom/Div");
const store = toolkit_1.configureStore({ reducer: reducer_1.default });
exports.replaceReducer = (rootReducer) => {
    store.replaceReducer(rootReducer);
};
exports.dispatch = (props) => {
    return store.dispatch(props);
};
exports.updateState = (context) => {
    _updateState(context);
    store.subscribe(() => _updateState(context));
};
function _updateState(context) {
    let newState = context.mapStoreToState(store.getState());
    context.setState(Object.assign(Object.assign({}, context.state), newState));
}
exports.connect = (mapStoreToState) => {
    if (store.getState().hasOwnProperty('reducer')) {
        return (widget) => (args) => Div_1.default({ children: ["Reducer is not configired"] });
    }
    return (widget) => (args) => widget(mapStoreToState(store.getState()), args);
};
exports.createReducer = (reducer) => toolkit_1.createSlice(reducer);
//# sourceMappingURL=index.js.map