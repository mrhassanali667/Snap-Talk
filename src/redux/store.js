import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import imageReducer from './imageBox/imageBoxSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        image:imageReducer
    },
})

