import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		toggleFavourite: (state, action) => {
			const index = state.items.findIndex(
				(fav) => fav._id === action.payload._id
			);
			if (index === -1) {
				state.items.push(action.payload);
			} else {
				state.items.splice(index, 1);
			}
		},
		removeFromFavourites: (state, action) => {
			state.items = state.items.filter((fav) => fav._id !== action.payload);
		},
	},
});

export const { toggleFavourite, removeFromFavourites } =
	favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;
