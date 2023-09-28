import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allOffers: [],
};

const libraryPhuketSlice = createSlice({
    name: 'libraryPhuket',
    initialState,
    reducers: {
        setAllOffers(state, action) {
            state.allOffers = action.payload;
        },
    },
});

export const selectNewsById = (state, id) =>
    state.libraryPhuket.allOffers.find((offer) => offer.id === id);

export const { setAllOffers } = libraryPhuketSlice.actions;

export default libraryPhuketSlice.reducer;