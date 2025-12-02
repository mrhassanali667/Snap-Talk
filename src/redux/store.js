import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice.js'
import imageReducer from './imageBox/imageBoxSlice.js'
import chatReducer from './chatbox/chatBoxSlice.js'
import profileReducer from './Profile/profileSlice.js'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        image: imageReducer,
        chat: chatReducer,
        profile: profileReducer
    },
})

