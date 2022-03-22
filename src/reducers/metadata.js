import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menuName: "",
    diners: 0,
    days: 0,
    portionsPerDay: 0
}

export const metadataSlice = createSlice({
    name: "metadata",
    initialState: initialState,
    reducers: {
        updateMetadata: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { updateMetadata } = metadataSlice.actions

export default metadataSlice.reducer