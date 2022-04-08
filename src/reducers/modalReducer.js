import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalVisible: false,
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
        }
    }
})

export const { showModal, hideModal } = modalSlice.actions

export default modalSlice.reducer