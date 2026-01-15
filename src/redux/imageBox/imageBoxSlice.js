import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowImage: false,
    imageURL: ''
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
        setImageURL: (state, action) => {
            state.imageURL = action.payload
        },
        clearImage: (state) => {
            state.imageURL = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { showImage, hideImage, setImageURL, clearImage } = imageSlice.actions

export default imageSlice.reducer