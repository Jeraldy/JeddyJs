import { createReducer } from "jeddy/jredux";

const _reducer = createReducer({
    name: 'gettingStarted',
    initialState: {
        activePage: "",
        stateKey: "1. Introduction,",
        activePart: 1,
        isSmallMenuOpen: false
    },
    reducers: {
        toggleSmallMenu(state) {
            return {
                ...state,
                isSmallMenuOpen: !state.isSmallMenuOpen
            }
        },
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
                activePart: action.payload,
                isSmallMenuOpen: !state.isSmallMenuOpen
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

