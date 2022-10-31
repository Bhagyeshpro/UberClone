import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination : null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = state.action.payload;
        },
        setDestination: (state, action) => {
            state.destination = state.action.payload;
        },
        setTraveTimeInformation: (state, action) => {
            state.travelTimeInformation = state.action.payload
        },
    },
});

export const { setOrigin, setDestination, setTraveTimeInformation} = navSlice.actions;

// Selector = to grab information from data layer

export const selectOrigin = (state) => state.nav.origin;
export const selectDesination = (state) => state.nav.destination;
export const selectTravelTimeInfromation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;