import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
	username: Yup.string()
		.min(4, 'Name is too Short!')
		.max(16, 'Name is too Long!')
		.required('Required'),
	email: Yup.string().email('Must be a valid email!').required('Required'),
	date: Yup.string()
		.min(4, 'Date is too Short!')
		.max(16, 'Date is too Long!')
		.required('Required'),
});

export default FeedbackSchema;
