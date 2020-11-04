"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducer = exports.connect = exports.updateState = exports.dispatch = exports.register = exports.replaceReducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const reducer_1 = require("./reducer");
const redux_1 = require("redux");
let reducers = { RMediaQuery: reducer_1.reducer };
const store = toolkit_1.configureStore({ reducer: redux_1.combineReducers(Object.assign({}, reducers)) });
exports.replaceReducer = (rootReducer) => {
    store.replaceReducer(rootReducer);
};
exports.register = (newReducers) => {
    Object.keys(newReducers).forEach(name => {
        if (!reducers.hasOwnProperty(name)) {
            reducers = Object.assign(Object.assign({}, reducers), { [name]: newReducers[name] });
            exports.replaceReducer(redux_1.combineReducers(Object.assign({}, reducers)));
        }
    });
    return store.getState();
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
exports.connect = (mapStoreToState, index = 0) => {
    return (widget) => (args) => {
        if (widget.onInit && index == 1) {
            widget.onInit();
        }
        index += 1;
        return widget(mapStoreToState(store.getState()), args);
    };
};
exports.createReducer = (reducer) => toolkit_1.createSlice(reducer);
//# sourceMappingURL=index.js.map