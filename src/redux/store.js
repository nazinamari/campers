import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';
import { favoritesReducer } from './favorites/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		favorites: favoritesReducer,
		filter: filterReducer,
	},
});
