import * as Yup from 'yup';

const today = new Date();
today.setHours(0, 0, 0, 0);

const FeedbackSchema = Yup.object().shape({
	username: Yup.string()
		.min(4, 'Name is too Short!')
		.max(16, 'Name is too Long!')
		.required('Name is required'),
	email: Yup.string()
		.email('Must be a valid email!')
		.required('Email is required'),
	date: Yup.date()
		.min(today, 'Date cannot be in the past')
		.required('Date is required'),
});

export default FeedbackSchema;
