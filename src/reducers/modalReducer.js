import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalVisible: false,
    modalRecipe: null
}

export const modalSlice = createSlice({
    name: "modalReducer",
    initialState: initialState,
    reducers: {
        showModal: (state) => {
            state.modalVisible = true
        },
        hideModal: (state) => {
            state.modalVisible = false
        },
        setModalRecipe: (state, action) => {
            state.modalRecipe = action.payload
        }
    }
})

export const { showModal, hideModal, setModalRecipe } = modalSlice.actions

export default modalSlice.reducer