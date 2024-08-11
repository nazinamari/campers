import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	location: '',
	equipment: [],
	type: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
});

export const filterReducer = filterSlice.reducer;
