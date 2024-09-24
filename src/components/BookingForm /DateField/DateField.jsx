import { useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DateField.module.css';
import Icon from '../../../shared/components/Icon/Icon';

export default function DateField({ selectedDate, setSelectedDate }) {
	const { setFieldValue } = useFormikContext(); // Доступ до Formik через useFormikContext

	return (
		<div className={css.dateContainer}>
			<DatePicker
				selected={selectedDate}
				onChange={(date) => {
					setSelectedDate(date);
					setFieldValue('date', date); // Оновлюємо значення поля 'date' в Formik
				}}
				dateFormat="dd.MM.yyyy"
				placeholderText="Booking date"
				className={css.dateField}
				style={{ width: '100%' }}
			/>
			<Icon className={css.icon} id="i-booking" width="16" height="16" />
		</div>
	);
}
