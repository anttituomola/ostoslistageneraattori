import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menuName: "",
    diners: 2,
    days: 3,
    portionsPerDay: 2,
    allergies: []
}

export const metadataSlice = createSlice({
    name: "metadata",
    initialState: initialState,
    reducers: {
        menuName: (state, action) => {
            state.menuName = action.payload
        },
        incrementDiners: (state) => {
            state.diners += 1
        },
        decrementDiners: (state) => {
            state.diners -= 1
        },
        incrementDays: (state) => {
            state.days += 1
        },
        decrementDays: (state) => {
            state.days -= 1
        },
        incrementPortions: (state) => {
            state.portionsPerDay += 1
        },
        decrementPortions: (state) => {
            state.portionsPerDay -= 1
        },
        addAllergy: (state, action) => {
            state.allergies = action.payload
        }
    }
})

export const { menuName, incrementDiners, decrementDiners, incrementDays, decrementDays, incrementPortions, decrementPortions, addAllergy } = metadataSlice.actions

export default metadataSlice.reducer