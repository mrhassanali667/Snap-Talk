import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isProfileComplete: true,
    currentUserId: '',
    isProfileLoading: false
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        checkIsProfileComplete: (state, action) => {
            state.isProfileComplete = action.payload
        },
        setCurrentUserID: (state, action) => {
            state.currentUserId = action.payload
        },
        setIsProfileLoading: (state, action) => {
            state.isProfileLoading = action.payload
        }
    },
})

export const { checkIsProfileComplete, setCurrentUserID ,setIsProfileLoading} = profileSlice.actions

export default profileSlice.reducer