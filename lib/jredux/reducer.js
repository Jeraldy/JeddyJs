"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.reducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const slice = toolkit_1.createSlice({
    name: 'RMediaQuery',
    initialState: { device: 10 },
    reducers: {
        setMediaQuery(state, action) {
            return Object.assign({}, action.payload);
        }
    }
});
exports.reducer = slice.reducer, exports.actions = slice.actions;
//# sourceMappingURL=reducer.js.map