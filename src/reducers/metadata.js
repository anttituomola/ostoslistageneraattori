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
            if (state.diners > 0) {
                state.diners -= 1
            }
        },
        incrementDays: (state) => {
            state.days += 1
        },
        decrementDays: (state) => {
            if (state.days > 0) {
                state.days -= 1
            }
        },
        incrementPortions: (state) => {
            state.portionsPerDay += 1
        },
        decrementPortions: (state) => {
            if (state.portionsPerDay > 0) {
                state.portionsPerDay -= 1
            }
        },
        addAllergy: (state, action) => {
            state.allergies = action.payload
        }
    }
})

export const { menuName, incrementDiners, decrementDiners, incrementDays, decrementDays, incrementPortions, decrementPortions, addAllergy } = metadataSlice.actions

export default metadataSlice.reducer