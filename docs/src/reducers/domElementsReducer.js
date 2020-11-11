import { createReducer } from "jeddy/jredux";

const _reducer = createReducer({
    name: 'domEl',
    initialState: {
        activeMenu: "Getting Started",
        activePage: "Address",
        description: "The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.",
        stateKey: "Content Sectioning,Address,",
        isLandingPage: true
    },
    reducers: {
        setActivePage(state, action) {
            return {
                ...state,
                activePage: action.payload.el,
                description: action.payload.desc
            }
        },
        setActiveMenu(state, action) {
            return {
                ...state,
                activeMenu: action.payload,
            }
        },
        toggleLandingPage(state) {
            return {
                ...state,
                isLandingPage: !state.isLandingPage
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

