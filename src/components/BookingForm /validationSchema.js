import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
	username: Yup.string()
		.min(4, 'Name is too Short!')
		.max(16, 'Name is too Long!')
		.required('Name is required'),
	email: Yup.string()
		.email('Must be a valid email!')
		.required('Email is required'),
	date: Yup.string().min(4, 'Date is too Short!').required('Date is required'),
});

export default FeedbackSchema;
