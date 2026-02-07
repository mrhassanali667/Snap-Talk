import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isShowImage: false,
    imageURL: null,
    placeHolder: '',
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        showImage: (state, actions) => {
            state.isShowImage = true
            state.imageURL = actions.payload

        },
        hideImage: (state, actions) => {
            state.isShowImage = false
            state.imageURL = null
        },
        setPlaceHolder: (state, actions) => {
            state.placeHolder = actions.payload
        },
        clearPlaceHolder: (state) => {
            state.placeHolder = ''
        }

    },
})

// Action creators are generated for each case reducer function
export const { showImage, hideImage, setPlaceHolder, clearPlaceHolder } = imageSlice.actions

export default imageSlice.reducer