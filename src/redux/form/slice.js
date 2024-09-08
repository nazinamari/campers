import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formValues: {
		username: '',
		email: '',
		date: '',
		message: '',
	},
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFormValues: (state, action) => {
			state.formValues = action.payload;
		},
	},
});

export const { setFormValues } = formSlice.actions;

export const formReducer = formSlice.reducer;
