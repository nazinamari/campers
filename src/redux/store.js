import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/slice';
import { favouritesReducer } from './favourites/slice';
import { filterReducer } from './filter/slice';
import { formReducer } from './form/slice';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		favourites: favouritesReducer,
		filters: filterReducer,
		form: formReducer,
	},
});
