"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const toolkit_1 = require("@reduxjs/toolkit");
const slice = toolkit_1.createSlice({
    name: 'reducer',
    initialState: {},
    reducers: {}
});
exports.default = redux_1.combineReducers({ reducer: slice.reducer });
//# sourceMappingURL=reducer.js.map