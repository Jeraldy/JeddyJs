import { configureStore, createSlice } from '@reduxjs/toolkit';
import reducer from "./reducer";

const store = configureStore({ reducer })

export const replaceReducer = (rootReducer) => {
    store.replaceReducer(rootReducer)
}

export const dispatch = (props) => {
    return store.dispatch(props)
}

export const updateState = (context) => {
    _updateState(context)
    store.subscribe(() => _updateState(context))
}

function _updateState(context) {
    let newState = context.mapStoreToState(store.getState())
    context.setState({ ...context.state, ...newState })
}

export const connect = (mapStoreToState) => {
    return (widget) => (args) => widget(mapStoreToState(store.getState()), args)
}

export const createReducer = (reducer) => createSlice(reducer)



