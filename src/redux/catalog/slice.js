import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchFilteredCampers } from './operations';

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
	extraReducers: (builder) =>
		builder
			.addCase(fetchCampers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCampers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			})
			.addCase(fetchCampers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchFilteredCampers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchFilteredCampers.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			})
			.addCase(fetchFilteredCampers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}),
});

export default catalogSlice.reducer;

export const catalogReducer = catalogSlice.reducer;
