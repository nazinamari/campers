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

			// Ініціалізація параметрів запиту
			const params = {
				page: currentPage + 1,
				limit: PAGE_LIMIT,
			};

			// Обробка фільтрів
			if (filters.location) {
				params.location = filters.location.toLowerCase(); // Зменшення до нижнього регістру
			}
			if (filters.equipment.length > 0) {
				params.equipment = filters.equipment
					.map((eq) => eq.toLowerCase())
					.join(','); // Форматування для запиту
			}
			if (filters.type.length > 0) {
				params.type = filters.type.toLowerCase(); // Зменшення до нижнього регістру
			}

			// Обробка details
			if (filters.details) {
				Object.keys(filters.details).forEach((detailKey) => {
					const detailValue = filters.details[detailKey];
					if (detailValue) {
						params[`details_${detailKey}`] = detailValue.toLowerCase();
					}
				});
			}

			// Запит до API
			const response = await instance.get('/campers', { params });

			// Витягування даних з відповіді
			let filteredCampers = response.data;

			// Фільтрація даних після отримання відповіді (якщо необхідно)
			if (filters.equipment.length > 0) {
				filteredCampers = filteredCampers.filter(
					(item) =>
						item.details &&
						filters.equipment.some(
							(eq) => item.details[eq] || item.details[eq] === undefined
						)
				);
			}

			if (filters.type) {
				filteredCampers = filteredCampers.filter(
					(item) => item.form === filters.type
				);
			}

			const [countryFilter, cityFilter] = filters.location
				? filters.location.toLowerCase().split(', ')
				: [null, null];

			const result = filteredCampers.filter((item) => {
				const [country, city] = item.location.toLowerCase().split(', ');
				return (
					(!cityFilter || city.includes(cityFilter)) &&
					(!countryFilter || country.includes(countryFilter))
				);
			});

			return result;
		} catch (error) {
			toast.error('Failed to load filtered campers.');
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
