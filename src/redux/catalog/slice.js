import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	selected: null,
	page: 0,
	isLastPage: false,
	isLoading: false,
	error: null,
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
});

export const catalogReducer = catalogSlice.reducer;
