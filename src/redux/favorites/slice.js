import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
});

export const favoritesReducer = favoritesSlice.reducer;
