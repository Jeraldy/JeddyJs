import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'RMediaQuery',
    initialState: { device: 10 },
    reducers: {
        setMediaQuery(state, action) {
            return { ...action.payload }
        }
    }
})

export const { reducer, actions } = slice;