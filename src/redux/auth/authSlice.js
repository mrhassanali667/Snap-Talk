import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoading: true,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isLoading = false;

        },
        clearUser: (state) => {
            state.user = null;
            state.isLoading = false;

        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = authSlice.actions

export default authSlice.reducer