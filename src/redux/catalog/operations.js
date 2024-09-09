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
					limit: PAGE_LIMIT,
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
			const { filters } = thunkAPI.getState();

			const { data } = await instance.get('/campers');

			const allowedForms = ['panelTruck', 'alcove', 'fullyIntegrated'];

			const result = data.filter((item) => {
				// Перевірка на обладнання
				const equipmentMatch =
					filters.equipment.length === 0 || // Якщо фільтрів по обладнанню немає, пропускаємо
					(filters.equipment.includes('transmission') && item.transmission) ||
					(filters.equipment.includes('airConditioner') &&
						item.details.airConditioner >= 1) ||
					(filters.equipment.includes('shower') && item.details.shower >= 1) ||
					(filters.equipment.includes('kitchen') &&
						item.details.kitchen >= 1) ||
					(filters.equipment.includes('TV') && item.details.TV >= 1);

				// Перевірка на тип
				const typeMatch =
					filters.type.length === 0 || // Якщо фільтрів по типу немає, пропускаємо
					(allowedForms.includes(item.form) &&
						filters.type.includes(item.form)); // Перевіряємо, чи form є в списку allowedForms і в фільтрах

				// Перевірка на локацію
				const locationMatch =
					!filters.location || item.location.includes(filters.location);

				// Повертаємо true, якщо всі умови виконані
				return equipmentMatch && typeMatch && locationMatch;
			});

			console.log(result);

			return result;
		} catch (error) {
			toast.error('Failed to load filtered campers.');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
