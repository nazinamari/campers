import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';
import { favouritesReducer } from './favourites/slice';
import { filterReducer } from './filter/slice';
import { formReducer } from './form/slice';

const favouritesFromStorage =
	JSON.parse(localStorage.getItem('favourites')) || [];

const preloadedState = {
	favourites: {
		items: favouritesFromStorage,
	},
};

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		favourites: favouritesReducer,
		filters: filterReducer,
		form: formReducer,
	},
	preloadedState,
});
