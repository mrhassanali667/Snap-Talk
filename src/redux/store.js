import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice.js'
import imageReducer from './imageBox/imageBoxSlice.js'
import chatBoxReducer from './chatbox/chatBoxSlice.js'
import profileReducer from './Profile/profileSlice.js'
import chatReducer from './chat/chatSlice.js'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        image: imageReducer,
        chatBox: chatBoxReducer,
        profile: profileReducer,
        chat: chatReducer,
    },
})

