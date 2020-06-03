import { combineReducers } from 'redux'
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'reducer',
    initialState: { },
    reducers: {}
})

export default combineReducers({ reducer: slice.reducer })