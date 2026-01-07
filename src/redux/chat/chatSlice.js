import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        },
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSelectedUser, clearSelectedUser } = chatSlice.actions

export default chatSlice.reducer