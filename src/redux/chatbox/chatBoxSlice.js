import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowChat: false
}

export const chatSlice = createSlice({
    name: 'chatBox',
    initialState,
    reducers: {
        showChat: (state) => {
            state.isShowChat = true

        },
        hideChat: (state) => {
            state.isShowChat = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { showChat, hideChat } = chatSlice.actions

export default chatSlice.reducer