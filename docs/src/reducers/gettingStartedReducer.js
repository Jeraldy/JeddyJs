import { createReducer } from "jeddy/jredux";

const _reducer = createReducer({
    name: 'gettingStarted',
    initialState: {
        activePage: "",
        stateKey: "1. Installation,",
        activePart: 1
    },
    reducers: {
        setActivePage(state, action) {
            return {
                ...state,
                activePage: action.payload.el,
                description: action.payload.desc
            }
        },
        setActivePart(state, action) {
            return {
                ...state,
                activePart: action.payload
            }
        },
        setActiveMenu(state, action) {
            return {
                ...state,
                activeMenu: action.payload,
            }
        },
        updateMenu(state, action) {
            return {
                ...state,
                stateKey: action.payload
            }
        }
    }
})

export const { reducer, actions } = _reducer;

