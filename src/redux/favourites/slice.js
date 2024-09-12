import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const favouritesSlice = createSlice({
	name: 'favourites',
	initialState,
	reducers: {
		toggleFavourite: {
			reducer: (state, action) => {
				const index = state.items.findIndex(
					(fav) => fav._id === action.payload._id
				);
				if (index === -1) {
					state.items.push(action.payload);
				} else {
					state.items.splice(index, 1);
				}

				localStorage.setItem('favourites', JSON.stringify(state.items));
			},
			prepare: (item) => {
				return {
					payload: {
						...item,
						_id: item._id || nanoid(),
					},
				};
			},
		},
		removeFromFavourites: {
			reducer: (state, action) => {
				state.items = state.items.filter((fav) => fav._id !== action.payload);

				localStorage.setItem('favourites', JSON.stringify(state.items));
			},
			prepare: (id) => {
				return {
					payload: id,
				};
			},
		},
	},
});

export const { toggleFavourite, removeFromFavourites } =
	favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;
