import { createReducer } from "jeddy/jredux";

const _reducer = createReducer({
    name: 'layout',
    initialState: {
        activePage: "",
        stateKey: "Row,",
        activePart: "Row"
    },
    reducers: {
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

