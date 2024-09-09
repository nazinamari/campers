import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	location: '',
	equipment: [],
	type: '',
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setLocation(state, action) {
			state.location = action.payload;
		},
		setEquipment(state, action) {
			state.equipment = action.payload;
		},
		setType(state, action) {
			state.type = action.payload;
		},
	},
});

export const { setLocation, setEquipment, setType, clearFilters } =
	filterSlice.actions;

export const filterReducer = filterSlice.reducer;
