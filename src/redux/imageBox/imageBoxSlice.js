import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowImage: false
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        showImage: (state) => {
            state.isShowImage = true

        },
        hideImage: (state) => {
            state.isShowImage = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { showImage, hideImage } = imageSlice.actions

export default imageSlice.reducer