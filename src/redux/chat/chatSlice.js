import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedUser: null,
    messages: []
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
        },
        setMessages: (state,action) => {
            state.messages = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setSelectedUser, clearSelectedUser } = chatSlice.actions

export default chatSlice.reducer