import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchFilteredCampers, PAGE_LIMIT } from './operations';

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

				const newCampers = action.payload.filter(
					(newCamper) =>
						!state.items.some((camper) => camper._id === newCamper._id)
				);
				state.items = [...state.items, ...newCampers];
				state.page += 1;

				if (action.payload.length < PAGE_LIMIT) {
					state.isLastPage = true;
				}
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

				if (action.payload.length < PAGE_LIMIT) {
					state.isLastPage = true;
				}
			})
			.addCase(fetchFilteredCampers.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}),
});

export default catalogSlice.reducer;

export const catalogReducer = catalogSlice.reducer;
