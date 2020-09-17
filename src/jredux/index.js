import { configureStore, createSlice } from '@reduxjs/toolkit';
import initReducer from './reducer';
import { combineReducers } from 'redux';

let reducers = { initReducer }
const store = configureStore({ reducer: combineReducers({ ...reducers }) })

export const replaceReducer = (rootReducer) => {
    store.replaceReducer(rootReducer)
}

export const register = (newReducers) => {
    reducers = { ...reducers, ...newReducers }
    replaceReducer(combineReducers({ ...reducers }))
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
    return (widget) => (args) => {
        if (widget.onInit && index == 1) {
            widget.onInit()
        }
        index += 1;
        return widget(mapStoreToState(store.getState()), args)
    }
}

export const connectLibrary = (mapStoreToState, args) => {
    return (widget) => {
        if (widget.Reducer && widget.UniqueName) {
            if (!reducers.hasOwnProperty(widget.UniqueName)) {
                const reducerName = widget.UniqueName
                const _reducer = widget.Reducer(reducerName).reducer
                register({ [reducerName]: _reducer })
            }
        }
        return widget(mapStoreToState(store.getState()), args)
    }
}

export const createReducer = (reducer) => createSlice(reducer)



