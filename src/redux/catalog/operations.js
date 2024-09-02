import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { instance } from '../../axios/api';
import { selectFilter } from '../filter/selectors';

export const PAGE_LIMIT = 4;

export const fetchCampers = createAsyncThunk(
	'catalog/fetchAll',
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const currentPage = state.catalog.page;

			const response = await instance.get('/campers', {
				params: {
					page: currentPage + 1, // Наступна сторінка
					limit: PAGE_LIMIT, // Кількість оголошень на сторінці
				},
			});
			return response.data;
		} catch (error) {
			toast.error('Failed to load campers.');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchFilteredCampers = createAsyncThunk(
	'catalog/fetchFiltered',
	async (_, thunkAPI) => {
		try {
			const state = thunkAPI.getState();
			const filters = selectFilter(state);
			const currentPage = state.catalog.page;

			const params = {
				page: currentPage + 1,
				limit: PAGE_LIMIT,
			};

			// Додаємо фільтри до параметрів лише якщо вони є
			if (filters.location) {
				params.location = filters.location;
			}
			if (filters.equipment.length > 0) {
				params.equipment = filters.equipment.join(',');
			}
			if (filters.type.length > 0) {
				params.type = filters.type.join(',');
			}

			const response = await instance.get('/campers', { params });

			return response.data;
		} catch (error) {
			toast.error('Failed to load filtered campers.');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
