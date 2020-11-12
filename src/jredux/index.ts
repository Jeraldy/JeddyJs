import { configureStore, createSlice } from '@reduxjs/toolkit';
import { reducer as RMediaQuery } from './reducer';
import { combineReducers } from 'redux';

let reducers = { RMediaQuery }
const store = configureStore({ reducer: combineReducers({ ...reducers }) })

export const replaceReducer = (rootReducer) => {
    store.replaceReducer(rootReducer)
}

export const register = (newReducers) => {
    Object.keys(newReducers).forEach(name => {
        if (!reducers.hasOwnProperty(name)) {
            reducers = { ...reducers, [name]: newReducers[name] }
            replaceReducer(combineReducers({ ...reducers }))
        }
    })
    return store.getState()
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

export const connect = (mapStoreToState, index = 0) => {
    return (widget) => (...args) => {
        if (widget.onInit && index == 1) {
            widget.onInit()
        }
        index += 1;
        return widget(mapStoreToState(store.getState()), ...args)
    }
}

export const createReducer = (reducer) => createSlice(reducer)



