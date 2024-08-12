import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { instance } from '../../axios/api';

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
