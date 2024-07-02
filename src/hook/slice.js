import {createSlice} from "@reduxjs/toolkit"

const sideSlice = createSlice({
    name: "dashboard",
    initialState: {
        side: true,
    },
    reducers: {
        setSide(state, action){
            state.side = action.payload
        }
    }
})

export const {setSide} = sideSlice.actions
export default sideSlice.reducer;