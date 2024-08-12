import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
import { instance } from '../../axios/api';

export const fetchCampers = createAsyncThunk(
	'catalog/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await instance.get('/campers');
			console.log(response);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
