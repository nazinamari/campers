import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/components/Button/Button';
import css from './BookingForm.module.css';
import { selectFormValues } from '../../redux/form/selectors';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import FeedbackSchema from './validationSchema';
import { setFormValues } from '../../redux/form/slice';
import { useState } from 'react';
import DateField from './DateField/DateField';
import { format } from 'date-fns';

export default function BookingForm() {
	const dispatch = useDispatch();
	const formValues = useSelector(selectFormValues);
	const [selectedDate, setSelectedDate] = useState(null);

	const handleSubmit = (values, { resetForm }) => {
		values.date = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';
		dispatch(setFormValues(values));
		console.log(values);
		resetForm();
		setSelectedDate(null);
	};

	return (
		<section className={css.booking_container}>
			<h3 className={css.title}>Book your campervan now</h3>
			<p className={css.description}>
				Stay connected! We are always ready to help you.
			</p>
			<Formik
				initialValues={formValues}
				validationSchema={FeedbackSchema}
				onSubmit={handleSubmit}
			>
				<Form className={css.form}>
					<Field placeholder="Name" type="text" name="username" />
					<ErrorMessage
						name="username"
						component="span"
						className={css.error_message}
					/>

					<Field placeholder="Email" type="email" name="email" />
					<ErrorMessage
						name="email"
						component="span"
						className={css.error_message}
					/>
					<div className={css.dateContainer}>
						<DateField
							selectedDate={selectedDate}
							setSelectedDate={setSelectedDate}
						/>
					</div>
					<ErrorMessage
						name="date"
						component="span"
						className={css.error_message}
					/>
					<Field placeholder="Comment" component="textarea" name="message" />
					<Button type="submit" className={css.btnSend}>
						Send
					</Button>
				</Form>
			</Formik>
		</section>
	);
}
